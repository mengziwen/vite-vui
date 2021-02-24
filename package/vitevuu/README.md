<!--
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-23 13:22:47
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-24 11:57:31
-->

# util 文档

[![NPM module](https://img.shields.io/npm/v/vitevuu.svg)](https://npmjs.org/package/vitevuu)
[![NPM downloads](https://img.shields.io/npm/dt/vitevuu.svg)](https://npmjs.org/package/vitevuu)

## 现状

> 工具目前分为 4 块
>
> 1. axios 数据请求封装，内部使用
> 2. base 通用基础工具，按需审核添加进入
> 3. checkuser 内部使用工具，用于检查智信用户登录信息
> 4. getQuery 根据浏览器 url 获取 query 值，拥有多种玩法

## 预期

> 为了工具具有更好的维护性与可玩性，axios 和 checkUser 将会逐步剔除，加入更多的实用性工具。

## 规范

1. 导出类 必须使用大写字母开头
2. 如果即将加入的工具，可能会拓展为大型工具，请放入文件夹内，并建立相关的.md 文件
3. 说明文档编写 需说明改功能的使用范围以及使用方式

   - 如下:
     > 作用： 用于获取浏览器或者字符串中的 query 值。
     >
     > 使用方式:
     >
     > ```js
     > import { getQueryString, getAllQuery } from 'getQuery';
     > const url = 'https://www.bhabgs.com?name=bhabgs&age=26';
     > // 如果未传入 url,将会默认获取window的url
     > const name = getQueryString('name', url)<string, ?string>;
     > console.log(name); // name = bhabgs
     > ```
