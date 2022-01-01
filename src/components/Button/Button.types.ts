import { ButtonHTMLAttributes } from 'react';
import { ElevationProp } from '../../theme/theme.types';
import {
  BackgroundType,
  ButtonSizeProps,
  CursorType,
  GutterAndSizeType,
  InsetType,
  TransformType,
  TransitionType,
} from '../../types';

type Ripple =
  | {
      ripple?: true;
      rippleDuration?: number;
    }
  | {
      ripple?: never;
      rippleDuration?: never;
    };
export type ButtonVarientType = 'contained' | 'outlined' | 'base';
export type ButtonProps = {
  varient?: ButtonVarientType;
  fitContainer?: true;
  pill?: true;
  disableRipple?: boolean;
} & Omit<Ripple, 'ripple'> &
  CursorType &
  BackgroundType &
  ElevationProp &
  GutterAndSizeType &
  ButtonSizeProps &
  InsetType &
  TransformType &
  TransitionType &
  ButtonHTMLAttributes<HTMLButtonElement>;
