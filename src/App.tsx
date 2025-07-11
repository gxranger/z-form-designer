import { App as AntdApp, ConfigProvider, type ThemeConfig } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import Layout from '@/components/designer/Layout.tsx';

const themeConfigs: ThemeConfig = {
  cssVar: true,
};

const App = () => {
  return (
    <>
      <ConfigProvider locale={zhCN} theme={themeConfigs}>
        <AntdApp>
          <Layout />
        </AntdApp>
      </ConfigProvider>
    </>
  );
};

export default App;
