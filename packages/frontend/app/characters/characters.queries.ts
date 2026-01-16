import { gql } from "graphql-request";

export const GET_ALL_CHARACTERS = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
        gender
      }
    }
  }
`;