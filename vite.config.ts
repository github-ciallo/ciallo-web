import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:7001/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  css: {
    modules: {
      scopeBehaviour: 'local',
      generateScopedName: '[name]_[local]_[hash:6]',
    },
    preprocessorOptions: {
      less: {
        math: 'always',
      },
    },
    devSourcemap: true,
  },
});
