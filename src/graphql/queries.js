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

export const GET_REPOSITORY = gql`
  query getRepository(
    $id: ID!, 
    ) {
    repository(id: $id) {
      ...RepositoryData
      url
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

export const GET_ME2 = gql`
  query getMe2($includeReviews: Boolean = false) {
    me {
      id
      username
      reviewCount
      reviews @include(if: $includeReviews) {
        edges {
          node {
            rating
            repository {
              fullName
            }
            createdAt
            text
            }
        }
      }
    }
  }
`;
