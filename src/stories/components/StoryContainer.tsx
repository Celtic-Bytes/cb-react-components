import { ThemeProvider } from '@src/components/theme-provider/ThemeProvider';
import { FC, HTMLAttributes } from 'react';

export const StoryContainer: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
}) => {
  return (
    <ThemeProvider>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.7rem',
          justifyContent: 'center',
          minHeight: '100px',
          minWidth: '600px',
          padding: '5px',
        }}
      >
        {children}
      </div>
    </ThemeProvider>
  );
};
