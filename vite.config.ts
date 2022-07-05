import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import solid from 'vite-plugin-solid'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), solid()],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
  },
  resolve: {
    alias: [
      { find: '~shared', replacement: path.resolve(__dirname, './shared') },
      { find: '~vue', replacement: path.resolve(__dirname, './vue/src') },
      { find: '~solid', replacement: path.resolve(__dirname, './vue/src') },
    ],
  },
})
