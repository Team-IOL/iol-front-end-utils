import typescript from '@rollup/plugin-typescript';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { dts } from "rollup-plugin-dts";
import { visualizer } from "rollup-plugin-visualizer";

const jsConfig = {
  input: 'src/index.ts',
  output: {
    file: 'dist/bundle.js',
    format: 'cjs'
  },
  plugins: [
    visualizer(),
    typescript({
      "compilerOptions": {
        "module": "ESNext", /* Specify what module code is generated. */
        "types": ["./dist/iol-front-end-utils"],
        "moduleResolution": "node",
        "strict": true, /* Enable all strict type-checking options. */
        "noEmit": true,
        // "rootDir": "src",
        "target": "es2015", /* Set the JavaScript language version for emitted JavaScript and include compatible library declarations. */
        "esModuleInterop": true, /* Emit additional JavaScript to ease support for importing CommonJS modules. This enables 'allowSyntheticDefaultImports' for type compatibility. */
        "forceConsistentCasingInFileNames": true, /* Ensure that casing is correct in imports. */
      },
      "include": [
        "src/**/*.ts"
      ],
      "exclude": [
        "node_modules",
        "**/*.test.ts",
        "tests"
      ],
    }),
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