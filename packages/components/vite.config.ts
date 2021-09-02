import path from 'path';

import {defineConfig} from 'vite';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';

import pkg from './package.json';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `polaris-components.${format}.js`,
    },
    outDir: path.resolve(__dirname, './dist'),
    emptyOutDir: false,
    rollupOptions: {
      external: Object.keys(pkg.peerDependencies),
    },
  },
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@polaris/tokens': path.resolve(__dirname, '../tokens/src/index.ts'),
    },
  },
});
