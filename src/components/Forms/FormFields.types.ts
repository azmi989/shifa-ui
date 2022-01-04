import { InputHTMLAttributes } from 'react';
import { ColorsType } from '../../theme/theme.types';

export type CommonFieldProps = {
  name: string;
  label: string;
  isError?: boolean;
  color?: ColorsType;
  varient?: 'filled' | 'outlined' | 'standard';
  errorMessage?: string;
  disableFloat?: true;
  type?:
    | 'button'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'tel'
    | 'text'
    | 'url';
};

export type TextInputFieldProps = Omit<CommonFieldProps, 'type'> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;
export type NumberInputFieldProps = { value?: number } & Omit<
  CommonFieldProps,
  'type'
> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>;
