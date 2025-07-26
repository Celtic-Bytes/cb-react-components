import {
  DangerIcon,
  InfoIcon,
  PrimaryIcon,
  SecondaryIcon,
  SuccessIcon,
  WarningIcon,
} from '@src/icons/icons';
import { Variant } from '@src/models/global/global.model';
import { ReactNode } from 'react';

export const getVariantIcon = (variant: Variant): ReactNode | null => {
  if (variant === 'default') return null;
  return {
    danger: <DangerIcon />,
    info: <InfoIcon />,
    primary: <PrimaryIcon />,
    secondary: <SecondaryIcon />,
    success: <SuccessIcon />,
    warning: <WarningIcon />,
  }[variant];
};
