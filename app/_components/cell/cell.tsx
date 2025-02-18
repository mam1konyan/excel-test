import type { CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
}

export const Cell = ({ style }: Props) => {
  return (
    <input
      className="w-18 h-6 border-r-1 border-b-1 border-gray-400 text-sm outline-blue-600 focus:ring-0 p-1 m-0"
      type="number"
      style={style}
    />
  );
};
