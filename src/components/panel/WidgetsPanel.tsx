import { WidgetsTwotone } from '@ricons/material';
import { Icon } from '@ricons/utils';
import { Tooltip } from 'antd';

const WidgetsPanel = () => {
  return <span>元件列表</span>;
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
