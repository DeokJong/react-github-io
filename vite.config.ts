import { resolve } from 'path'

import eslint from 'vite-plugin-eslint'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import viteReact from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact(), eslint()],
  base: './',
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@': resolve(__dirname, 'src'),
      '@atoms': resolve(__dirname, 'src/atoms'),
      '@styles': resolve(__dirname, 'src/styles'),
    },
  },
})
