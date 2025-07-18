import { useDraggable } from '@dnd-kit/core';
import type { UseDraggableArguments } from '@dnd-kit/core/dist/hooks/useDraggable';
import { CSS } from '@dnd-kit/utilities';
import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';

interface DraggableItemProps extends UseDraggableArguments {
  fixed?: boolean;
  style?: React.CSSProperties;
  dragStyle?: React.CSSProperties;
}

const DraggableItem = ({
  id,
  data,
  disabled,
  children,
  style,
  dragStyle,
  fixed = false,
}: PropsWithChildren<DraggableItemProps>) => {
  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id,
    data,
    disabled,
  });

  const finalStyle = useMemo(() => {
    return {
      ...style,
      ...(isDragging ? dragStyle : {}),
      transform: fixed ? void 0 : CSS.Transform.toString(transform),
      opacity: fixed && isDragging ? 0.5 : 1,
    };
  }, [style, dragStyle, transform, isDragging, fixed]);

  return (
    <div ref={setNodeRef} {...attributes} {...listeners} style={finalStyle}>
      {children}
    </div>
  );
};

export default DraggableItem;
