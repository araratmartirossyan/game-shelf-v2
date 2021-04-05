import { gql } from "@urql/core";

export const createGame = gql(`
  mutation createGame($input: createGameInput!) {
    createGame(input: $input) {
      game {
        title
        id
        description
      }
    }
  }
`)