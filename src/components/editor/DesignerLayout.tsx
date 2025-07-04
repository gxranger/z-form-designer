import { App, Button } from 'antd';

function DesignerLayout() {
  const { message, modal, notification } = App.useApp();

  const showMessage = () => {
    message.success('Success!');
  };

  const showModal = () => {
    modal.warning({
      title: 'This is a warning message',
      content: 'some messages...some messages...',
    });
  };

  const showNotification = () => {
    notification.info({
      message: 'Notification topLeft',
      description: 'Hello, Ant Design!!',
      placement: 'topLeft',
    });
  };

  return (
    <>
      <div className="w-full h-[400px] flex justify-center items-center">
        <Button type="primary" onClick={showMessage}>
          Open message
        </Button>
        <Button type="primary" onClick={showModal}>
          Open modal
        </Button>
        <Button type="primary" onClick={showNotification}>
          Open notification
        </Button>
      </div>
    </>
  );
}

export default DesignerLayout;
