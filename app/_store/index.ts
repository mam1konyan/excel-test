const isBrowser = typeof window !== 'undefined';

const getStoredData = () => {
  if (!isBrowser) return {};

  const stored = window.localStorage.getItem('store');
  return stored ? JSON.parse(stored) : {};
};

let data = getStoredData();

export const getCellInfo = (cellIndex: string) => data[cellIndex] ?? undefined;

export const setCellInfo = (cellIndex: string, value: string) => {
  data[cellIndex] = value;
  if (isBrowser) window.localStorage.setItem('store', JSON.stringify(data));
};

export const clearStore = () => {
  data = {};
  if (isBrowser) window.localStorage.removeItem('store');
};
