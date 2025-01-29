import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '36a7-2409-40d4-3103-5521-11ae-774a-f38a-5396.ngrok-free.app',
    ]
  }
})
