import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ecommerce-dashboard/',   // NO space
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
  },
})