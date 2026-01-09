import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { copyFileSync } from 'fs'
import { join } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'copy-404',
      closeBundle() {
        // Copy 404.html to dist after build
        try {
          copyFileSync(
            join(__dirname, 'public', '404.html'),
            join(__dirname, 'dist', '404.html')
          )
        } catch (err) {
          console.warn('Could not copy 404.html:', err)
        }
      },
    },
  ],
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
})
