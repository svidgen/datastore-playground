import logo from './logo.svg';
import './App.css';

import { Amplify, Auth, API, DataStore, Hub, Predicates } from 'aws-amplify';
// import { DISCARD /*, STOP_SYNC, RETRY, CONTINUE_SYNC */ } from '@aws-amplify/datastore';
import awsconfig from './aws-exports';
import {
	ParentModel,
	ChildModel,
	BrokenModel,
	CompositeDog,
	CompositeOwner,
	ModelWithDefaults,
	BenchmarkedModel
} from './models';

import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import { useState } from 'react';
import * as queries from './graphql/queries';
import * as mutations from './graphql/mutations';

Amplify.configure(awsconfig);

Amplify.Logger.LOG_LEVEL = 'DEBUG';

// Hub.listen('datastore', evt => console.log('datastore event', evt));

// DataStore.configure({
//   errorHandler: error => {
//     console.log("errorHandler", error);
//   },
//   conflictHandler: data => {
//     console.log('conflict handler', data);
//     return DISCARD;
//   }
// })

window.Amplify = {
	Auth, API, DataStore, queries, mutations
};

DataStore.configure({
	errorHandler: e => {
		console.log('error encountered', e);
	}
})

window.Models = {
	BrokenModel,
	ModelWithDefaults
};

function App() {

	const [result, setResult] = useState(null);

	async function saveWithoutValue() {
		console.log('saving...');
		const saved = await DataStore.save(new BrokenModel({}));
		console.log('saved', saved);
	}


	async function saveWithValue() {
		console.log('saving...');
		const saved = await DataStore.save(new BrokenModel({value: 'some value'}));
		console.log('saved', saved);
	}


	async function getAll() {
		setResult(await DataStore.query(BrokenModel));
	}

	async function observeAll() {
		DataStore.observeQuery(BrokenModel).subscribe(({items}) => {
			setResult(items);
		});
	}

	async function hasManyBelongsTo() {
		const dog1 = await DataStore.save(new CompositeDog({
			name: 'Dog1',
			description: 'Dog1description'
		}));
		// const dog2 = await DataStore.save(new CompositeDog({
		// 	name: 'Dog2',
		// 	description: 'Dog2description'
		// }));
		const owner1 = await DataStore.save(new CompositeOwner({
			lastName: 'Cooper',
			firstName: 'Dale'
		}));
		const queriedOwner1 = await DataStore.query(CompositeOwner, {
			lastName: 'Cooper',
			firstName: 'Dale'
		});
		console.log(queriedOwner1);
		console.log(await queriedOwner1.compositeDog);
	}

	async function generateBenchmarkData() {
		for (let i = 0; i < 5000; i++) {
			const created = await DataStore.save(new BenchmarkedModel({
				indexedField: `indexed value ${i}`,
				normalField: `normal value ${i}`
			}));
			console.log({created});
			setResult(`created ${created.id} for a total of ${i+1} records ... `);
		}
	}

	async function benchmark(f) {
		const start = performance.now();
		const result = await f();
		const end = performance.now();
		return {
			result,
			time: end - start
		};
	}

	async function waitObserveQuery(predicate) {
		return new Promise(resolve => {
			const sub = DataStore.observeQuery(benchmarkedModel, predicate).subscribe(m => {
				if (m.isSynced) {
					sub.unsubscribe();
					resolve(m.items);
				}
			});
		})
	}

	async function benchmarkAll() {
		const cases = {
			all: Predicates.ALL,
			"indexedField.beginsWith('indexed value')": m => m.indexedField.beginsWith('indexed value'),
			"indexedField.eq('indexed value 1234')": m => m.indexedField.eq('indexed value 1234'),
			"normalField.eq('normal value 1234')": m => m.normalField.beginsWith('normal value'),
			"normalField.eq('normal value 1234')": m => m.normalField.eq('normal value 1234'),
		};

		const results = [];

		for (const [name, predicate] of Object.entries(cases)) {
			{
				const { time, result } = await benchmark(
					() => waitObserveQuery(predicate)
				);
				results.push({
					name: `warmup ${name}`,
					time,
					items: result.length
				});
				setResult(results);
			}

			{
				const { time, result } = await benchmark(
					() => waitObserveQuery(predicate)
				);
				results.push({
					name: `warmed up ${name}`,
					time,
					items: result.length
				});
				setResult(results);
			}

			{
				const { time, result } = await benchmark(
					() => DataStore.query(BenchmarkedModel, predicate)
				);
				results.push({
					name: `query ${name}`,
					time,
					items: result.length
				});
				setResult(results);
			}
		}
	}

	async function clearDataStore() {
		await DataStore.clear();
		setResult([]);
	}

	async function deleteAll() {
		const items = [
			...await DataStore.query(BrokenModel),
			...await DataStore.query(BenchmarkedModel),
		];
		for (const item of items) {
			await DataStore.delete(item);
		}
		setResult([]);
	}

	return (
		<Authenticator>
		{({ signOut, user }) => (
			<div>
			<p>Hi there <b>{user.username}</b>.</p>
			<button onClick={getAll}>Get All</button>
			<button onClick={observeAll}>Observe</button>
			<button onClick={saveWithValue}>Save BrokenModel with Value</button>
			<button onClick={saveWithoutValue}>Save BrokenModel without Value</button>
			<button onClick={hasManyBelongsTo}>HasMany/BelongsTo test</button>
			<button onClick={generateBenchmarkData}>Generate Benchmark Data</button>
			<button onClick={benchmarkAll}>Benchmark</button>
			<button onClick={deleteAll}>Delete Everything</button>
			<button onClick={clearDataStore}>Clear</button>
			<pre>{JSON.stringify(result, null, 2)}</pre>
			</div>
		)}
		</Authenticator>
	);
}

export default App;
