import { gql } from '@apollo/client';

export const createUserDocument = gql`
  mutation CreateUser($payload: CreateUserPayload!) {
    createUser(payload: $payload) {
      accessToken
      authToken
      user {
        email
        password
        provider
      }
    }
  }
`; 