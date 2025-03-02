import { FC, HTMLAttributes } from 'react';
import './MenuBar.css';

export interface MenuBarProps extends HTMLAttributes<HTMLDivElement> {
  direction: 'horizontal' | 'vertical';
  reverse: boolean;
  wrap: boolean;
}

export const MenuBar: FC<MenuBarProps> = ({
  children,
  direction = 'horizontal',
  reverse = false,
  wrap = true,
  ...props
}) => {
  return <div {...props}>{children}</div>;
};
