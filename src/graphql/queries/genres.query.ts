import { gql } from "@urql/core";

export const fetchGenres = gql(`
  query Genres {
    genres {
      title
      id
    }
  }
`)