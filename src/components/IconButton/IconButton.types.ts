import { ReactNode } from 'react';
import { GutterAndSizeType } from '../../../types';
import { ButtonProps } from '../Button/Button.types';

type RoundedType = 'circle' | 'rectangle';
export type IconButtonProps = {
  rounded?: RoundedType;
  icon?: ReactNode;
} & Omit<ButtonProps, 'fitContainer' | 'pill' | keyof GutterAndSizeType>;
