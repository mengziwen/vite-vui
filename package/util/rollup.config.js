/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-20 16:57:35
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-23 15:30:06
 */

import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'lib',
    format: 'es',
    sourcemap: true,
    name: 'vitevu',
  },
  plugins: [
    typescript({
      lib: ['esnext', 'dom', 'ES2015.Promise', 'ES5'], // , 'es6', 'dom'
      target: 'es5',
      noEmitOnError: true,
    }),
  ],
};
