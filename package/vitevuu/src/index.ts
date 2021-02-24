/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 16:56:15
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 11:19:57
 */
import axios, { instance } from './axios';
import checkUser from './checkUser';
import { getAllQuery, getQueryString } from './getQuery';
import { deepCopy, decodeUnicode, encodeUnicode, guid, platForm } from './base';

const _default = {
  axios,
  instance,
  getAllQuery,
  getQueryString,
  platForm,
  checkUser,
  deepCopy,
  decodeUnicode,
  encodeUnicode,
  guid,
};

export {
  axios,
  instance,
  getAllQuery,
  getQueryString,
  platForm,
  checkUser,
  deepCopy,
  decodeUnicode,
  encodeUnicode,
  guid,
};

export default _default;
