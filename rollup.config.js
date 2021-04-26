import copy from 'rollup-plugin-copy';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'public/dist',
    format: 'esm',
    exports: 'auto'
  },
  plugins: [
    typescript(),
    scss({
      output: 'public/dist/bundle.css'
    }),
    copy({
      targets: [
        { src: 'src/assets/fonts/**', dest: 'public/dist/assets/fonts' },
        { src: 'src/assets/images/**', dest: 'public/dist/assets/images' }
      ]
    }),
    serve('public')]
};