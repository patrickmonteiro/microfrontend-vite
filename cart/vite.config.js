import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'cart',
      filename: 'remoteEntry.js',
      exposes: {
        './CartList': './src/components/CartList.vue',
      },
      shared: ['vue']
    })
  ],
  build: {
    assetsInlineLimit: 40960,
    target: 'esnext',
    minify: true,
    cssCodeSplit: false,
    sourcemap: true,
    rollupOptions: {
      output: {
        format: 'system',
        minifyInternalExports: false
      }
    }
  }
})
