import { resolve } from 'path'

import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [TanStackRouterVite(), viteReact(), eslint()],
  base: './',
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@': resolve(__dirname, 'src/')
    }
  }
})
