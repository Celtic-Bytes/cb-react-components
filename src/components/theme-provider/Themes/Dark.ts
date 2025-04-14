import { Theme } from '../models/ThemeProviders.model';

export const darkDefaultTheme: Theme = {
  key: 'default-dark-theme',
  name: 'Dark theme',
  type: 'dark',
  config: {
    button: {
      borderRadius: '0.3em',
      borderWidth: '0.1em',
    },
    core: {
      accentColor: 'rgb(212, 120, 0)', // Slightly brighter orange
      accentColorHover: 'rgb(179, 101, 0)', // A
      backgroundColor: 'rgb(53, 53, 53)',
      borderRadius: '0.3em',
      color: 'rgb(255, 255, 255)',
      gray: 'rgb(108, 117, 125)',
    },
    variants: {
      primary: 'rgb(51, 153, 255)', // Lighter Blue
      primaryHover: 'rgb(20, 138, 255)', // Adjusted Hover
      secondary: 'rgb(170, 74, 255)', // Lighter Purple
      secondaryHover: 'rgb(150, 50, 235)', // Adjusted Hover
      success: 'rgb(34, 197, 94)', // Lighter Green
      successHover: 'rgb(22, 163, 74)', // Adjusted Hover
      danger: 'rgb(239, 68, 68)', // Slightly Lighter Red
      dangerHover: 'rgb(220, 38, 38)', // Adjusted Hover
      warning: 'rgb(245, 158, 11)', // Slightly Lighter Orange/Yellow
      warningHover: 'rgb(217, 119, 6)', // Adjusted Hover
      info: 'rgb(223, 208, 0)', // Changed to a lighter info blue
      infoHover: 'rgb(209, 195, 0)', // Adjusted Hover
    },
  },
};
