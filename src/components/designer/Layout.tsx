import { DndContext, DragOverlay, type Modifier } from '@dnd-kit/core';
import { Splitter, Tabs } from 'antd';
import { useLayoutEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import WidgetsPanel from '@/components/panel/WidgetsPanel.tsx';

const items = [
  {
    key: 'property',
    label: '',
    children: <WidgetsPanel />,
    icon: <WidgetsPanel.Icon />,
  },
];

const Layout = () => {
  const [isDragging, setIsDragging] = useState(false);

  const restrictToFirstTwoPanels: Modifier = ({
    transform,
    containerNodeRect,
    draggingNodeRect,
  }) => {
    if (!containerNodeRect || !draggingNodeRect) return transform;

    const overlayWidth = draggingNodeRect.width;
    const overlayHeight = draggingNodeRect.height;

    console.log('🚀 -----------------------------------------------------------🚀');
    console.log('🚀 ~ Layout.tsx:30 ~ Layout ~ designAreaSafeDistance.current:');
    console.log('🚀 -----------------------------------------------------------🚀');

    const minX = containerNodeRect.left;
    const maxX = designAreaSafeDistance.current.x - overlayWidth;

    const minY = containerNodeRect.top;
    const maxY = designAreaSafeDistance.current.y - overlayHeight;

    return {
      ...transform,
      x: Math.min(Math.max(transform.x, minX), maxX),
      y: Math.min(Math.max(transform.y, minY), maxY),
    };
  };

  const designAreaRef = useRef<HTMLDivElement>(null);
  const designAreaSafeDistance = useRef({
    x: 0,
    y: 0,
  });
  useLayoutEffect(() => {
    const { right, bottom } = designAreaRef.current!.getBoundingClientRect();

    console.log(
      '🚀 --------------------------------------------------------------------------------------------------------------------------------------🚀'
    );
    console.log(
      '🚀 ~ Layout.tsx:55 ~ useLayoutEffect ~ designAreaRef.current!.getBoundingClientRect():',
      designAreaRef.current!.getBoundingClientRect()
    );
    console.log(
      '🚀 --------------------------------------------------------------------------------------------------------------------------------------🚀'
    );

    designAreaSafeDistance.current.x = right;
    designAreaSafeDistance.current.y = bottom;
  }, []);

  return (
    <DndContext
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onDragCancel={() => setIsDragging(false)}
    >
      <Splitter lazy style={{ height: '100vh' }}>
        <Splitter.Panel collapsible resizable={false} defaultSize={300}>
          <Tabs
            size="small"
            centered
            defaultActiveKey="1"
            items={items}
            tabBarStyle={{ height: '45px' }}
          />
        </Splitter.Panel>

        <Splitter.Panel>
          <div className="border-b-6 border border-blue-500 w-full h-dvh" ref={designAreaRef}>
            设计区
          </div>
        </Splitter.Panel>

        <Splitter.Panel resizable={false} defaultSize={325}>
          属性面板
        </Splitter.Panel>
      </Splitter>

      {createPortal(
        <DragOverlay modifiers={[restrictToFirstTwoPanels]}>
          {isDragging ? <button type="button">拖拽节点</button> : null}
        </DragOverlay>,
        document.body
      )}
    </DndContext>
  );
};

export default Layout;
