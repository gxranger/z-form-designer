import './index.css';
import '@ant-design/v5-patch-for-react-19';

import { ConfigProvider, type ThemeConfig } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './App.tsx';

const themeConfigs: ThemeConfig = {
  cssVar: true,
  token: {
    colorPrimary: '#141414', // 主色
    colorBgContainer: '#ffffff', // 背景色
    colorText: '#333333', // 文本色
    colorBorder: '#e5e5e5', // 边框色
  },
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ConfigProvider locale={zhCN} theme={themeConfigs}>
      <App />
    </ConfigProvider>
  </StrictMode>
);
