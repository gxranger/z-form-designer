import { App as AntdApp, ConfigProvider, Splitter, Tabs, type ThemeConfig } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

import DesignCanvas from '@/components/design-canvas';
import DraggableLayer from '@/components/draggable-layer';
import WidgetsPanel from '@/components/widget-panel';

const themeConfigs: ThemeConfig = {
  cssVar: true,
};

const items = [
  {
    key: 'property',
    label: '',
    children: <WidgetsPanel />,
    icon: <WidgetsPanel.Icon />,
  },
];

const Layout = () => {
  return (
    <DndProvider backend={HTML5Backend}>
      <Splitter lazy style={{ height: '100vh' }}>
        <Splitter.Panel collapsible resizable={false} defaultSize={300}>
          <Tabs
            size="small"
            centered
            defaultActiveKey="1"
            items={items}
            tabBarStyle={{ height: '45px', margin: 0 }}
          />
        </Splitter.Panel>

        <Splitter.Panel>
          <div className="border-b-1 border border-gray-100 w-full h-[45px]"></div>
          <div className="border-b-6 border border-blue-500 w-full h-[calc(100%-45px)]">
            <DesignCanvas />
          </div>
          <DraggableLayer />
        </Splitter.Panel>

        <Splitter.Panel resizable={false} defaultSize={325}>
          属性面板
        </Splitter.Panel>
      </Splitter>
    </DndProvider>
  );
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
