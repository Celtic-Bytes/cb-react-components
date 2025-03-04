import { FC, HTMLAttributes, RefAttributes } from 'react';

export interface StackProps extends HTMLAttributes<HTMLDivElement> {
  ref: RefAttributes<HTMLDivElement>['ref'];
}

const styleDefault: HTMLAttributes<HTMLDivElement>['style'] = {
  alignContent: 'flex-start',
  alignItems: 'flex-start',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'nowrap',
  gap: '0.5rem',
  justifyContent: 'flex-start',
  maxHeight: 'none',
  maxWidth: 'none',
};

/**
 * Customizable flex container. Usefull to create a menu bar or other flex elements.
 */
export const Stack: FC<StackProps> = ({ children, ref, ...props }) => {
  return (
    <div {...props} style={{ ...styleDefault, ...props.style }} ref={ref}>
      {children}
    </div>
  );
};
