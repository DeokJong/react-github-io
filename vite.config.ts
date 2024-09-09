import { resolve } from 'path'

import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [viteReact(), eslint()],
  base: './',
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets')
    }
  }
})
