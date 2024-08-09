import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/front/', // Set the base path for your project

  server: {
    proxy: {
      '/front': {
        target: 'http://localhost:3000', // Change to your backend's URL
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/front/, ''),
      },
    },
  },
});
