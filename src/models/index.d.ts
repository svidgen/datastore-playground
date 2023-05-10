import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier, CompositeIdentifier, OptionallyManagedIdentifier, CustomIdentifier } from "@aws-amplify/datastore";
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

type EagerBenchmarkedModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BenchmarkedModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly indexedField: string;
  readonly normalField: string;
  readonly indexedAggField: string;
  readonly normalAggField: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyBenchmarkedModel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<BenchmarkedModel, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly indexedField: string;
  readonly normalField: string;
  readonly indexedAggField: string;
  readonly normalAggField: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type BenchmarkedModel = LazyLoading extends LazyLoadingDisabled ? EagerBenchmarkedModel : LazyBenchmarkedModel

export declare const BenchmarkedModel: (new (init: ModelInit<BenchmarkedModel>) => BenchmarkedModel) & {
  copyOf(source: BenchmarkedModel, mutator: (draft: MutableModel<BenchmarkedModel>) => MutableModel<BenchmarkedModel> | void): BenchmarkedModel;
}

type EagerLocation = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Location, ['organisationId', 'locationId', 'X', 'Y', 'Z']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id?: string | null;
  readonly organisationId: string;
  readonly locationId: string;
  readonly X: number;
  readonly Y: number;
  readonly Z: number;
  readonly zMax?: number | null;
  readonly type: string;
  readonly name: string;
  readonly userId: string;
  readonly parentLocationIdRef: string;
  readonly parents?: Location[] | null;
  readonly childIdRef?: string | null;
  readonly children?: Location[] | null;
  readonly mapTop?: string | null;
  readonly mapLeft?: string | null;
  readonly mapWidth?: string | null;
  readonly mapHeight?: string | null;
  readonly itemIdRefs?: (string | null)[] | null;
  readonly amount?: number | null;
  readonly capacity?: number | null;
  readonly split?: boolean | null;
  readonly splitType?: string | null;
  readonly splitNumber?: number | null;
  readonly hasCustomSpots?: boolean | null;
  readonly rowNamingScheme?: string | null;
  readonly code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLocation = {
  readonly [__modelMeta__]: {
    identifier: CompositeIdentifier<Location, ['organisationId', 'locationId', 'X', 'Y', 'Z']>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id?: string | null;
  readonly organisationId: string;
  readonly locationId: string;
  readonly X: number;
  readonly Y: number;
  readonly Z: number;
  readonly zMax?: number | null;
  readonly type: string;
  readonly name: string;
  readonly userId: string;
  readonly parentLocationIdRef: string;
  readonly parents: AsyncCollection<Location>;
  readonly childIdRef?: string | null;
  readonly children: AsyncCollection<Location>;
  readonly mapTop?: string | null;
  readonly mapLeft?: string | null;
  readonly mapWidth?: string | null;
  readonly mapHeight?: string | null;
  readonly itemIdRefs?: (string | null)[] | null;
  readonly amount?: number | null;
  readonly capacity?: number | null;
  readonly split?: boolean | null;
  readonly splitType?: string | null;
  readonly splitNumber?: number | null;
  readonly hasCustomSpots?: boolean | null;
  readonly rowNamingScheme?: string | null;
  readonly code?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Location = LazyLoading extends LazyLoadingDisabled ? EagerLocation : LazyLocation

export declare const Location: (new (init: ModelInit<Location>) => Location) & {
  copyOf(source: Location, mutator: (draft: MutableModel<Location>) => MutableModel<Location> | void): Location;
}

type EagerUserProfiles = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<UserProfiles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyUserProfiles = {
  readonly [__modelMeta__]: {
    identifier: OptionallyManagedIdentifier<UserProfiles, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly userId?: string | null;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly owner?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type UserProfiles = LazyLoading extends LazyLoadingDisabled ? EagerUserProfiles : LazyUserProfiles

export declare const UserProfiles: (new (init: ModelInit<UserProfiles>) => UserProfiles) & {
  copyOf(source: UserProfiles, mutator: (draft: MutableModel<UserProfiles>) => MutableModel<UserProfiles> | void): UserProfiles;
}

type EagerLevelInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LevelInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tenant?: string | null;
  readonly name: string;
  readonly order: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyLevelInfo = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<LevelInfo, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly tenant?: string | null;
  readonly name: string;
  readonly order: number;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type LevelInfo = LazyLoading extends LazyLoadingDisabled ? EagerLevelInfo : LazyLevelInfo

export declare const LevelInfo: (new (init: ModelInit<LevelInfo>) => LevelInfo) & {
  copyOf(source: LevelInfo, mutator: (draft: MutableModel<LevelInfo>) => MutableModel<LevelInfo> | void): LevelInfo;
}

type EagerNote = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Note, 'noteId'>;
    readOnlyFields: 'updatedAt';
  };
  readonly noteId: string;
  readonly noteType: string;
  readonly createdAt: string;
  readonly content?: string | null;
  readonly updatedAt?: string | null;
}

type LazyNote = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Note, 'noteId'>;
    readOnlyFields: 'updatedAt';
  };
  readonly noteId: string;
  readonly noteType: string;
  readonly createdAt: string;
  readonly content?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Note = LazyLoading extends LazyLoadingDisabled ? EagerNote : LazyNote

export declare const Note: (new (init: ModelInit<Note>) => Note) & {
  copyOf(source: Note, mutator: (draft: MutableModel<Note>) => MutableModel<Note> | void): Note;
}