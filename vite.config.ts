import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
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
      clientPort: 443,
      host: 'zp1v56uxy8rdx5ypatb0ockcb9tr6a-oci3-eafxjfco--5173--96435430.local-corp.webcontainer-api.io'
    }
  }
})