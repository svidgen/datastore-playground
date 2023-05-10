/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBrokenModel = /* GraphQL */ `
  mutation CreateBrokenModel(
    $input: CreateBrokenModelInput!
    $condition: ModelBrokenModelConditionInput
  ) {
    createBrokenModel(input: $input, condition: $condition) {
      id
      value
      otherValue
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateBrokenModel = /* GraphQL */ `
  mutation UpdateBrokenModel(
    $input: UpdateBrokenModelInput!
    $condition: ModelBrokenModelConditionInput
  ) {
    updateBrokenModel(input: $input, condition: $condition) {
      id
      value
      otherValue
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteBrokenModel = /* GraphQL */ `
  mutation DeleteBrokenModel(
    $input: DeleteBrokenModelInput!
    $condition: ModelBrokenModelConditionInput
  ) {
    deleteBrokenModel(input: $input, condition: $condition) {
      id
      value
      otherValue
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createJustWhatever = /* GraphQL */ `
  mutation CreateJustWhatever(
    $input: CreateJustWhateverInput!
    $condition: ModelJustWhateverConditionInput
  ) {
    createJustWhatever(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateJustWhatever = /* GraphQL */ `
  mutation UpdateJustWhatever(
    $input: UpdateJustWhateverInput!
    $condition: ModelJustWhateverConditionInput
  ) {
    updateJustWhatever(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteJustWhatever = /* GraphQL */ `
  mutation DeleteJustWhatever(
    $input: DeleteJustWhateverInput!
    $condition: ModelJustWhateverConditionInput
  ) {
    deleteJustWhatever(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createParentModel = /* GraphQL */ `
  mutation CreateParentModel(
    $input: CreateParentModelInput!
    $condition: ModelParentModelConditionInput
  ) {
    createParentModel(input: $input, condition: $condition) {
      id
      value
      children {
        items {
          id
          value
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          parentModelChildrenId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateParentModel = /* GraphQL */ `
  mutation UpdateParentModel(
    $input: UpdateParentModelInput!
    $condition: ModelParentModelConditionInput
  ) {
    updateParentModel(input: $input, condition: $condition) {
      id
      value
      children {
        items {
          id
          value
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          parentModelChildrenId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteParentModel = /* GraphQL */ `
  mutation DeleteParentModel(
    $input: DeleteParentModelInput!
    $condition: ModelParentModelConditionInput
  ) {
    deleteParentModel(input: $input, condition: $condition) {
      id
      value
      children {
        items {
          id
          value
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          parentModelChildrenId
          owner
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createChildModel = /* GraphQL */ `
  mutation CreateChildModel(
    $input: CreateChildModelInput!
    $condition: ModelChildModelConditionInput
  ) {
    createChildModel(input: $input, condition: $condition) {
      id
      value
      parent {
        id
        value
        children {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      parentModelChildrenId
      owner
    }
  }
`;
export const updateChildModel = /* GraphQL */ `
  mutation UpdateChildModel(
    $input: UpdateChildModelInput!
    $condition: ModelChildModelConditionInput
  ) {
    updateChildModel(input: $input, condition: $condition) {
      id
      value
      parent {
        id
        value
        children {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      parentModelChildrenId
      owner
    }
  }
`;
export const deleteChildModel = /* GraphQL */ `
  mutation DeleteChildModel(
    $input: DeleteChildModelInput!
    $condition: ModelChildModelConditionInput
  ) {
    deleteChildModel(input: $input, condition: $condition) {
      id
      value
      parent {
        id
        value
        children {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      parentModelChildrenId
      owner
    }
  }
`;
export const createModelWithoutAuth = /* GraphQL */ `
  mutation CreateModelWithoutAuth(
    $input: CreateModelWithoutAuthInput!
    $condition: ModelModelWithoutAuthConditionInput
  ) {
    createModelWithoutAuth(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateModelWithoutAuth = /* GraphQL */ `
  mutation UpdateModelWithoutAuth(
    $input: UpdateModelWithoutAuthInput!
    $condition: ModelModelWithoutAuthConditionInput
  ) {
    updateModelWithoutAuth(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteModelWithoutAuth = /* GraphQL */ `
  mutation DeleteModelWithoutAuth(
    $input: DeleteModelWithoutAuthInput!
    $condition: ModelModelWithoutAuthConditionInput
  ) {
    deleteModelWithoutAuth(input: $input, condition: $condition) {
      id
      value
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createModelWithDefaults = /* GraphQL */ `
  mutation CreateModelWithDefaults(
    $input: CreateModelWithDefaultsInput!
    $condition: ModelModelWithDefaultsConditionInput
  ) {
    createModelWithDefaults(input: $input, condition: $condition) {
      id
      valueWithDefault
      requiredValueWithDefault
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateModelWithDefaults = /* GraphQL */ `
  mutation UpdateModelWithDefaults(
    $input: UpdateModelWithDefaultsInput!
    $condition: ModelModelWithDefaultsConditionInput
  ) {
    updateModelWithDefaults(input: $input, condition: $condition) {
      id
      valueWithDefault
      requiredValueWithDefault
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteModelWithDefaults = /* GraphQL */ `
  mutation DeleteModelWithDefaults(
    $input: DeleteModelWithDefaultsInput!
    $condition: ModelModelWithDefaultsConditionInput
  ) {
    deleteModelWithDefaults(input: $input, condition: $condition) {
      id
      valueWithDefault
      requiredValueWithDefault
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      content
      username
      type
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      content
      username
      type
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      content
      username
      type
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createCompositeDog = /* GraphQL */ `
  mutation CreateCompositeDog(
    $input: CreateCompositeDogInput!
    $condition: ModelCompositeDogConditionInput
  ) {
    createCompositeDog(input: $input, condition: $condition) {
      name
      description
      compositeOwner {
        lastName
        firstName
        compositeDog {
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeDogCompositeOwnerLastName
          compositeDogCompositeOwnerFirstName
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeOwnerCompositeDogName
        compositeOwnerCompositeDogDescription
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compositeDogCompositeOwnerLastName
      compositeDogCompositeOwnerFirstName
      owner
    }
  }
`;
export const updateCompositeDog = /* GraphQL */ `
  mutation UpdateCompositeDog(
    $input: UpdateCompositeDogInput!
    $condition: ModelCompositeDogConditionInput
  ) {
    updateCompositeDog(input: $input, condition: $condition) {
      name
      description
      compositeOwner {
        lastName
        firstName
        compositeDog {
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeDogCompositeOwnerLastName
          compositeDogCompositeOwnerFirstName
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeOwnerCompositeDogName
        compositeOwnerCompositeDogDescription
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compositeDogCompositeOwnerLastName
      compositeDogCompositeOwnerFirstName
      owner
    }
  }
`;
export const deleteCompositeDog = /* GraphQL */ `
  mutation DeleteCompositeDog(
    $input: DeleteCompositeDogInput!
    $condition: ModelCompositeDogConditionInput
  ) {
    deleteCompositeDog(input: $input, condition: $condition) {
      name
      description
      compositeOwner {
        lastName
        firstName
        compositeDog {
          name
          description
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeDogCompositeOwnerLastName
          compositeDogCompositeOwnerFirstName
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeOwnerCompositeDogName
        compositeOwnerCompositeDogDescription
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compositeDogCompositeOwnerLastName
      compositeDogCompositeOwnerFirstName
      owner
    }
  }
`;
export const createCompositeOwner = /* GraphQL */ `
  mutation CreateCompositeOwner(
    $input: CreateCompositeOwnerInput!
    $condition: ModelCompositeOwnerConditionInput
  ) {
    createCompositeOwner(input: $input, condition: $condition) {
      lastName
      firstName
      compositeDog {
        name
        description
        compositeOwner {
          lastName
          firstName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeOwnerCompositeDogName
          compositeOwnerCompositeDogDescription
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeDogCompositeOwnerLastName
        compositeDogCompositeOwnerFirstName
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compositeOwnerCompositeDogName
      compositeOwnerCompositeDogDescription
      owner
    }
  }
`;
export const updateCompositeOwner = /* GraphQL */ `
  mutation UpdateCompositeOwner(
    $input: UpdateCompositeOwnerInput!
    $condition: ModelCompositeOwnerConditionInput
  ) {
    updateCompositeOwner(input: $input, condition: $condition) {
      lastName
      firstName
      compositeDog {
        name
        description
        compositeOwner {
          lastName
          firstName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeOwnerCompositeDogName
          compositeOwnerCompositeDogDescription
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeDogCompositeOwnerLastName
        compositeDogCompositeOwnerFirstName
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compositeOwnerCompositeDogName
      compositeOwnerCompositeDogDescription
      owner
    }
  }
`;
export const deleteCompositeOwner = /* GraphQL */ `
  mutation DeleteCompositeOwner(
    $input: DeleteCompositeOwnerInput!
    $condition: ModelCompositeOwnerConditionInput
  ) {
    deleteCompositeOwner(input: $input, condition: $condition) {
      lastName
      firstName
      compositeDog {
        name
        description
        compositeOwner {
          lastName
          firstName
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          compositeOwnerCompositeDogName
          compositeOwnerCompositeDogDescription
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        compositeDogCompositeOwnerLastName
        compositeDogCompositeOwnerFirstName
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      compositeOwnerCompositeDogName
      compositeOwnerCompositeDogDescription
      owner
    }
  }
`;
export const createBoringDog = /* GraphQL */ `
  mutation CreateBoringDog(
    $input: CreateBoringDogInput!
    $condition: ModelBoringDogConditionInput
  ) {
    createBoringDog(input: $input, condition: $condition) {
      id
      name
      boringOwner {
        id
        name
        boringDog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          boringDogBoringOwnerId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        boringOwnerBoringDogId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      boringDogBoringOwnerId
      owner
    }
  }
`;
export const updateBoringDog = /* GraphQL */ `
  mutation UpdateBoringDog(
    $input: UpdateBoringDogInput!
    $condition: ModelBoringDogConditionInput
  ) {
    updateBoringDog(input: $input, condition: $condition) {
      id
      name
      boringOwner {
        id
        name
        boringDog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          boringDogBoringOwnerId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        boringOwnerBoringDogId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      boringDogBoringOwnerId
      owner
    }
  }
`;
export const deleteBoringDog = /* GraphQL */ `
  mutation DeleteBoringDog(
    $input: DeleteBoringDogInput!
    $condition: ModelBoringDogConditionInput
  ) {
    deleteBoringDog(input: $input, condition: $condition) {
      id
      name
      boringOwner {
        id
        name
        boringDog {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          boringDogBoringOwnerId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        boringOwnerBoringDogId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      boringDogBoringOwnerId
      owner
    }
  }
`;
export const createBoringOwner = /* GraphQL */ `
  mutation CreateBoringOwner(
    $input: CreateBoringOwnerInput!
    $condition: ModelBoringOwnerConditionInput
  ) {
    createBoringOwner(input: $input, condition: $condition) {
      id
      name
      boringDog {
        id
        name
        boringOwner {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          boringOwnerBoringDogId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        boringDogBoringOwnerId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      boringOwnerBoringDogId
      owner
    }
  }
`;
export const updateBoringOwner = /* GraphQL */ `
  mutation UpdateBoringOwner(
    $input: UpdateBoringOwnerInput!
    $condition: ModelBoringOwnerConditionInput
  ) {
    updateBoringOwner(input: $input, condition: $condition) {
      id
      name
      boringDog {
        id
        name
        boringOwner {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          boringOwnerBoringDogId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        boringDogBoringOwnerId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      boringOwnerBoringDogId
      owner
    }
  }
`;
export const deleteBoringOwner = /* GraphQL */ `
  mutation DeleteBoringOwner(
    $input: DeleteBoringOwnerInput!
    $condition: ModelBoringOwnerConditionInput
  ) {
    deleteBoringOwner(input: $input, condition: $condition) {
      id
      name
      boringDog {
        id
        name
        boringOwner {
          id
          name
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          boringOwnerBoringDogId
          owner
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        boringDogBoringOwnerId
        owner
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      boringOwnerBoringDogId
      owner
    }
  }
`;
export const createBasicModelRequiredTS = /* GraphQL */ `
  mutation CreateBasicModelRequiredTS(
    $input: CreateBasicModelRequiredTSInput!
    $condition: ModelBasicModelRequiredTSConditionInput
  ) {
    createBasicModelRequiredTS(input: $input, condition: $condition) {
      id
      body
      createdAt
      updatedOn
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateBasicModelRequiredTS = /* GraphQL */ `
  mutation UpdateBasicModelRequiredTS(
    $input: UpdateBasicModelRequiredTSInput!
    $condition: ModelBasicModelRequiredTSConditionInput
  ) {
    updateBasicModelRequiredTS(input: $input, condition: $condition) {
      id
      body
      createdAt
      updatedOn
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteBasicModelRequiredTS = /* GraphQL */ `
  mutation DeleteBasicModelRequiredTS(
    $input: DeleteBasicModelRequiredTSInput!
    $condition: ModelBasicModelRequiredTSConditionInput
  ) {
    deleteBasicModelRequiredTS(input: $input, condition: $condition) {
      id
      body
      createdAt
      updatedOn
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createBenchmarkedModel = /* GraphQL */ `
  mutation CreateBenchmarkedModel(
    $input: CreateBenchmarkedModelInput!
    $condition: ModelBenchmarkedModelConditionInput
  ) {
    createBenchmarkedModel(input: $input, condition: $condition) {
      id
      indexedField
      normalField
      indexedAggField
      normalAggField
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateBenchmarkedModel = /* GraphQL */ `
  mutation UpdateBenchmarkedModel(
    $input: UpdateBenchmarkedModelInput!
    $condition: ModelBenchmarkedModelConditionInput
  ) {
    updateBenchmarkedModel(input: $input, condition: $condition) {
      id
      indexedField
      normalField
      indexedAggField
      normalAggField
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteBenchmarkedModel = /* GraphQL */ `
  mutation DeleteBenchmarkedModel(
    $input: DeleteBenchmarkedModelInput!
    $condition: ModelBenchmarkedModelConditionInput
  ) {
    deleteBenchmarkedModel(input: $input, condition: $condition) {
      id
      indexedField
      normalField
      indexedAggField
      normalAggField
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createLocation = /* GraphQL */ `
  mutation CreateLocation(
    $input: CreateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    createLocation(input: $input, condition: $condition) {
      id
      organisationId
      locationId
      X
      Y
      Z
      zMax
      type
      name
      userId
      parentLocationIdRef
      parents {
        items {
          id
          organisationId
          locationId
          X
          Y
          Z
          zMax
          type
          name
          userId
          parentLocationIdRef
          childIdRef
          mapTop
          mapLeft
          mapWidth
          mapHeight
          itemIdRefs
          amount
          capacity
          split
          splitType
          splitNumber
          hasCustomSpots
          rowNamingScheme
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      childIdRef
      children {
        items {
          id
          organisationId
          locationId
          X
          Y
          Z
          zMax
          type
          name
          userId
          parentLocationIdRef
          childIdRef
          mapTop
          mapLeft
          mapWidth
          mapHeight
          itemIdRefs
          amount
          capacity
          split
          splitType
          splitNumber
          hasCustomSpots
          rowNamingScheme
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      mapTop
      mapLeft
      mapWidth
      mapHeight
      itemIdRefs
      amount
      capacity
      split
      splitType
      splitNumber
      hasCustomSpots
      rowNamingScheme
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateLocation = /* GraphQL */ `
  mutation UpdateLocation(
    $input: UpdateLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    updateLocation(input: $input, condition: $condition) {
      id
      organisationId
      locationId
      X
      Y
      Z
      zMax
      type
      name
      userId
      parentLocationIdRef
      parents {
        items {
          id
          organisationId
          locationId
          X
          Y
          Z
          zMax
          type
          name
          userId
          parentLocationIdRef
          childIdRef
          mapTop
          mapLeft
          mapWidth
          mapHeight
          itemIdRefs
          amount
          capacity
          split
          splitType
          splitNumber
          hasCustomSpots
          rowNamingScheme
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      childIdRef
      children {
        items {
          id
          organisationId
          locationId
          X
          Y
          Z
          zMax
          type
          name
          userId
          parentLocationIdRef
          childIdRef
          mapTop
          mapLeft
          mapWidth
          mapHeight
          itemIdRefs
          amount
          capacity
          split
          splitType
          splitNumber
          hasCustomSpots
          rowNamingScheme
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      mapTop
      mapLeft
      mapWidth
      mapHeight
      itemIdRefs
      amount
      capacity
      split
      splitType
      splitNumber
      hasCustomSpots
      rowNamingScheme
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteLocation = /* GraphQL */ `
  mutation DeleteLocation(
    $input: DeleteLocationInput!
    $condition: ModelLocationConditionInput
  ) {
    deleteLocation(input: $input, condition: $condition) {
      id
      organisationId
      locationId
      X
      Y
      Z
      zMax
      type
      name
      userId
      parentLocationIdRef
      parents {
        items {
          id
          organisationId
          locationId
          X
          Y
          Z
          zMax
          type
          name
          userId
          parentLocationIdRef
          childIdRef
          mapTop
          mapLeft
          mapWidth
          mapHeight
          itemIdRefs
          amount
          capacity
          split
          splitType
          splitNumber
          hasCustomSpots
          rowNamingScheme
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      childIdRef
      children {
        items {
          id
          organisationId
          locationId
          X
          Y
          Z
          zMax
          type
          name
          userId
          parentLocationIdRef
          childIdRef
          mapTop
          mapLeft
          mapWidth
          mapHeight
          itemIdRefs
          amount
          capacity
          split
          splitType
          splitNumber
          hasCustomSpots
          rowNamingScheme
          code
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          owner
        }
        nextToken
        startedAt
      }
      mapTop
      mapLeft
      mapWidth
      mapHeight
      itemIdRefs
      amount
      capacity
      split
      splitType
      splitNumber
      hasCustomSpots
      rowNamingScheme
      code
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createUserProfiles = /* GraphQL */ `
  mutation CreateUserProfiles(
    $input: CreateUserProfilesInput!
    $condition: ModelUserProfilesConditionInput
  ) {
    createUserProfiles(input: $input, condition: $condition) {
      id
      userId
      name
      email
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUserProfiles = /* GraphQL */ `
  mutation UpdateUserProfiles(
    $input: UpdateUserProfilesInput!
    $condition: ModelUserProfilesConditionInput
  ) {
    updateUserProfiles(input: $input, condition: $condition) {
      id
      userId
      name
      email
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUserProfiles = /* GraphQL */ `
  mutation DeleteUserProfiles(
    $input: DeleteUserProfilesInput!
    $condition: ModelUserProfilesConditionInput
  ) {
    deleteUserProfiles(input: $input, condition: $condition) {
      id
      userId
      name
      email
      owner
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createLevelInfo = /* GraphQL */ `
  mutation CreateLevelInfo(
    $input: CreateLevelInfoInput!
    $condition: ModelLevelInfoConditionInput
  ) {
    createLevelInfo(input: $input, condition: $condition) {
      id
      tenant
      name
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateLevelInfo = /* GraphQL */ `
  mutation UpdateLevelInfo(
    $input: UpdateLevelInfoInput!
    $condition: ModelLevelInfoConditionInput
  ) {
    updateLevelInfo(input: $input, condition: $condition) {
      id
      tenant
      name
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteLevelInfo = /* GraphQL */ `
  mutation DeleteLevelInfo(
    $input: DeleteLevelInfoInput!
    $condition: ModelLevelInfoConditionInput
  ) {
    deleteLevelInfo(input: $input, condition: $condition) {
      id
      tenant
      name
      order
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      noteId
      noteType
      createdAt
      content
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      noteId
      noteType
      createdAt
      content
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      noteId
      noteType
      createdAt
      content
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
