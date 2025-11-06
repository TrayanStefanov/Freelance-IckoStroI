import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './', // ✅ ensures correct relative paths for cPanel/static hosting
  build: {
    target: "esnext",
    minify: "esbuild",
    rollupOptions: {
      output: {
        manualChunks: undefined
      }
    }
  }
})