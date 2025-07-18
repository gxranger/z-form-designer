import { WidgetsTwotone } from '@ricons/material';
import { Icon } from '@ricons/utils';
import { Button, Tooltip } from 'antd';

import DraggableItem from '@/components/dnd/DraggableItem.tsx';

const WidgetsPanel = () => {
  return (
    <div className="border border-red-500 h-[500px]">
      <DraggableItem id="dsfs" fixed>
        <p>111</p>
      </DraggableItem>
      <DraggableItem id="sdf" fixed>
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
