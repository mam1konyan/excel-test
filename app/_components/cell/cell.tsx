import { type ChangeEvent, type CSSProperties, useState } from 'react';
import { getCellInfo, setCellInfo } from '~/_store';

interface Props {
  style?: CSSProperties;
  cellIndex: string;
}

export const Cell = ({ style, cellIndex }: Props) => {
  const [value, setValue] = useState(getCellInfo(cellIndex));

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue: string = event.target.value;

    if (newValue === '' || /^\d+$/.test(newValue)) {
      setValue(newValue);
      setCellInfo(cellIndex, newValue);
    }
  };

  return (
    <div className="relative" style={style}>
      <span className="absolute top-1 left-1 text-xs text-gray-400 pointer-events-none">
        {cellIndex}
      </span>
      <input
        className="w-36 h-12 border-r-1 border-b-1 border-gray-400 text-sm text-center outline-blue-600 focus:ring-0 p-1 m-0"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};
