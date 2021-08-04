import {defineConfig} from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import svgr from 'vite-plugin-svgr';
import {vanillaExtractPlugin} from '@vanilla-extract/vite-plugin';

export default defineConfig({
  plugins: [svgr(), reactRefresh(), vanillaExtractPlugin()],
});
