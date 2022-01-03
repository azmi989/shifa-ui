import { CSSProperties } from 'react';
import { ZIndexType } from '../src/theme/theme.types';

export type InsetType = { zIndex?: ZIndexType } & Pick<
  CSSProperties,
  'inset' | 'position' | 'top' | 'bottom' | 'left' | 'right'
>;
