// import './App.css';

import { Button, message } from 'antd';

function App() {
  const [messageApi, contextHolder] = message.useMessage();

  const info = () => {
    console.log(contextHolder, 'contextHolder');
    messageApi.info('这是一条提示！');
  };
  return (
    <>
      <div className="w-full h-[400px] flex justify-center items-center">
        {contextHolder}
        <Button onClick={info} className="!bg-primary" type="primary">
          Primars Button
        </Button>
      </div>
    </>
  );
}

export default App;
