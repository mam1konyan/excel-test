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
      className={`flex w-18 h-6 border-r-1 border-b-1 border-white text-xs flex-shrink-0 justify-center items-center bg-green-400 cursor-default ${className}`}
    >
      {children}
    </div>
  );
};
