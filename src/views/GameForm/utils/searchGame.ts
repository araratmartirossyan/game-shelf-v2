// services
import { findGame, fetchGame } from './../../../services/search.service'
import { prepareGenres } from './../../../services/prepareData.service'

import { ref, Ref } from 'vue'

// GraphQL
import { useQuery } from '@urql/vue'
import FETCH_GENRE from '/@/graphql/queries/genres.query.graphql'


export const searchGame = () => {
  const currentGame = ref({})
  const searchLoading = ref(false)
  const options = ref<{ label: string; value: RAWGAMEAPI.RAW_GAME }[]>([])

  const { fetching, data } = useQuery({ query: FETCH_GENRE })

  const remoteMethod = async (qs: string) => {
    searchLoading.value = true
    const results = await findGame(qs)
    options.value = results.map((game: RAWGAMEAPI.RAW_GAME) => ({
      label: game.name,
      value: game,
    }))
    searchLoading.value = false
    return results
  }

  const foundGame = async (game: Ref<RAWGAMEAPI.RAW_GAME>) => {
    const fetchedGame = await fetchGame(game.value.id)
    const parsedGenres = prepareGenres(game.value.genres, data.value.genres)

    return {
      title: fetchedGame.name,
      description: fetchedGame.description_raw,
      genres: parsedGenres,
    }
  }

  return {
    remoteMethod,
    foundGame,
    currentGame,
    searchLoading,
    options,
    fetching,
  }
}
