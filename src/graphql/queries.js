import { gql } from '@apollo/client';
import { REPOSITORY_DATA } from "./fragments";

export const GET_REPOSITORIES = gql`
  query repositories(
    $after: String
    $first: Int
    $orderDirection: OrderDirection
    $orderBy: AllRepositoriesOrderBy
    $searchKeyword: String
    $ownerName: String
  ) {
    repositories(
        after: $after
        first: $first
        orderDirection: $orderDirection
        orderBy: $orderBy
        searchKeyword: $searchKeyword
        ownerName: $ownerName
    ) {
    edges {
        cursor
        node {
          ...RepositoryData
        }
      }
    }
  }
  ${REPOSITORY_DATA}
`;

export const GET_ME = gql`
  query getMe {
    me {
      id
      username
    }
  }

`;

// other queries...
