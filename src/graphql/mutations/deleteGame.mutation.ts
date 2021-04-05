export const deleteGame = `mutation deleteGame($input: deleteGameInput) {
  deleteGame(input: $input) {
    game {
      title
      id
    }
  }
}
`