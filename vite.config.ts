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
  server: {
    headers: {
      'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://id.worldcoin.org https://aistudiocdn.com; style-src 'self' 'unsafe-inline' https://id.worldcoin.org https://aistudiocdn.com; img-src 'self' data: https://id.worldcoin.org; font-src 'self' data: https://id.worldcoin.org https://aistudiocdn.com; connect-src 'self' https://id.worldcoin.org https://sentry.io https://status.worldcoin.org; frame-src https://id.worldcoin.org;",
    },
  },
})