export const prepareGenres = (currentGenres: RAWGAMEAPI.Genre[], genres: any) => {
  return currentGenres
    .map(genre => genre.name)
    .map((genre: string) => {
      const findGenre = genres.find(
        (i: any) => i.title === genre,
      );
      return findGenre;
    })
    .filter((genre: any) => genre)
    .map(genre => genre.title)
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
