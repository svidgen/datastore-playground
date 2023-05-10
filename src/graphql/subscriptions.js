/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBrokenModel = /* GraphQL */ `
  subscription OnCreateBrokenModel(
    $filter: ModelSubscriptionBrokenModelFilterInput
    $owner: String
  ) {
    onCreateBrokenModel(filter: $filter, owner: $owner) {
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
export const onUpdateBrokenModel = /* GraphQL */ `
  subscription OnUpdateBrokenModel(
    $filter: ModelSubscriptionBrokenModelFilterInput
    $owner: String
  ) {
    onUpdateBrokenModel(filter: $filter, owner: $owner) {
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
export const onDeleteBrokenModel = /* GraphQL */ `
  subscription OnDeleteBrokenModel(
    $filter: ModelSubscriptionBrokenModelFilterInput
    $owner: String
  ) {
    onDeleteBrokenModel(filter: $filter, owner: $owner) {
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
export const onCreateJustWhatever = /* GraphQL */ `
  subscription OnCreateJustWhatever(
    $filter: ModelSubscriptionJustWhateverFilterInput
    $owner: String
  ) {
    onCreateJustWhatever(filter: $filter, owner: $owner) {
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
export const onUpdateJustWhatever = /* GraphQL */ `
  subscription OnUpdateJustWhatever(
    $filter: ModelSubscriptionJustWhateverFilterInput
    $owner: String
  ) {
    onUpdateJustWhatever(filter: $filter, owner: $owner) {
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
export const onDeleteJustWhatever = /* GraphQL */ `
  subscription OnDeleteJustWhatever(
    $filter: ModelSubscriptionJustWhateverFilterInput
    $owner: String
  ) {
    onDeleteJustWhatever(filter: $filter, owner: $owner) {
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
export const onCreateParentModel = /* GraphQL */ `
  subscription OnCreateParentModel(
    $filter: ModelSubscriptionParentModelFilterInput
    $owner: String
  ) {
    onCreateParentModel(filter: $filter, owner: $owner) {
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
export const onUpdateParentModel = /* GraphQL */ `
  subscription OnUpdateParentModel(
    $filter: ModelSubscriptionParentModelFilterInput
    $owner: String
  ) {
    onUpdateParentModel(filter: $filter, owner: $owner) {
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
export const onDeleteParentModel = /* GraphQL */ `
  subscription OnDeleteParentModel(
    $filter: ModelSubscriptionParentModelFilterInput
    $owner: String
  ) {
    onDeleteParentModel(filter: $filter, owner: $owner) {
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
export const onCreateChildModel = /* GraphQL */ `
  subscription OnCreateChildModel(
    $filter: ModelSubscriptionChildModelFilterInput
    $owner: String
  ) {
    onCreateChildModel(filter: $filter, owner: $owner) {
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
export const onUpdateChildModel = /* GraphQL */ `
  subscription OnUpdateChildModel(
    $filter: ModelSubscriptionChildModelFilterInput
    $owner: String
  ) {
    onUpdateChildModel(filter: $filter, owner: $owner) {
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
export const onDeleteChildModel = /* GraphQL */ `
  subscription OnDeleteChildModel(
    $filter: ModelSubscriptionChildModelFilterInput
    $owner: String
  ) {
    onDeleteChildModel(filter: $filter, owner: $owner) {
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
export const onCreateModelWithoutAuth = /* GraphQL */ `
  subscription OnCreateModelWithoutAuth(
    $filter: ModelSubscriptionModelWithoutAuthFilterInput
  ) {
    onCreateModelWithoutAuth(filter: $filter) {
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
export const onUpdateModelWithoutAuth = /* GraphQL */ `
  subscription OnUpdateModelWithoutAuth(
    $filter: ModelSubscriptionModelWithoutAuthFilterInput
  ) {
    onUpdateModelWithoutAuth(filter: $filter) {
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
export const onDeleteModelWithoutAuth = /* GraphQL */ `
  subscription OnDeleteModelWithoutAuth(
    $filter: ModelSubscriptionModelWithoutAuthFilterInput
  ) {
    onDeleteModelWithoutAuth(filter: $filter) {
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
export const onCreateModelWithDefaults = /* GraphQL */ `
  subscription OnCreateModelWithDefaults(
    $filter: ModelSubscriptionModelWithDefaultsFilterInput
    $owner: String
  ) {
    onCreateModelWithDefaults(filter: $filter, owner: $owner) {
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
export const onUpdateModelWithDefaults = /* GraphQL */ `
  subscription OnUpdateModelWithDefaults(
    $filter: ModelSubscriptionModelWithDefaultsFilterInput
    $owner: String
  ) {
    onUpdateModelWithDefaults(filter: $filter, owner: $owner) {
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
export const onDeleteModelWithDefaults = /* GraphQL */ `
  subscription OnDeleteModelWithDefaults(
    $filter: ModelSubscriptionModelWithDefaultsFilterInput
    $owner: String
  ) {
    onDeleteModelWithDefaults(filter: $filter, owner: $owner) {
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
export const onCreateCompositeDog = /* GraphQL */ `
  subscription OnCreateCompositeDog(
    $filter: ModelSubscriptionCompositeDogFilterInput
    $owner: String
  ) {
    onCreateCompositeDog(filter: $filter, owner: $owner) {
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
export const onUpdateCompositeDog = /* GraphQL */ `
  subscription OnUpdateCompositeDog(
    $filter: ModelSubscriptionCompositeDogFilterInput
    $owner: String
  ) {
    onUpdateCompositeDog(filter: $filter, owner: $owner) {
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
export const onDeleteCompositeDog = /* GraphQL */ `
  subscription OnDeleteCompositeDog(
    $filter: ModelSubscriptionCompositeDogFilterInput
    $owner: String
  ) {
    onDeleteCompositeDog(filter: $filter, owner: $owner) {
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
export const onCreateCompositeOwner = /* GraphQL */ `
  subscription OnCreateCompositeOwner(
    $filter: ModelSubscriptionCompositeOwnerFilterInput
    $owner: String
  ) {
    onCreateCompositeOwner(filter: $filter, owner: $owner) {
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
export const onUpdateCompositeOwner = /* GraphQL */ `
  subscription OnUpdateCompositeOwner(
    $filter: ModelSubscriptionCompositeOwnerFilterInput
    $owner: String
  ) {
    onUpdateCompositeOwner(filter: $filter, owner: $owner) {
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
export const onDeleteCompositeOwner = /* GraphQL */ `
  subscription OnDeleteCompositeOwner(
    $filter: ModelSubscriptionCompositeOwnerFilterInput
    $owner: String
  ) {
    onDeleteCompositeOwner(filter: $filter, owner: $owner) {
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
export const onCreateBoringDog = /* GraphQL */ `
  subscription OnCreateBoringDog(
    $filter: ModelSubscriptionBoringDogFilterInput
    $owner: String
  ) {
    onCreateBoringDog(filter: $filter, owner: $owner) {
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
export const onUpdateBoringDog = /* GraphQL */ `
  subscription OnUpdateBoringDog(
    $filter: ModelSubscriptionBoringDogFilterInput
    $owner: String
  ) {
    onUpdateBoringDog(filter: $filter, owner: $owner) {
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
export const onDeleteBoringDog = /* GraphQL */ `
  subscription OnDeleteBoringDog(
    $filter: ModelSubscriptionBoringDogFilterInput
    $owner: String
  ) {
    onDeleteBoringDog(filter: $filter, owner: $owner) {
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
export const onCreateBoringOwner = /* GraphQL */ `
  subscription OnCreateBoringOwner(
    $filter: ModelSubscriptionBoringOwnerFilterInput
    $owner: String
  ) {
    onCreateBoringOwner(filter: $filter, owner: $owner) {
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
export const onUpdateBoringOwner = /* GraphQL */ `
  subscription OnUpdateBoringOwner(
    $filter: ModelSubscriptionBoringOwnerFilterInput
    $owner: String
  ) {
    onUpdateBoringOwner(filter: $filter, owner: $owner) {
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
export const onDeleteBoringOwner = /* GraphQL */ `
  subscription OnDeleteBoringOwner(
    $filter: ModelSubscriptionBoringOwnerFilterInput
    $owner: String
  ) {
    onDeleteBoringOwner(filter: $filter, owner: $owner) {
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
export const onCreateBasicModelRequiredTS = /* GraphQL */ `
  subscription OnCreateBasicModelRequiredTS(
    $filter: ModelSubscriptionBasicModelRequiredTSFilterInput
    $owner: String
  ) {
    onCreateBasicModelRequiredTS(filter: $filter, owner: $owner) {
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
export const onUpdateBasicModelRequiredTS = /* GraphQL */ `
  subscription OnUpdateBasicModelRequiredTS(
    $filter: ModelSubscriptionBasicModelRequiredTSFilterInput
    $owner: String
  ) {
    onUpdateBasicModelRequiredTS(filter: $filter, owner: $owner) {
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
export const onDeleteBasicModelRequiredTS = /* GraphQL */ `
  subscription OnDeleteBasicModelRequiredTS(
    $filter: ModelSubscriptionBasicModelRequiredTSFilterInput
    $owner: String
  ) {
    onDeleteBasicModelRequiredTS(filter: $filter, owner: $owner) {
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
export const onCreateBenchmarkedModel = /* GraphQL */ `
  subscription OnCreateBenchmarkedModel(
    $filter: ModelSubscriptionBenchmarkedModelFilterInput
    $owner: String
  ) {
    onCreateBenchmarkedModel(filter: $filter, owner: $owner) {
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
export const onUpdateBenchmarkedModel = /* GraphQL */ `
  subscription OnUpdateBenchmarkedModel(
    $filter: ModelSubscriptionBenchmarkedModelFilterInput
    $owner: String
  ) {
    onUpdateBenchmarkedModel(filter: $filter, owner: $owner) {
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
export const onDeleteBenchmarkedModel = /* GraphQL */ `
  subscription OnDeleteBenchmarkedModel(
    $filter: ModelSubscriptionBenchmarkedModelFilterInput
    $owner: String
  ) {
    onDeleteBenchmarkedModel(filter: $filter, owner: $owner) {
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
export const onCreateLocation = /* GraphQL */ `
  subscription OnCreateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onCreateLocation(filter: $filter, owner: $owner) {
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
export const onUpdateLocation = /* GraphQL */ `
  subscription OnUpdateLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onUpdateLocation(filter: $filter, owner: $owner) {
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
export const onDeleteLocation = /* GraphQL */ `
  subscription OnDeleteLocation(
    $filter: ModelSubscriptionLocationFilterInput
    $owner: String
  ) {
    onDeleteLocation(filter: $filter, owner: $owner) {
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
export const onCreateUserProfiles = /* GraphQL */ `
  subscription OnCreateUserProfiles(
    $filter: ModelSubscriptionUserProfilesFilterInput
    $owner: String
  ) {
    onCreateUserProfiles(filter: $filter, owner: $owner) {
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
export const onUpdateUserProfiles = /* GraphQL */ `
  subscription OnUpdateUserProfiles(
    $filter: ModelSubscriptionUserProfilesFilterInput
    $owner: String
  ) {
    onUpdateUserProfiles(filter: $filter, owner: $owner) {
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
export const onDeleteUserProfiles = /* GraphQL */ `
  subscription OnDeleteUserProfiles(
    $filter: ModelSubscriptionUserProfilesFilterInput
    $owner: String
  ) {
    onDeleteUserProfiles(filter: $filter, owner: $owner) {
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
export const onCreateLevelInfo = /* GraphQL */ `
  subscription OnCreateLevelInfo(
    $filter: ModelSubscriptionLevelInfoFilterInput
    $owner: String
  ) {
    onCreateLevelInfo(filter: $filter, owner: $owner) {
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
export const onUpdateLevelInfo = /* GraphQL */ `
  subscription OnUpdateLevelInfo(
    $filter: ModelSubscriptionLevelInfoFilterInput
    $owner: String
  ) {
    onUpdateLevelInfo(filter: $filter, owner: $owner) {
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
export const onDeleteLevelInfo = /* GraphQL */ `
  subscription OnDeleteLevelInfo(
    $filter: ModelSubscriptionLevelInfoFilterInput
    $owner: String
  ) {
    onDeleteLevelInfo(filter: $filter, owner: $owner) {
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
export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onCreateNote(filter: $filter, owner: $owner) {
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
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onUpdateNote(filter: $filter, owner: $owner) {
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
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote(
    $filter: ModelSubscriptionNoteFilterInput
    $owner: String
  ) {
    onDeleteNote(filter: $filter, owner: $owner) {
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
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onCreatePost(filter: $filter, owner: $owner) {
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
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onUpdatePost(filter: $filter, owner: $owner) {
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
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost(
    $filter: ModelSubscriptionPostFilterInput
    $owner: String
  ) {
    onDeletePost(filter: $filter, owner: $owner) {
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
