import { gql } from "@apollo/client";

export const REPOSITORY_DATA = gql`
  fragment RepositoryData on Repository {
    id
    ownerAvatarUrl
    fullName
    description
    language
    stargazersCount
    forksCount
    reviewCount
    ratingAverage
    url
    watchersCount
    reviews {
      edges {
        node {
          rating
          user {
            id
            username
          }
          createdAt
          text
          id
        }
      }
      totalCount

    }
  }
`;
