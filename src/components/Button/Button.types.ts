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
} from '../../../types';

export type ButtonVarientType = 'contained' | 'outlined' | 'base';
export type ButtonProps = {
  varient?: ButtonVarientType;
  fitContainer?: true;
  pill?: true;
  disableRipple?: boolean;
  rippleDuration?: never;
} & CursorType &
  BackgroundType &
  ElevationProp &
  GutterAndSizeType &
  ButtonSizeProps &
  InsetType &
  TransformType &
  TransitionType &
  ButtonHTMLAttributes<HTMLButtonElement>;
