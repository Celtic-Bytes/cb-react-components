import { useTheme } from '@src/components/theme-provider/useTheme';
import { FC, HTMLAttributes } from 'react';

export const StoryThemeToggle: FC<HTMLAttributes<HTMLButtonElement>> = () => {
  const { switchThemeByIndex, currentThemeIndex } = useTheme();

  const toggleTheme = () => {
    const newIndex = currentThemeIndex === 0 ? 1 : 0;
    switchThemeByIndex(newIndex);
  };

  return (
    <button onClick={toggleTheme}>
      {currentThemeIndex === 0 ? 'Switch to Light' : 'Switch to Dark'}
    </button>
  );
};
