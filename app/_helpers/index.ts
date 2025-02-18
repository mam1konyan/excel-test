export const generateColumns = (size: number): string[] => {
  const labels: string[] = [];

  for (let i = 0; i < size; i++) {
    let label = '';
    let num = i;

    while (num >= 0) {
      label = String.fromCharCode(65 + (num % 26)) + label;
      num = Math.floor(num / 26) - 1;
    }

    labels.push(label);
  }

  return labels;
};
