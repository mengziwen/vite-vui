import type { App } from 'vue';
import viLayout from './layout/lay';
import viLayoutHeader from './layout/lay_header';
import viLayoutSider from './layout/lay_sider';
import viLayoutMain from './layout/lay_main';
import viLayoutFooter from './layout/lay_footer';
import button from './button';
import './style/index.less';
export { viLayout, viLayoutHeader, viLayoutSider, viLayoutMain, viLayoutFooter, button, };
declare const _default: {
    install: (app: App<any>) => void;
    version: string;
};
export default _default;
