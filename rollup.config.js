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
  plugins: [typescript(), scss({
    output: 'public/dist/bundle.css'
  }), serve('public')]
};