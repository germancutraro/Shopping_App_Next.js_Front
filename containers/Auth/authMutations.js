import { gql } from 'apollo-boost';

export const SIGN_UP = gql`
  mutation SignUp($name: String!, $email: String!, $password: String!) {
    signUp(name: $name, email: $email, password: $password) {
      id
    }
  }
`;

export const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(email: $email, password: $password) {
      id
      name
      email
      password
      permissions
    }
  }
`;

export const SIGN_OUT = gql`
  mutation SignOut {
    signOut {
      success
    }
  }
`;
