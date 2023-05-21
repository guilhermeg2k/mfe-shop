import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'main-app',
      filename: 'remoteEntry.js',
      exposes: {
        './CartStore': './src/store/cart.ts',
      },
      remotes: {
        cartApp: 'http://localhost:4001/assets/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'jotai', 'react-simple-toasts'],
    }),
  ],
  build: {
    target: 'esnext',
  },
});
