import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@mui/icons-material': '@mui/icons-material/esm',
    },
  },
  build: {
    rollupOptions: {
      external: ['react-router-dom'],
    },
  },
});
