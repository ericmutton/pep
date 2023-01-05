import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'
  
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
      port: 5173,
      proxy: {
          '/V1': {
              target: 'http://localhost:3000',
              changeOrigin: true,
              secure: false,
              rewrite: (path) => path.replace(/^\/V1/, '')
          }
      }
  }
})
