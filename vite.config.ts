import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(), tailwindcss()
  ],
  build: {
    // Corrected Fix: Use the simple boolean 'true' to generate an external source map file.
    sourcemap: true, 
  },
  server: {
    // This is the key Vite setting to prevent dynamic module evaluation in development
    hmr: {
      protocol: 'ws',
      host: 'localhost',
    },
  }
})
