import { gql } from 'apollo-boost';

export const GET_ITEM = gql`
  query getItem($id: ID!) {
    item(where: { id: $id }) {
      id
      title
      description
      price
    }
  }
`;
