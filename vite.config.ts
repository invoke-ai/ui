import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: [
        '**/*.stories.tsx',
        'lib/theme/components/*',
        'lib/theme/animation.ts',
        'lib/theme/radii.ts',
        'lib/theme/space.ts',
        'lib/theme/layers.ts',
      ],
    }),
    visualizer(),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      formats: ['es'],
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom'],
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
      },
    },
    sourcemap: true,
  },
});
