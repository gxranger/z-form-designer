import { WidgetsTwotone } from '@ricons/material';
import { Icon } from '@ricons/utils';
import { Button, Tooltip } from 'antd';

import DraggableItem from '@/components/draggable-item';

const WidgetsPanel = () => {
  return (
    <div className="border-b-6 border border-red-500 h-[calc(100dvh-45px)]">
      <DraggableItem id="dsfs">
        <Button>3443</Button>
      </DraggableItem>
      <DraggableItem id="sdfgdsg">
        <Button>3443</Button>
      </DraggableItem>
    </div>
  );
};

const TabsIcon = () => {
  return (
    <Icon size={24}>
      <Tooltip placement="bottom" title="元件库">
        <WidgetsTwotone />
      </Tooltip>
    </Icon>
  );
};

WidgetsPanel.Icon = TabsIcon;

export default WidgetsPanel;
