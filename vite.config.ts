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
        // Rolldown (Vite 8) n'accepte manualChunks que sous forme de fonction
        manualChunks(id) {
          if (!id.includes('node_modules')) return;
          // Vendor chunks - rarely change, cached longer
          if (/node_modules\/(react|react-dom|scheduler)\//.test(id)) return 'react-vendor';
          if (id.includes('node_modules/react-router')) return 'router';
          // Markdown rendering - only needed for blog
          if (/node_modules\/(react-markdown|remark-|mdast-|micromark|unified|unist-|vfile|hast-)/.test(id)) return 'markdown';
        },
      },
    },
  },
});