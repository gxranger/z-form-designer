import { type PropsWithChildren, useEffect, useRef } from 'react';
import { useDrag } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';

interface DraggableItemProps {
  id: string;
}

const DraggableItem = ({ id, children }: PropsWithChildren<DraggableItemProps>) => {
  const itemRef = useRef<HTMLDivElement | null>(null);
  const [{ dragging }, drag, dragPreview] = useDrag({
    type: 'box',
    item: {
      id,
    },
    collect(monitor) {
      return {
        dragging: monitor.isDragging(),
      };
    },
  });

  useEffect(() => {
    drag(itemRef);
    dragPreview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  return (
    <div ref={itemRef} className={dragging ? 'box dragging' : 'box'}>
      {children}
    </div>
  );
};

export default DraggableItem;
