import {resolve} from 'path';

import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';

function getPackage(packageName, path = 'src') {
  return resolve(__dirname, 'packages', packageName, path);
}

// https://vitejs.dev/config/
export default defineConfig({
  root: './site',
  plugins: [svgr(), reactRefresh()],
  resolve: {
    alias: {
      '@polaris/composed': getPackage('composed'),
      '@polaris/elements': getPackage('elements'),
      '@polaris/icons': getPackage('icons'),
      '@polaris/themes': getPackage('themes'),
      '@polaris/tokens': getPackage('tokens'),
    },
  },
});
