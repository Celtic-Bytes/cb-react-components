// -------------- TOAST ITEM----------------------------
import {
  BackgroundVariant,
  Sizes,
  Variant,
} from '@src/models/global/Global.model';

export interface Toast {
  id: string;
  message: string;
  title?: string;
  variant?: Variant;
  backgroundVariant?: BackgroundVariant;
  icon?: React.ReactNode;
  duration?: number;
  persistant?: boolean;
  showIcon?: boolean;
  showProgressBar?: boolean;
  size?: Sizes;
  onClose?: (id: string) => void;
}
