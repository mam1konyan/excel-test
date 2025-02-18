import type { CSSProperties } from 'react';

interface Props {
  style?: CSSProperties;
}

export const Cell = ({ style }: Props) => {
  return (
    <input
      className="w-36 h-12 border-r-1 border-b-1 border-gray-300 text-sm outline-green-300 focus:ring-0 p-1 m-0"
      type="number"
      style={style}
    />
  );
};
