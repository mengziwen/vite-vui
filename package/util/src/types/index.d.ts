/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 16:59:03
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-23 14:33:11
 */

// 展示平台
type PLATFORM = 'app' | 'pcAdmin' | 'pc' | 'pad' | 'web' | 'all';
interface baseObject<T = any> {
  [key: string]: T;
}

export { PLATFORM, baseObject };
