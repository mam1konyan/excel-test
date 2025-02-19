export const parseFormula = (formula: string) => {
  const cleanFormula = formula.replace(/\s+/g, '').toUpperCase();

  // Match pattern: CELL=CELL+CELL or CELL=CELL-CELL etc.
  const formulaRegex = /^([A-Z]+\d+)=([A-Z]+\d+)([\+\-\*\/])([A-Z]+\d+)$/;
  const match = cleanFormula.match(formulaRegex);

  if (!match) {
    throw new Error('Invalid formula format. Use pattern like: A1=A2+A3');
  }

  const [_, targetCell, cell1, operator, cell2] = match;
  return { targetCell, cell1, operator, cell2 };
};

export const calculateResult = (
  cell1Value: string,
  operator: string,
  cell2Value: string,
): string => {
  const num1 = parseFloat(cell1Value);
  const num2 = parseFloat(cell2Value);

  if (isNaN(num1) || isNaN(num2)) {
    throw new Error('One or both cells contain non-numeric values');
  }

  switch (operator) {
    case '+':
      return String(num1 + num2);
    case '-':
      return String(num1 - num2);
    case '*':
      return String(num1 * num2);
    case '/':
      if (num2 === 0) {
        throw new Error('Division by zero');
      }
      return String(num1 / num2);
    default:
      throw new Error('Invalid operator');
  }
};
