import { resolve } from 'path'
import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'

function getPackage(packageName) {
  return resolve(__dirname, 'packages', packageName, 'src')
}

// https://vitejs.dev/config/
export default defineConfig({
  root: './site',
  plugins: [reactRefresh()],
  resolve: {
    alias: {
      "@polaris/composed": getPackage("composed"),
      "@polaris/elements": getPackage("elements"),
      "@polaris/icons": getPackage("icons"),
      "@polaris/themes": getPackage("themes"),
      "@polaris/tokens": getPackage("tokens")
    }
  }
})
