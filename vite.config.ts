import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { URL, fileURLToPath } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Fix: Use import.meta.url to resolve paths in an ES module context.
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
