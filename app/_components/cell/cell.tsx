import type { CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
  cellIndex: string;
}

export const Cell = ({ style, cellIndex }: Props) => {
  return (
    <input
      className="w-18 h-6 border-r-1 border-b-1 border-gray-400 text-xs text-center outline-blue-600 focus:ring-0 p-1 m-0 placeholder:font-light placeholder:text-xs placeholder:text-gray-400 placeholder:text-center"
      type="number"
      style={style}
      placeholder={cellIndex}
    />
  );
};
