// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { BrokenModel, JustWhatever, ParentModel, ChildModel, ModelWithoutAuth, ModelWithDefaults, Post, CompositeDog, CompositeOwner, BoringDog, BoringOwner, BasicModelRequiredTS, benchmarkedModel } = initSchema(schema);

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
  benchmarkedModel
};