import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // server: {
  //   proxy: {
  //     '/api/user': {
  //       target: 'http://desabafa-dev-2.us-east-1.elasticbeanstalk.com',
  //       changeOrigin: true,
  //       rewrite: path => path.replace(/^\/api\/user/, '/api'),
  //     },
  //   },
  // }
})
