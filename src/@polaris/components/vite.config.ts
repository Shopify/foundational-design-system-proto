import {resolve} from 'path';

import {defineConfig} from 'vite';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';

function getPackage(packageName: string, path = 'src') {
  return resolve(__dirname, '../', packageName, path);
}

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: '@polaris/layout-experimental',
    },
    outDir: '../../../dist',
    rollupOptions: {
      external: ['react'],
      output: {
        globals: {
          react: 'React',
        },
      },
    },
  },
  plugins: [vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@polaris/icons': getPackage('icons'),
      '@polaris/tokens': getPackage('tokens'),
    },
  },
});
