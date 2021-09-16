import {resolve} from 'path';

import {defineConfig} from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
      fileName: (format) => `polaris-functions.${format}.js`,
    },
    outDir: resolve(__dirname, './dist'),
    emptyOutDir: false,
  },
});
