import path from 'path';

import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [svgr(), reactRefresh(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@polaris/components': path.resolve(
        __dirname,
        '../packages/components/src/index.ts',
      ),
      '@polaris/tokens': path.resolve(
        __dirname,
        '../packages/tokens/src/index.ts',
      ),
    },
  },
});
