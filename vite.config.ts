import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks - rarely change, cached longer
          'react-vendor': ['react', 'react-dom'],
          'router': ['react-router'],
          // Markdown rendering - only needed for blog
          'markdown': ['react-markdown', 'remark-gfm'],
        },
      },
    },
  },
});