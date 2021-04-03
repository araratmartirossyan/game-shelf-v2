declare namespace GSAPI {
  type GamesResponse = { games: Game[] }
  type GameResponse = {
    game: Game
  }
  type InputForm = {
    key: 'title' | 'description' | 'genres' | 'genresIds' | 'platform' | 'picture'
    value: string
  }

  type CreateGameInput = {
    title?: string;
    description?: string;
    id?: string;
    genres?: string[];
    genresIds?: string[];
    platform?: string;
    picture?: string;
  }

  type Game = {
    title?: string;
    description?: string;
    id?: string;
    genres?: Genre[];
    platform?: Platform;
    createdAt?: string;
    updatedAt?: string;
    __typename?: string;
    picture?: Picture
  }

  type Picture = {
    size: string;
    url: string;
    formats: {
      thumbnail: Format;
      large: Format;
      medium: Format;
      small: Format;
    }
  }

  type Format = {
    name: string;
    hash: string;
    ext: string;
    mime: string;
    width: number;
    height: number;
    size: number;
    path?: string;
    url: string;
  }

  type Platform = {
    title: string;
    _id?: string;
    id?: string;
  }

  type Genre = {
    title?: string;
    _id?: string;
    id?: string;
  }
}

type Nullable<T> = {
  [P in keyof T]: T[P] | null
}

type ComponentSize = any;

type SFCWithInstall = any;