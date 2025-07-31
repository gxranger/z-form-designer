import { useDragLayer } from 'react-dnd';

const DraggableLayer = () => {
  const { isDragging, item, currentOffset } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    isDragging: monitor.isDragging(),
    currentOffset: monitor.getSourceClientOffset(),
  }));
  console.log('🚀 ~ 4 ~ index.tsx~ DraggableLayer ~ isDragging: ', currentOffset);

  if (!isDragging) {
    return null;
  }
  return (
    <div
      className="w-[100px] h-[100px] bg-amber-300"
      style={{
        transform: `translate(${currentOffset?.x}px, ${currentOffset?.y}px)`,
        zIndex: 999,
      }}
    >
      {item.id}拖拖拖
    </div>
  );
};

export default DraggableLayer;
