import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from "url"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: '@ui',
        replacement: fileURLToPath(new URL('./src/components/ui', import.meta.url))
      },
      {
        find: '@pages',
        replacement: fileURLToPath(new URL('./src/components/pages', import.meta.url))
      },
      {
        find: '@enums',
        replacement: fileURLToPath(new URL('./src/common/enums', import.meta.url))
      },
      {
        find: '@types',
        replacement: fileURLToPath(new URL('./src/common/types', import.meta.url))
      },
      {
        find: '@hooks',
        replacement: fileURLToPath(new URL('./src/hooks', import.meta.url))
      },
    ]
  }
})
