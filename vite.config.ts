import { defineConfig } from 'vite'
import viteReact from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

export default defineConfig({
  plugins: [viteReact(), eslint()],
})
