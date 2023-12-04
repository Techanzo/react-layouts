import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import dts from 'vite-plugin-dts'
import {libInjectCss} from 'vite-plugin-lib-inject-css'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),libInjectCss(),dts({insertTypesEntry:true})],
  build: {
    rollupOptions:{
      external:['react','react/jsx-runtime']
    },
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'layout',
      // the proper extensions will be added
      fileName: 'layout'
    },
  }
})
