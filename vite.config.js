import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        'target': 'https://api.resend.com',
        changeOrigin: true,
      }
    }
  },
  plugins: [react()],
  define: {
    'process.env': process.env
  }
})
