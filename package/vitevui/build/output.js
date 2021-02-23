/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-20 16:55:21
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-23 11:07:44
 */
const globals = {
  vue: 'Vue',
};
const path = 'lib';
const output = [];

output.push({
  dir: path,
  format: 'es',
  globals,
  sourcemap: true,
  name: 'viteui',
});

export default output;
