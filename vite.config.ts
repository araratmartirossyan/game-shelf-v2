import { join } from 'path'
import graphqlPlugin from 'vite-plugin-graphql'
import type { UserConfig } from 'vite'

const config: UserConfig = {
  alias: {
    '/@/': join(__dirname, 'src'),
  },
  plugins: [graphqlPlugin],
  rollupInputOptions: { // ignore react stuff
    external: [
      'react'
    ]
  }
}

export default config