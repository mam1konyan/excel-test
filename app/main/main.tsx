import { Cell } from '~/_components/cell';
import { Label } from '~/_components/label';
import { generateColumns } from '~/_helpers';
import { useRef, useState, useEffect } from 'react';
import { useVirtualizer } from '@tanstack/react-virtual';
import { SIZE, COLUMN_WIDTH, COLUMN_HEIGHT } from '~/_constants';

export function Main() {
  const parentRef = useRef(null);

  const rows = Array.from({ length: SIZE + 1 }).map((_, index) => index);
  const columns = generateColumns(SIZE);

  const virtualRows = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => COLUMN_HEIGHT,
    overscan: 5,
  });

  const virtualCols = useVirtualizer({
    horizontal: true,
    count: columns.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => COLUMN_WIDTH,
    overscan: 5,
  });

  return (
    <main className="flex flex-col h-screen">
      <div ref={parentRef} className="flex-1 overflow-auto">
        <div
          style={{
            height: `${virtualRows.getTotalSize()}px`,
            width: `${virtualCols.getTotalSize() + COLUMN_WIDTH}px`,
            position: 'relative',
          }}
        >
          {virtualRows.getVirtualItems().map((virtualRow) => {
            const rowIndex = virtualRow.index;

            return (
              <div
                key={virtualRow.index}
                className="flex absolute w-full"
                style={{
                  height: `${virtualRow.size}px`,
                  transform: `translateY(${virtualRow.start}px)`,
                }}
              >
                <Label className="sticky left-0 z-10">
                  {rowIndex === 0 ? '' : rows[rowIndex]}
                </Label>

                {rowIndex === 0
                  ? virtualCols.getVirtualItems().map((virtualCol) => (
                      <Label
                        key={virtualCol.index}
                        style={{
                          position: 'absolute',
                          left: `${virtualCol.start + COLUMN_WIDTH}px`,
                          width: `${virtualCol.size}px`,
                        }}
                      >
                        {columns[virtualCol.index]}
                      </Label>
                    ))
                  : virtualCols.getVirtualItems().map((virtualCol) => {
                      const cellIndex = `${rowIndex}-${columns[virtualCol.index]}`;

                      return (
                        <Cell
                          cellIndex={cellIndex}
                          key={cellIndex}
                          style={{
                            position: 'absolute',
                            left: `${virtualCol.start + COLUMN_WIDTH}px`,
                            width: `${virtualCol.size}px`,
                          }}
                        />
                      );
                    })}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
