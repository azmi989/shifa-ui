import { ForwardedRef, ComponentProps } from 'react';
import { BorderType } from '../../../types';
import { ColorsType } from '../../theme/theme.types';

export type DividerProps = {
  direction?: 'x' | 'y';
  varient?: 'dashed' | 'dotted' | 'solid' | 'rounded';
  color?: ColorsType;
  ref?: ForwardedRef<HTMLHRElement>;
} & BorderType &
  Omit<ComponentProps<'hr'>, 'ref' | 'color'>;
