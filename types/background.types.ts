import { CSSProperties } from 'react';
import { ColorsType, OpacityType } from '../src/theme/theme.types';
import { Variations } from '.';

export type BackgroundType = {
  backgroundColorVarient?: Variations;
  backgroundColor?: ColorsType;
  backgroundColorOpacity?: OpacityType;
  backgroundBlur?: 0 | string;
} & Pick<
  CSSProperties,
  | 'background'
  | 'backgroundAttachment'
  | 'backgroundBlendMode'
  | 'backgroundClip'
  | 'backgroundImage'
  | 'backgroundOrigin'
  | 'backgroundPosition'
  | 'backgroundPositionX'
  | 'backgroundPositionY'
  | 'backgroundRepeat'
  | 'backgroundSize'
>;
