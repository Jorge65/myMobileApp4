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
  mutation create_review(
    $review: CreateReviewInput!
  ) {
    createReview(
      review: $review
    ) {
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

export const CREATE_USER = gql`
  mutation create_user(
    $user: CreateUserInput!
  ) {
    createUser(
      user: $user
    ) {
      id
      username
    }
  }
`;
