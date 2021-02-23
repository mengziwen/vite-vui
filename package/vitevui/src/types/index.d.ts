/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-01-05 14:17:25
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-01-20 17:08:25
 */
interface baseObject<T = any> {
  [key: string]: T;
}
import Vue, { VNode } from 'vue';
import { AxiosInstance } from 'axios';

declare module 'cssnano';

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any;
    }
  }
}
