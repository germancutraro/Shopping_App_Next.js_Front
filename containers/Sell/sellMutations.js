import { gql } from 'apollo-boost';

export const CREATE_ITEM = gql`
  mutation CreateItem(
    $title: String!
    $description: String!
    $price: Int!
    $image: String
    $largeImage: String
  ) {
    createItem(
      title: $title
      description: $description
      price: $price
      image: $image
      largeImage: $largeImage
    ) {
      id
    }
  }
`;

export const UPDATE_ITEM = gql`
  mutation UpdateItem(
    $id: ID!
    $title: String!
    $description: String!
    $price: Int!
  ) {
    updateItem(
      id: $id
      title: $title
      description: $description
      price: $price
    ) {
      id
    }
  }
`;
