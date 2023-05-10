// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BrokenModel, JustWhatever, ParentModel, ChildModel, ModelWithoutAuth, ModelWithDefaults, Post, CompositeDog, CompositeOwner, BoringDog, BoringOwner, BasicModelRequiredTS, BenchmarkedModel, Location, UserProfiles, LevelInfo, Note } = initSchema(schema);

export {
  BrokenModel,
  JustWhatever,
  ParentModel,
  ChildModel,
  ModelWithoutAuth,
  ModelWithDefaults,
  Post,
  CompositeDog,
  CompositeOwner,
  BoringDog,
  BoringOwner,
  BasicModelRequiredTS,
  BenchmarkedModel,
  Location,
  UserProfiles,
  LevelInfo,
  Note
};