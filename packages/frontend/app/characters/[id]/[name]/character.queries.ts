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
      }

      episode {
        id
        name
        episode
      }
    }
  }
`;
