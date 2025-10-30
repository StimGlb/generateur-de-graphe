import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // 👉 permet d'importer avec "@/components/..."
    },
  },
  build: {
    outDir: 'dist',         // 📦 dossier de sortie pour Vercel
    sourcemap: false,       // désactive les sourcemaps en prod (plus léger)
    chunkSizeWarningLimit: 600, // évite les warnings inutiles sur les gros bundles
  },
  server: {
    port: 5173,             // port par défaut (facultatif)
    open: true,             // ouvre automatiquement dans le navigateur
  },
  preview: {
    port: 4173,             // port de preview (vite preview)
  },
})
