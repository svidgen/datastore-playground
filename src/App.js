import logo from './logo.svg';
import './App.css';

import { ulid } from 'ulid';

import { Amplify, Auth, API, DataStore, Hub, Predicates, syncExpression } from 'aws-amplify';
// import { DISCARD /*, STOP_SYNC, RETRY, CONTINUE_SYNC */ } from '@aws-amplify/datastore';
import awsconfig from './aws-exports';
import {
	ParentModel,
	ChildModel,
	BrokenModel,
	CompositeDog,
	CompositeOwner,
	ModelWithDefaults,
	BenchmarkedModel,
	Location,
	UserProfiles,
	LevelInfo,
	Note
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
	syncExpressions: [
		syncExpression(Note, note => note.noteType.eq('reference'))
	],
	errorHandler: e => {
		console.log('error encountered', e);
	},
})

window.Models = {
	UserProfiles,
	BrokenModel,
	ModelWithDefaults,
	Location,
	LevelInfo
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
		// for (let i = 0; i < 5000; i++) {
		// 	const created = await DataStore.save(new BenchmarkedModel({
		// 		indexedField: `indexed value ${i}`,
		// 		normalField: `normal value ${i}`,
		// 		indexedAggField: `agg ${i % 5}`,
		// 		normalAggField: `agg ${i % 5}`,
		// 	}));
		// 	setResult(`created BenchmarkedModel ${created.id} for a total of ${i+1} records ... `);
		// }

		const randomInt = () => Math.floor(Math.random() * 1000);

		for (let i = 0; i < 5000; i++) {
			const created = await DataStore.save(new Location({
				organisationId: ulid(),
				locationId: ulid(),
				X: randomInt(),
				Y: randomInt(),
				Z: randomInt(),
				zMax: randomInt(),
				type: ['spot', 'dot', 'jot'][i % 3],
				name: ulid(),
				userId: ulid(),
				parentLocationIdRef: ulid(),
				// parents: [Location!] @hasMany(fields: ["parentLocationIdRef"])
				childIdRef: ulid(),
				// children: [Location!] @hasMany(fields: ["childIdRef"])
				mapTop: ulid(),
				mapLeft: ulid(),
				mapWidth: ulid(),
				mapHeight: ulid(),
				itemIdRefs: [ulid()],
				amount: randomInt(),
				capacity: randomInt(),
				split: true,
				splitType: ulid(),
				splitNumber: randomInt(),
				hasCustomSpots: true,
				rowNamingScheme: ulid(),
				code: ulid(),
			}));
			setResult(`created Location ${created.locationId} for a total of ${i+1} records ... `);
		}
	}

	async function time(f) {
		const start = performance.now();
		const result = await f();
		const end = performance.now();

		return {
			items: result.length,
			time: end - start
		};
	}

	function sum(...values) {
		let s = 0;
		for (const v of values) s += Number(v);
		return s;
	}

	function average(...values) {
		return sum(...values) / values.length;
	}

	function median(...values) {
		const sorted = [...values].sort();
		return sorted[Math.floor(sorted.length / 2)];
	}

	async function benchmark(f, rounds = 10) {
		const results = [];

		for (let i = 0; i < rounds; i++) {
			results.push(await time(f));
		}
		
		console.log({results});
		const times = results.map(r => r.time);

		return {
			items: results[0].items.length,
			average: Math.floor(average(...times)),
			median: Math.floor(median(...times)),
			min: Math.floor(Math.min(...times)),
			max: Math.floor(Math.max(...times)),
		};
	}

	async function waitObserveQuery(predicate) {
		return new Promise(resolve => {
			const sub = DataStore.observeQuery(Location, predicate).subscribe(m => {
				console.log('subscription message', m);
				// isSynced never happens when we're not connected to a backend.
				// if (m.isSynced) {
					sub.unsubscribe();
					resolve(m.items);
				// }
			});
		})
	}

	async function benchmarkAll() {
		// V5 benchmark model
		// console.log('testing V5 benchmark model');
		// const cases = {
		// 	all: Predicates.ALL,
		// 	"indexedField.beginsWith('indexed value')": m => m.indexedField.beginsWith('indexed value'),
		// 	"indexedField.beginsWith('indexed value 10')": m => m.indexedField.beginsWith('indexed value 10'),
		// 	"indexedField.eq('indexed value 10')": m => m.indexedField.eq('indexed value 10'),
		// 	"indexedAggField.eq('agg 2')": m => m.indexedAggField.eq('agg 2'),
		// 	"indexedAggField.eq('agg 2' || 'agg 1')": m => m.or(m => [m.indexedAggField.eq('agg 2'), m.indexedAggField.eq('agg 1')]),
		// 	"indexedAggField AND normalField.eq('agg 2')": m => m.and(m => [m.indexedAggField.eq('agg 2'), m.normalAggField.eq('agg 2')]),
		// 	"normalField.beginsWith('normal value')": m => m.normalField.beginsWith('normal value'),
		// 	"normalField.beginsWith('normal value 10')": m => m.normalField.beginsWith('normal value 10'),
		// 	"normalField.eq('normal value 10')": m => m.normalField.eq('normal value 10'),
		// 	"normalAggField.eq('agg 2')": m => m.normalAggField.eq('agg 2'),
		// 	"normalAggField.eq('agg 2' || 'agg 1')": m => m.or(m => [m.normalAggField.eq('agg 2'), m.normalAggField.eq('agg 1')]),
		// };

		// V4 benchmark model
		// console.log('testing V4 benchmark model');
		// const cases = {
		// 	// all: Predicates.ALL,
		// 	"indexedField.beginsWith('indexed value')": m => m.indexedField('beginsWith', 'indexed value'),
		// 	// "indexedField.beginsWith('indexed value 10')": m => m.indexedField('beginsWith', 'indexed value 10'),
		// 	// "indexedField.eq('indexed value 10')": m => m.indexedField('eq', 'indexed value 10'),
		// 	// "normalField.beginsWith('normal value')": m => m.normalField('beginsWith', 'normal value'),
		// 	// "normalField.beginsWith('normal value 10')": m => m.normalField('beginsWith', 'normal value 10'),
		// 	// "normalField.eq('normal value 10')": m => m.normalField('eq', 'normal value 10'),
		// };

		// V5 Location model
		console.log('testing V5 Location model');
		const cases = {
			all: Predicates.ALL,
			"type.eq('spot')": m => m.type.eq('spot'),
			"type.eq('spot' || 'jot')": m => m.or(m => [m.type.eq('spot'), m.type.eq('jot')]),
		};

		// V4 Location model
		// console.log('testing V4 Location model');
		// const cases = {
		// 	all: Predicates.ALL,
		// 	"type.eq('spot')": m => m.type('eq', 'spot'),
		// 	"type.eq('spot' || 'jot')": m => m.or(m => m.type('eq', 'spot').type('eq', 'jot')),
		// };

		let results = [];

		setResult('Starting benchmark ...');

		for (const [name, predicate] of Object.entries(cases)) {
			{
				const stats = await benchmark(
					() => waitObserveQuery(predicate)
				);
				// console.log(result);
				results = [...results, {
					name: `warmup ${name}`,
					...stats,
				}];
				setResult(results);
			}

			{
				const stats = await benchmark(
					() => waitObserveQuery(predicate)
				);
				// console.log(result);
				results = [...results, {
					name: `warmed up ${name}`,
					...stats,
				}];
				setResult(results);
			}

			{
				const stats = await benchmark(
					() => DataStore.query(Location, predicate)
				);
				// console.log(result);
				results = [...results, {
					name: `query ${name}`,
					...stats,
				}];
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

	async function generateNotes() {
		for (let i = 0; i < 100; i++) {
			await DataStore.save(new Note({
				noteId: ulid(),
				noteType: i % 2 === 0 ? 'reference' : 'article',
				content: `content ${i}`
			}));
		}
	}

	return (
		<Authenticator>
		{({ signOut, user }) => (
			<div>
			{/* <p>Hi there <b>{user.username}</b>.</p> */}
			<button onClick={getAll}>Get All</button>
			<button onClick={observeAll}>Observe</button>
			<button onClick={saveWithValue}>Save BrokenModel with Value</button>
			<button onClick={saveWithoutValue}>Save BrokenModel without Value</button>
			<button onClick={generateNotes}>Generate Notes</button>
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
