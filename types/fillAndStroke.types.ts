import { CSSProperties } from 'react';
import { Variations } from '.';
import { ColorsType, OpacityType } from '../src/theme/theme.types';

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
