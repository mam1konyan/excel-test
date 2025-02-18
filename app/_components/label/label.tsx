import type { CSSProperties, ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export const Label = ({ children, style, className = '' }: Props) => {
  return (
    <div
      style={style}
      className={`flex w-36 h-12 border-r-1 border-b-1 border-gray-300 flex-shrink-0 justify-center items-center bg-gray-600 ${className}`}
    >
      {children}
    </div>
  );
};
