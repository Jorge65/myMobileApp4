import { gql } from "@apollo/client";
import { REPOSITORY_DATA } from "./fragments";

export const SIGN_IN = gql`
    mutation signIn(
        $credentials: AuthenticateInput!
    ) {
        authenticate(
            credentials: $credentials
        ) {
        accessToken
        }
    }
`;

export const CREATE_REVIEW = gql`
  mutation create_review($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      user {
        username
      }
      repository {
        ...RepositoryData
      }
      text
      repositoryId
    }
  }
  ${REPOSITORY_DATA}
`;

export const CREATE_REVIEW_2 = gql`
  mutation create_review_ok($review: CreateReviewInput!) {
    createReview(review: $review) {
      id
      userId
      repositoryId
      rating
      createdAt
      text
      user {
        id
        username
      }
      repository {
        ...RepositoryData
      }
    }
  }
  ${REPOSITORY_DATA}
`;