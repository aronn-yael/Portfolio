import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Pour GitHub Pages : utilisez '/nom-du-repo/'
// Pour domaine personnalisé : utilisez '/'
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio/', // Repository Portfolio avec majuscule
})
