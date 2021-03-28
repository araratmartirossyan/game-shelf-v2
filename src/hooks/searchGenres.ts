import { useQuery } from "@urql/vue";
import useFuse from "./useFuse";

// Graph Ql
import FIND_GENRE from "/@/graphql/queries/genres.query.graphql";

let res: any = [];

const getValues = () => {
  if (res.length) {
    return res;
  }

  const { data: genresResult } = useQuery({ query: FIND_GENRE });
  res = genresResult.value;

  return genresResult.value;
};

export const searchGenre = (title: string) => {
  const genresResult = getValues();
  if (genresResult.value) {
    const genresSearchResult = useFuse(genresResult.genres, title, {
      threshold: 0.3,
      keys: ["title"],
    });
    return genresSearchResult;
  }

  return [];
};
