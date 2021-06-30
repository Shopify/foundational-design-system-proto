import {resolve} from 'path';

import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';

function getPackage(packageName, path = 'src') {
  return resolve(__dirname, 'src', 'packages', packageName, path);
}

export default defineConfig({
  root: './src/polaris.shopify.com',
  plugins: [svgr(), reactRefresh(), vanillaExtractPlugin()],
  resolve: {
    alias: {
      '@polaris/composed': getPackage('composed'),
      '@polaris/elements': getPackage('elements'),
      '@polaris/icons': getPackage('icons'),
      '@polaris/tokens': getPackage('tokens'),
    },
  },
});
