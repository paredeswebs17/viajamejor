import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import { pathToFileURL } from 'url'

// Al terminar cada `vite build` (también al publicar desde Bolt) genera el HTML
// con los metadatos SEO de cada ruta y el sitemap. Ver prerender.js.
const seoPrerender = () => ({
  name: 'seo-prerender',
  apply: 'build' as const,
  async closeBundle() {
    await import(pathToFileURL(resolve(process.cwd(), 'prerender.js')).href)
  },
})

export default defineConfig({
  plugins: [react(), seoPrerender()],
  build: {
    minify: 'terser',
    cssMinify: true,
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'ui-components': ['lucide-react'],
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'lucide-react']
  },
  server: {
    open: true,
    port: 5173,
    host: true,
    hmr: {
      protocol: 'wss',
      clientPort: 443
    }
  }
})