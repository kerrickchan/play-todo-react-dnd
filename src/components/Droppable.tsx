'use client';

import { PropsWithChildren, useRef } from 'react';
import { useDrop } from 'react-dnd';

export interface DroppableProps {
  onDrop: (item: unknown) => void;
}

export const Droppable: React.FC<PropsWithChildren<DroppableProps>> = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'DRAGGABLE',
    drop: onDrop,
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const dragRef = useRef<HTMLDivElement>(null);
  drop(dragRef);

  return (
    <div ref={dragRef} style={{ backgroundColor: isOver ? 'lightgreen' : 'white' }}>
      {children}
    </div>
  );
};
