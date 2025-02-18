export const generateColumns = (size: number) => {
  const labels: string[] = [];
  let row = 0;
  let currentCharCode = 65;

  for (let i = 0; i < size; i++) {
    let label = String.fromCharCode(currentCharCode);

    if (row !== 0) label += row;

    if (currentCharCode === 90) {
      // Z case
      currentCharCode = 65;
      row++;
    } else {
      currentCharCode++;
    }

    labels.push(label);
  }

  return labels;
};
