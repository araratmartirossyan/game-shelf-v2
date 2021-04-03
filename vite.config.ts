import { join } from 'path'
import graphqlPlugin from 'vite-plugin-graphql'
import type { UserConfig, Plugin } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

const PwaConfig = VitePWA({
  manifest: {
    "theme_color": "#f69435",
    "background_color": "#f69435",
    "display": "browser",
    "scope": "/",
    "start_url": "/",
    "name": "Game Shelf 2",
    "short_name": "GS",
    "description": "Virtual Game shelf of your physical games ",
    "icons": [
      {
        "src": "/icon-192x192.png",
        "sizes": "192x192",
        "type": "image/png"
      },
      {
        "src": "/icon-256x256.png",
        "sizes": "256x256",
        "type": "image/png"
      },
      {
        "src": "/icon-384x384.png",
        "sizes": "384x384",
        "type": "image/png"
      },
      {
        "src": "/icon-512x512.png",
        "sizes": "512x512",
        "type": "image/png"
      }
    ]
  },
  workbox: {
    // workbox options for generateSW
  }
}) as Plugin

const config: UserConfig = {
  alias: {
    '/@/': join(__dirname, 'src'),
  },
  plugins: [graphqlPlugin, PwaConfig],
  rollupInputOptions: { // ignore react stuff
    external: [
      'react'
    ]
  }
}

export default config