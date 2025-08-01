import { useMemo } from 'react';
import { useDragLayer } from 'react-dnd';

const DraggableLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));

  const transform = useMemo(() => {
    return `translate(${currentOffset?.x ?? 0}px, ${currentOffset?.y ?? 0}px)`;
  }, [currentOffset?.x, currentOffset?.y]);

  if (!isDragging) {
    return null;
  }
  return (
    <div
      className="w-[100px] h-[100px] bg-amber-300 fixed"
      style={{
        transform,
        top: 0,
        left: 0,
        zIndex: 999,
        pointerEvents: 'none',
        maxWidth: '100vw',
        maxHeight: '100vh',
        overflow: 'hidden',
      }}
    >
      {item.id}拖拖拖
    </div>
  );
};

export default DraggableLayer;
