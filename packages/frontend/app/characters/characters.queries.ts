import { gql } from "graphql-request";

export const GET_ALL_CHARACTERS = gql`
  query {
    characters {
      id
      name
      image
      gender
    }
  }
`;
