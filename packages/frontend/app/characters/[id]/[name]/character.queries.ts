import { gql } from "graphql-request";

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      image
      gender
      species
      type

      origin {
        name
        type
        dimension
      }

      location {
        name
        type
        dimension
      }

      episode {
        id
        name
        episode
      }
    }
  }
`;
