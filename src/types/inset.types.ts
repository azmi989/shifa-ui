import { CSSProperties } from 'react';

export type InsetType = Pick<
  CSSProperties,
  'inset' | 'position' | 'top' | 'bottom' | 'left' | 'right' | 'zIndex'
>;
