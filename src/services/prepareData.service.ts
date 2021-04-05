export const prepareGenres = (currentGenres: RAWGAMEAPI.Genre[], genres: any) => {
  const valuesGenres = currentGenres
    .map(genre => genre.name)
    .map((genre: string) => {
      const findGenre = genres.find(
        (i: any) => i.title === genre,
      );
      return findGenre;
    })
    .filter((genre: any) => genre)


  return {
    formValues: valuesGenres.map(genre => genre.title),
    apiValues: valuesGenres.map(genre => genre.id)
  }
}

export const preparePlatforms = (currentPlatforms: any, platforms: Partial<GSAPI.Platform[]>) => {
  return currentPlatforms
    .map(({ platform }: any) => platform.name)
    .map((platform: any) => {
      const filtered = platforms.find(
        (i: any) => i.title === platform,
      );

      return filtered;
    });
}
