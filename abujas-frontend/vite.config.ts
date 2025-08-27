import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // ← Required for React
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(), // ✅ This is required to handle JSX and React Fast Refresh
    // Optional: If you want to inline Tailwind plugin
  ],
  build: {
    outDir: 'dist', // ✅ Ensures output goes to /dist
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // ✅ Helpful alias
    },
  },
  // Optional: Set base if deploying to subpath
  base: '/',
});