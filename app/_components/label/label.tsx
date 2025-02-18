import type { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  bulk?: boolean;
}

export const Label = ({ children, bulk }: Props) => {
  return (
    <div
      className={`flex w-18 h-6 border-r-1 border-b-1 border-gray-300 flex-shrink-0 justify-center items-center bg-${bulk ? 'transparent' : 'gray-600'}`}
    >
      {bulk ? null : children}
    </div>
  );
};
