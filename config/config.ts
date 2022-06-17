import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  hash: true,
  ssr: {},
  exportStatic: {},
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/pages/components/Loading',
  },
  dva: {
    immer: false,
    hmr: true,
  },
  antd: {},

  // locale: {
  //   // default zh-CN
  //   default: 'en-US',
  //   antd: true,
  //   // default true, when it is true, will use `navigator.language` overwrite default
  //   baseNavigator: false,
  // },
  history: { type: 'browser' },
  routes,
  fastRefresh: {},
});
