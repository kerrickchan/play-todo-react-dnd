'use client';

import { PropsWithChildren, useRef } from 'react';
import { useDrag } from 'react-dnd';

export interface DraggableProps {
  type?: string;
  item: unknown;
}

/**
 * Draggable component
 */
export const Draggable: React.FC<PropsWithChildren<DraggableProps>> = ({ type = 'DRAGGABLE', item = {}, children }) => {
  const [collected, drag] = useDrag(
    () => ({
      type,
      item,
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.5 : 1
      })
    }),
    []
  )

  const dragRef = useRef<HTMLDivElement>(null);
  drag(dragRef);

  return (
    <div ref={dragRef} style={{ opacity: collected.opacity }}>
      {children}
    </div>
  )
};
