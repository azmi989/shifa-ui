import { CSSProperties } from 'react';
import { ColorsType, OpacityType } from '../theme/theme.types';
import { Variations } from './generics.types';

export type FillAndStrokeType = {
  fill?: ColorsType;
  fillVarient?: Variations;
  fillOpacity?: OpacityType;
  stroke?: ColorsType;
  strokeVarient?: Variations;
  strokeOpacity?: OpacityType;
} & Pick<
  CSSProperties,
  | 'fillRule'
  | 'strokeDasharray'
  | 'strokeDashoffset'
  | 'strokeLinecap'
  | 'strokeLinejoin'
  | 'strokeMiterlimit'
  | 'strokeWidth'
>;
