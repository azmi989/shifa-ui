import { CSSProperties } from 'react';

export type TransformType = Pick<
  CSSProperties,
  'transform' | 'transformBox' | 'transformOrigin' | 'transformStyle'
>;
