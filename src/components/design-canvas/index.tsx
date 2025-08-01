import React, { useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-dnd';

import DraggableItem from '@/components/draggable-item';

interface ItemType {
  id: string;
}

const DesignCanvas = React.memo(() => {
  const [boxes, setBoxes] = useState<ItemType[]>([]);
  const ref = useRef(null);
  const [, drop] = useDrop(() => {
    return {
      accept: 'box',
      drop(item: ItemType) {
        setBoxes(boxes => [...boxes, item]);

        return {
          accept: 'box',
        };
      },
    };
  });
  useEffect(() => {
    drop(ref);
  });

  return (
    <div ref={ref} className="w-full h-full">
      {boxes.map((item, index) => {
        return (
          <DraggableItem key={index} id={item.id}>
            {item.id}
          </DraggableItem>
        );
      })}
    </div>
  );
});

export default DesignCanvas;
