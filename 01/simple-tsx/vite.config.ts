import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx'; // 追加

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(), // 追加
  ],
});
