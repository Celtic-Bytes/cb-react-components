import { Variant } from '../../../../shared/shared.model';

/**
 * Define base variant using Variants enum.
 * @example
 * {
 *   primary: string;
 *   secondary: string;
 *   ...
 * }
 */
type BaseVariants = {
  [K in Variant]: string; // example: primary
};

/**
 * Define hover variants using the enum and key remapping with template literals
 * @example
 * {
 * primaryHover: string,
 * secondaryHover: string
 * ...
 * }
 */

type HoverVariants = {
  [K in Variant as `${K}Hover`]: string; // example: primaryHover
};

/**
 * Define variants using the Variant enum.
 * @example
 * {
 * primary: string;
 * primaryHover: string;
 * secondary: string;
 * secondaryHover: string;
 * ...
 * }
 */
export type ThemeVariants = BaseVariants & HoverVariants;
