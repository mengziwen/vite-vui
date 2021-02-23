/*
 * @abstract: JianJie
 * @version: 0.0.1
 * @Author: bhabgs
 * @Date: 2021-02-21 15:25:14
 * @LastEditors: bhabgs
 * @LastEditTime: 2021-02-23 14:31:03
 */
import { createApp } from 'vue';
import vui from '../package/vitevui';
import App from './lay';
import './assets/style/index.less';
import '../package/vitevui/src/style/index.less';

createApp(App).use(vui).mount('#app');
