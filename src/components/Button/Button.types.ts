import { ButtonHTMLAttributes } from 'react';
import { ElevationProp } from '../../theme/theme.types';
import {
  BackgroundType,
  ButtonSizeProps,
  CursorType,
  GutterAndSizeType,
  InsetType,
  TextType,
  TransformType,
  TransitionType,
} from '../../../types';
import { ReactNode } from 'react';

export type ButtonVarientType = 'contained' | 'outlined' | 'base';
export type ButtonProps = {
  varient?: ButtonVarientType;
  fitContainer?: true;
  pill?: true;
  disableRipple?: boolean;
  rippleDuration?: never;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  hover?: boolean;
} & CursorType &
  BackgroundType &
  ElevationProp &
  GutterAndSizeType &
  ButtonSizeProps &
  InsetType &
  TransformType &
  TransitionType &
  TextType &
  ButtonHTMLAttributes<HTMLButtonElement>;
