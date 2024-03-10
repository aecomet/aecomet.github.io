import vue from '@vitejs/plugin-vue';
import path from 'path';
import { defineConfig } from 'vite';
import eslintPlugin from 'vite-plugin-eslint';
import { createHtmlPlugin } from 'vite-plugin-html';
import vuetify from 'vite-plugin-vuetify';

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
      extensions: ['.ts', '.vue']
    },
    plugins: [
      // compile vue
      vue(),
      // enable vuetify
      vuetify(),
      // generate html
      createHtmlPlugin(),
      // lint
      eslintPlugin({
        fix: true
      })
    ],
    publicDir: path.resolve(__dirname, `${SRC_PATH}/assets`),
    build: {
      outDir: path.resolve(__dirname, OUTPUT_PATH),
      emptyOutDir: true
    },
    server: {
      host: '0.0.0.0',
      port: 8888
    },
    ssr: {
      noExternal: ['vuetify']
    },
    ssgOptions: {
      crittersOptions: {
        preload: 'media'
      }
    }
  });
};
