import { gql } from "@urql/core";

export const fetchPlatform = gql(`
  query Platforms($platform: String) {
    platforms(limit: 500, where: { platform: $platform }) {
      title
      id
    }
  }
`)