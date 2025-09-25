import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // This ensures SPA routes fallback to index.html
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      input: '/index.html'
    }
  }
})
