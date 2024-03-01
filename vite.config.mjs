import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';
import preload from 'vite-plugin-preload';

// https://vitejs.dev/config/
export default () => {
  const SRC_PATH = 'src';
  const OUTPUT_PATH = 'build';

  return defineConfig({
    root: path.resolve(__dirname, SRC_PATH),
    resolve: {
      alias: [
        {
          find: '@src',
          replacement: path.resolve(__dirname, SRC_PATH)
        }
      ],
      extensions: ['.ts', '.json', '.vue']
    },
    plugins: [
      // compile vue
      vue(),
      // generate html
      createHtmlPlugin(),
      // lint
      eslintPlugin({
        fix: true
      }),
      // preload assets
      preload()
    ],
    publicDir: path.resolve(__dirname, `${SRC_PATH}/assets`),
    build: {
      outDir: path.resolve(__dirname, OUTPUT_PATH),
      emptyOutDir: true
    }
  });
};
