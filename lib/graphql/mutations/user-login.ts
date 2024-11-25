import { gql } from '@apollo/client';

export const userLoginDocument = gql`
  mutation UserLogin($password: String!, $email: String!) {
    userLogin(password: $password, email: $email) {
      accessToken
      authToken
      user {
        email
        provider
      }
    }
  }
`;
