import Fuse from 'fuse.js'
import { computed } from 'vue'

function useFuse<T>(
  list: T[],
  searchTerm: string,
  fuseOptions?: Fuse.IFuseOptions<T>
) {

  const fuse = computed(() => {
    return new Fuse(list, fuseOptions)
  })

  const results = computed(() => {
    return fuse.value.search(searchTerm)
  })

  return results.value.map(({ item }) => item)
}

export default useFuse