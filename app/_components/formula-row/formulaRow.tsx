import { useState } from 'react';
import { getCellInfo, setCellInfo } from '~/_store';
import { calculateResult, parseFormula } from '~/_services/formulaRow';

export const FormulaRow = () => {
  const [value, setValue] = useState('');

  const onSubmit = () => {
    try {
      const { targetCell, cell1, operator, cell2 } = parseFormula(value);

      const cell1Value = getCellInfo(cell1.toUpperCase());
      const cell2Value = getCellInfo(cell2.toUpperCase());

      const result = calculateResult(cell1Value, operator, cell2Value);

      setCellInfo(targetCell.toUpperCase(), result);

      if (window) window.location.reload();
    } catch (err) {
      const _err = err as Error;
      alert(_err.message);
    } finally {
      setValue('');
    }
  };

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full h-16 bg-green-500 justify-center items-center gap-4">
        <div className="flex flex-col items-end">
          <span className="text-md text-gray-800">Type your formula here</span>
          <span className="text-xs text-gray-700 font-light">
            **only + - * / accepted
          </span>
        </div>
        <input
          className="bg-green-300 px-6 py-2"
          value={value}
          onChange={({ target: { value } }) => setValue(value)}
          placeholder="e.g., A1=A2+A3"
        />
        <button
          className="bg-green-600 px-6 py-2 cursor-pointer hover:bg-green-800 text-white rounded"
          onClick={onSubmit}
        >
          Apply
        </button>
      </div>
    </div>
  );
};
