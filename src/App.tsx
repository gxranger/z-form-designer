import { App as AntdApp, ConfigProvider, type ThemeConfig } from 'antd';
import zhCN from 'antd/locale/zh_CN';

import DesignerLayout from '@/components/editor/DesignerLayout.tsx';

const themeConfigs: ThemeConfig = {
  cssVar: true,
  token: {
    colorInfo: '#141414',
    colorPrimary: '#141414', // 主色
    colorBgContainer: '#ffffff', // 背景色
    colorText: '#333333', // 文本色
    colorBorder: '#e5e5e5', // 边框色
  },
};

function App() {
  return (
    <>
      <ConfigProvider locale={zhCN} theme={themeConfigs}>
        <AntdApp>
          <DesignerLayout />
        </AntdApp>
      </ConfigProvider>
    </>
  );
}

export default App;
