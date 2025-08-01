import { type PropsWithChildren, useEffect } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

interface DraggableItemProps {
  id: string;
}

const DraggableItem = ({ id, children }: PropsWithChildren<DraggableItemProps>) => {
  const [{ dragging, opacity }, drag, dragPreview] = useDrag({
    type: 'box',
    item: {
      id,
    },
    collect(monitor) {
      return {
        dragging: monitor.isDragging(),
        opacity: monitor.isDragging() ? 0.4 : 1,
      };
    },
    options: {
      dropEffect: 'move',
    },
  });

  useEffect(() => {
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  });

  return (
    <div ref={drag} className={dragging ? 'border border-dashed' : 'box'} style={{ opacity }}>
      {children}
    </div>
  );
};

export default DraggableItem;
