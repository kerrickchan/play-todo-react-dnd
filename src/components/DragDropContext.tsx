'use client';

import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
import { PropsWithChildren } from 'react';

/**
 * Wrapper component for Drag and Drop context
 */
export const DragDropContext: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      {children}
    </DndProvider>
  );
};
