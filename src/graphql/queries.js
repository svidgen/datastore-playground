/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBrokenModel = /* GraphQL */ `
  query GetBrokenModel($id: ID!) {
    getBrokenModel(id: $id) {
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
export const listBrokenModels = /* GraphQL */ `
  query ListBrokenModels(
    $filter: ModelBrokenModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBrokenModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBrokenModels = /* GraphQL */ `
  query SyncBrokenModels(
    $filter: ModelBrokenModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBrokenModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getJustWhatever = /* GraphQL */ `
  query GetJustWhatever($id: ID!) {
    getJustWhatever(id: $id) {
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
export const listJustWhatevers = /* GraphQL */ `
  query ListJustWhatevers(
    $filter: ModelJustWhateverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJustWhatevers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
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
  }
`;
export const syncJustWhatevers = /* GraphQL */ `
  query SyncJustWhatevers(
    $filter: ModelJustWhateverFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncJustWhatevers(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        value
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
  }
`;
export const getParentModel = /* GraphQL */ `
  query GetParentModel($id: ID!) {
    getParentModel(id: $id) {
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
export const listParentModels = /* GraphQL */ `
  query ListParentModels(
    $filter: ModelParentModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listParentModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncParentModels = /* GraphQL */ `
  query SyncParentModels(
    $filter: ModelParentModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncParentModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getChildModel = /* GraphQL */ `
  query GetChildModel($id: ID!) {
    getChildModel(id: $id) {
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
export const listChildModels = /* GraphQL */ `
  query ListChildModels(
    $filter: ModelChildModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChildModels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        value
        parent {
          id
          value
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
      nextToken
      startedAt
    }
  }
`;
export const syncChildModels = /* GraphQL */ `
  query SyncChildModels(
    $filter: ModelChildModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncChildModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        value
        parent {
          id
          value
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
      nextToken
      startedAt
    }
  }
`;
export const getModelWithoutAuth = /* GraphQL */ `
  query GetModelWithoutAuth($id: ID!) {
    getModelWithoutAuth(id: $id) {
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
export const listModelWithoutAuths = /* GraphQL */ `
  query ListModelWithoutAuths(
    $filter: ModelModelWithoutAuthFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModelWithoutAuths(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncModelWithoutAuths = /* GraphQL */ `
  query SyncModelWithoutAuths(
    $filter: ModelModelWithoutAuthFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncModelWithoutAuths(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        value
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const getModelWithDefaults = /* GraphQL */ `
  query GetModelWithDefaults($id: ID!) {
    getModelWithDefaults(id: $id) {
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
export const listModelWithDefaults = /* GraphQL */ `
  query ListModelWithDefaults(
    $filter: ModelModelWithDefaultsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listModelWithDefaults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncModelWithDefaults = /* GraphQL */ `
  query SyncModelWithDefaults(
    $filter: ModelModelWithDefaultsFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncModelWithDefaults(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCompositeDog = /* GraphQL */ `
  query GetCompositeDog($name: ID!, $description: String!) {
    getCompositeDog(name: $name, description: $description) {
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
export const listCompositeDogs = /* GraphQL */ `
  query ListCompositeDogs(
    $name: ID
    $description: ModelStringKeyConditionInput
    $filter: ModelCompositeDogFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompositeDogs(
      name: $name
      description: $description
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCompositeDogs = /* GraphQL */ `
  query SyncCompositeDogs(
    $filter: ModelCompositeDogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompositeDogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getCompositeOwner = /* GraphQL */ `
  query GetCompositeOwner($lastName: ID!, $firstName: String!) {
    getCompositeOwner(lastName: $lastName, firstName: $firstName) {
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
export const listCompositeOwners = /* GraphQL */ `
  query ListCompositeOwners(
    $lastName: ID
    $firstName: ModelStringKeyConditionInput
    $filter: ModelCompositeOwnerFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCompositeOwners(
      lastName: $lastName
      firstName: $firstName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncCompositeOwners = /* GraphQL */ `
  query SyncCompositeOwners(
    $filter: ModelCompositeOwnerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncCompositeOwners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBoringDog = /* GraphQL */ `
  query GetBoringDog($id: ID!) {
    getBoringDog(id: $id) {
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
export const listBoringDogs = /* GraphQL */ `
  query ListBoringDogs(
    $filter: ModelBoringDogFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoringDogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBoringDogs = /* GraphQL */ `
  query SyncBoringDogs(
    $filter: ModelBoringDogFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBoringDogs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBoringOwner = /* GraphQL */ `
  query GetBoringOwner($id: ID!) {
    getBoringOwner(id: $id) {
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
export const listBoringOwners = /* GraphQL */ `
  query ListBoringOwners(
    $filter: ModelBoringOwnerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBoringOwners(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncBoringOwners = /* GraphQL */ `
  query SyncBoringOwners(
    $filter: ModelBoringOwnerFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBoringOwners(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const getBasicModelRequiredTS = /* GraphQL */ `
  query GetBasicModelRequiredTS($id: ID!) {
    getBasicModelRequiredTS(id: $id) {
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
export const listBasicModelRequiredTS = /* GraphQL */ `
  query ListBasicModelRequiredTS(
    $filter: ModelBasicModelRequiredTSFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBasicModelRequiredTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        body
        createdAt
        updatedOn
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBasicModelRequiredTS = /* GraphQL */ `
  query SyncBasicModelRequiredTS(
    $filter: ModelBasicModelRequiredTSFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBasicModelRequiredTS(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        body
        createdAt
        updatedOn
        _version
        _deleted
        _lastChangedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getBenchmarkedModel = /* GraphQL */ `
  query GetBenchmarkedModel($id: ID!) {
    getBenchmarkedModel(id: $id) {
      id
      indexedField
      normalField
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      owner
    }
  }
`;
export const listBenchmarkedModels = /* GraphQL */ `
  query ListBenchmarkedModels(
    $filter: ModelBenchmarkedModelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBenchmarkedModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        indexedField
        normalField
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
  }
`;
export const syncBenchmarkedModels = /* GraphQL */ `
  query SyncBenchmarkedModels(
    $filter: ModelBenchmarkedModelFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBenchmarkedModels(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        indexedField
        normalField
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
  }
`;
export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
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
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const syncPosts = /* GraphQL */ `
  query SyncPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncPosts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const postsByUsername = /* GraphQL */ `
  query PostsByUsername(
    $username: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByUsername(
      username: $username
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
export const postsByDate = /* GraphQL */ `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      startedAt
    }
  }
`;
