'use client';

import { DragDropContext, Draggable, Droppable } from "../src";

export default function Home() {
  const handleDrop = (item: unknown) => {
    alert(`Dropped item: ${JSON.stringify(item)}`, );
  };

  const item = { id: 1, name: 'Item 1' };

  return (
    <DragDropContext>
      <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-16 sm:p-20">
        <Droppable onDrop={handleDrop}>
          <div className="p-4 border border-dashed border-gray-400 rounded w-64 h-64">
            <p className="text-center">Drop Zone</p>
          </div>
        </Droppable>

        <Draggable item={item}>
          <div className="p-2 bg-blue-500 text-white rounded">Draggable Item 1</div>
        </Draggable>
      </div>
    </DragDropContext>
  );
}
