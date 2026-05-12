import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Domain is now live at www.evasmartsystems.com via GitHub Pages.
export default defineConfig({
  plugins: [react()],
  base: '/',
})