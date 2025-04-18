import { FC, HTMLAttributes } from 'react';
import { StoryThemeToggle } from './StoryThemeToggle';

export const StoryToolsContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: '0.7rem',
      }}
    >
      {children}
      <StoryThemeToggle />
    </div>
  );
};
