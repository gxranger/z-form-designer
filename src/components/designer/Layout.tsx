import { Splitter } from 'antd';

const Layout = () => {
  return (
    <>
      <Splitter lazy style={{ height: '100vh', border: '1px solid red' }}>
        <Splitter.Panel collapsible resizable={false} defaultSize={300}>
          元件面板
        </Splitter.Panel>
        <Splitter.Panel>设计区</Splitter.Panel>
        <Splitter.Panel resizable={false} defaultSize={325}>
          属性面板
        </Splitter.Panel>
      </Splitter>
    </>
  );
};

export default Layout;
