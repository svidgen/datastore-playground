import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CompositeIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection, AsyncItem } from "@aws-amplify/datastore";





type EagerBrokenModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BrokenModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value: string;
  readonly otherValue?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBrokenModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BrokenModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value: string;
  readonly otherValue?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BrokenModel = LazyLoading extends LazyLoadingDisabled ? EagerBrokenModel : LazyBrokenModel

export declare const BrokenModel: (new (init: ModelInit<BrokenModel>) => BrokenModel) & {
  copyOf(source: BrokenModel, mutator: (draft: MutableModel<BrokenModel>) => MutableModel<BrokenModel> | void): BrokenModel;
}

type EagerJustWhatever = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JustWhatever, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyJustWhatever = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<JustWhatever, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type JustWhatever = LazyLoading extends LazyLoadingDisabled ? EagerJustWhatever : LazyJustWhatever

export declare const JustWhatever: (new (init: ModelInit<JustWhatever>) => JustWhatever) & {
  copyOf(source: JustWhatever, mutator: (draft: MutableModel<JustWhatever>) => MutableModel<JustWhatever> | void): JustWhatever;
}

type EagerParentModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ParentModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value: string;
  readonly children?: (ChildModel | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyParentModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ParentModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value: string;
  readonly children: AsyncCollection<ChildModel>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ParentModel = LazyLoading extends LazyLoadingDisabled ? EagerParentModel : LazyParentModel

export declare const ParentModel: (new (init: ModelInit<ParentModel>) => ParentModel) & {
  copyOf(source: ParentModel, mutator: (draft: MutableModel<ParentModel>) => MutableModel<ParentModel> | void): ParentModel;
}

type EagerChildModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChildModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value: string;
  readonly parent?: ParentModel | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly parentModelChildrenId?: string | null;
}

type LazyChildModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ChildModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value: string;
  readonly parent: AsyncItem<ParentModel | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly parentModelChildrenId?: string | null;
}

export declare type ChildModel = LazyLoading extends LazyLoadingDisabled ? EagerChildModel : LazyChildModel

export declare const ChildModel: (new (init: ModelInit<ChildModel>) => ChildModel) & {
  copyOf(source: ChildModel, mutator: (draft: MutableModel<ChildModel>) => MutableModel<ChildModel> | void): ChildModel;
}

type EagerModelWithoutAuth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ModelWithoutAuth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyModelWithoutAuth = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ModelWithoutAuth, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly value?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ModelWithoutAuth = LazyLoading extends LazyLoadingDisabled ? EagerModelWithoutAuth : LazyModelWithoutAuth

export declare const ModelWithoutAuth: (new (init: ModelInit<ModelWithoutAuth>) => ModelWithoutAuth) & {
  copyOf(source: ModelWithoutAuth, mutator: (draft: MutableModel<ModelWithoutAuth>) => MutableModel<ModelWithoutAuth> | void): ModelWithoutAuth;
}

type EagerModelWithDefaults = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ModelWithDefaults, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly valueWithDefault?: string | null;
  readonly requiredValueWithDefault?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyModelWithDefaults = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<ModelWithDefaults, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly valueWithDefault?: string | null;
  readonly requiredValueWithDefault?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type ModelWithDefaults = LazyLoading extends LazyLoadingDisabled ? EagerModelWithDefaults : LazyModelWithDefaults

export declare const ModelWithDefaults: (new (init: ModelInit<ModelWithDefaults>) => ModelWithDefaults) & {
  copyOf(source: ModelWithDefaults, mutator: (draft: MutableModel<ModelWithDefaults>) => MutableModel<ModelWithDefaults> | void): ModelWithDefaults;
}

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly content?: string | null;
  readonly username?: string | null;
  readonly type?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
  };
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly content?: string | null;
  readonly username?: string | null;
  readonly type?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerCompositeDog = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<CompositeDog, ['name', 'description']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly name: string;
  readonly description: string;
  readonly compositeOwner?: CompositeOwner | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly compositeDogCompositeOwnerLastName?: string | null;
  readonly compositeDogCompositeOwnerFirstName?: string | null;
}

type LazyCompositeDog = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<CompositeDog, ['name', 'description']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly name: string;
  readonly description: string;
  readonly compositeOwner: AsyncItem<CompositeOwner | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly compositeDogCompositeOwnerLastName?: string | null;
  readonly compositeDogCompositeOwnerFirstName?: string | null;
}

export declare type CompositeDog = LazyLoading extends LazyLoadingDisabled ? EagerCompositeDog : LazyCompositeDog

export declare const CompositeDog: (new (init: ModelInit<CompositeDog>) => CompositeDog) & {
  copyOf(source: CompositeDog, mutator: (draft: MutableModel<CompositeDog>) => MutableModel<CompositeDog> | void): CompositeDog;
}

type EagerCompositeOwner = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<CompositeOwner, ['lastName', 'firstName']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly lastName: string;
  readonly firstName: string;
  readonly compositeDog?: CompositeDog | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly compositeOwnerCompositeDogName?: string | null;
  readonly compositeOwnerCompositeDogDescription?: string | null;
}

type LazyCompositeOwner = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<CompositeOwner, ['lastName', 'firstName']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly lastName: string;
  readonly firstName: string;
  readonly compositeDog: AsyncItem<CompositeDog | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly compositeOwnerCompositeDogName?: string | null;
  readonly compositeOwnerCompositeDogDescription?: string | null;
}

export declare type CompositeOwner = LazyLoading extends LazyLoadingDisabled ? EagerCompositeOwner : LazyCompositeOwner

export declare const CompositeOwner: (new (init: ModelInit<CompositeOwner>) => CompositeOwner) & {
  copyOf(source: CompositeOwner, mutator: (draft: MutableModel<CompositeOwner>) => MutableModel<CompositeOwner> | void): CompositeOwner;
}

type EagerBoringDog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BoringDog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly boringOwner?: BoringOwner | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly boringDogBoringOwnerId?: string | null;
}

type LazyBoringDog = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BoringDog, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly boringOwner: AsyncItem<BoringOwner | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly boringDogBoringOwnerId?: string | null;
}

export declare type BoringDog = LazyLoading extends LazyLoadingDisabled ? EagerBoringDog : LazyBoringDog

export declare const BoringDog: (new (init: ModelInit<BoringDog>) => BoringDog) & {
  copyOf(source: BoringDog, mutator: (draft: MutableModel<BoringDog>) => MutableModel<BoringDog> | void): BoringDog;
}

type EagerBoringOwner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BoringOwner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly boringDog?: BoringDog | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly boringOwnerBoringDogId?: string | null;
}

type LazyBoringOwner = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BoringOwner, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly boringDog: AsyncItem<BoringDog | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly boringOwnerBoringDogId?: string | null;
}

export declare type BoringOwner = LazyLoading extends LazyLoadingDisabled ? EagerBoringOwner : LazyBoringOwner

export declare const BoringOwner: (new (init: ModelInit<BoringOwner>) => BoringOwner) & {
  copyOf(source: BoringOwner, mutator: (draft: MutableModel<BoringOwner>) => MutableModel<BoringOwner> | void): BoringOwner;
}

type EagerBasicModelRequiredTS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasicModelRequiredTS, 'id'>;
  };
  readonly id: string;
  readonly body: string;
  readonly createdAt: string;
  readonly updatedOn?: string | null;
}

type LazyBasicModelRequiredTS = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BasicModelRequiredTS, 'id'>;
  };
  readonly id: string;
  readonly body: string;
  readonly createdAt: string;
  readonly updatedOn?: string | null;
}

export declare type BasicModelRequiredTS = LazyLoading extends LazyLoadingDisabled ? EagerBasicModelRequiredTS : LazyBasicModelRequiredTS

export declare const BasicModelRequiredTS: (new (init: ModelInit<BasicModelRequiredTS>) => BasicModelRequiredTS) & {
  copyOf(source: BasicModelRequiredTS, mutator: (draft: MutableModel<BasicModelRequiredTS>) => MutableModel<BasicModelRequiredTS> | void): BasicModelRequiredTS;
}

type EagerbenchmarkedModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<benchmarkedModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly indexedField: string;
  readonly normalField: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazybenchmarkedModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<benchmarkedModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly indexedField: string;
  readonly normalField: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type benchmarkedModel = LazyLoading extends LazyLoadingDisabled ? EagerbenchmarkedModel : LazybenchmarkedModel

export declare const benchmarkedModel: (new (init: ModelInit<benchmarkedModel>) => benchmarkedModel) & {
  copyOf(source: benchmarkedModel, mutator: (draft: MutableModel<benchmarkedModel>) => MutableModel<benchmarkedModel> | void): benchmarkedModel;
}