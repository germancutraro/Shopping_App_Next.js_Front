import { gql } from 'apollo-boost';

export const GET_ITEMS = gql`
  {
    items {
      id
      title
      description
      price
    }
  }
`;
