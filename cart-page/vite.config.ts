import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'cart-app',
      filename: 'remoteEntry.js',
      exposes: {
        './Cart': './src/Cart.jsx',
      },
      remotes: {
        mainApp: 'http://localhost:3001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'jotai', 'react-simple-toasts'],
    }),
  ],
  build: {
    target: 'esnext',
    cssCodeSplit: false,
  },
});
