import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { dts } from "rollup-plugin-dts";

const jsConfig = {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    typescript(),
    nodeResolve(),
    commonjs()
  ]
};

// Configuration for TypeScript declaration file
const dtsConfig = {
  input: 'src/index.ts',
  output: {
    file: 'dist/iol-front-end-utils.d.ts',
    format: 'es'  // This format works well with .d.ts files
  },
  plugins: [
    dts(),
  ]
};


export default [jsConfig, dtsConfig]