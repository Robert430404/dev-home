import typescript from '@rollup/plugin-typescript';
import serve from 'rollup-plugin-serve';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'public/dist',
    format: 'es',
    exports: 'auto'
  },
  plugins: [typescript(), serve('public')]
};