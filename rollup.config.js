import copy from 'rollup-plugin-copy';
import del from 'rollup-plugin-delete';
import typescript from '@rollup/plugin-typescript';
import scss from 'rollup-plugin-scss';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    exports: 'auto'
  },
  plugins: [
    del({
      targets: 'dist/*'
    }),
    typescript(),
    scss({
      output: 'dist/bundle.css'
    }),
    copy({
      targets: [
        { src: 'public/**', dest: 'dist' },
        { src: 'src/assets/fonts/**', dest: 'dist/assets/fonts' },
        { src: 'src/assets/images/**', dest: 'dist/assets/images' }
      ]
    }),
    serve('dist')]
};