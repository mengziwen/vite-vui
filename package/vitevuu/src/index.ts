/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 16:56:15
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 10:53:42
 */
import axios, { instance } from './axios';
import { getAllQuery, getQueryString } from './getQuery';
import { platForm } from './system.info';

const _default = { axios, instance, getAllQuery, getQueryString, platForm };

export { axios, instance, getAllQuery, getQueryString, platForm };

export default _default;
