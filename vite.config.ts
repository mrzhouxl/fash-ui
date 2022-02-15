import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//用来声明一些类型文件
import dts from 'vite-plugin-dts';

import { resolve } from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      packages: resolve(__dirname, './packages'),
    },
  },
  build:{
    lib:{
      entry: resolve(__dirname, 'packages/index.ts'),
      name: 'FUI',
      fileName: (format) => `fash-ui.${format}.js`
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          vue: 'Vue'
        }
      }
    }
  },
  plugins: [vue({ include: [/\.vue$/]}),dts()]
})
