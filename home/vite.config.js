import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import federation from '@originjs/vite-plugin-federation'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    federation({
      name: 'home',
      filename: 'remoteEntry.js',
      exposes: {
        './ButtonCheck': './src/components/ButtonCheck.vue',
        './ButtonStop': './src/components/ButtonStop.vue',
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
