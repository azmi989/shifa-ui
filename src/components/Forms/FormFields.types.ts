import { InputHTMLAttributes, ReactNode } from 'react';
import { ColorsType } from '../../theme/theme.types';

export type SelectOptionType = {
  id: string | number;
  value: string;
  element?: ReactNode;
};

export type CommonFieldProps = {
  name: string;
  label: string;
  isError?: boolean;
  color?: ColorsType;
  varient?: 'filled' | 'outlined' | 'standard';
  errorMessage?: string;
  disableFloat?: true;
  forceFocus?: boolean;
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

export type PhoneInputFieldProps = Omit<CommonFieldProps, 'type'> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

type OnChange = {
  multiple?: boolean;
  onChange: (value: string | string[]) => void;
};

export type SelectInputFieldProps = {
  options?: SelectOptionType[];
  defaultValue: string;
} & OnChange &
  Omit<CommonFieldProps, 'type' | 'forceFocus'> &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'defaultValue' | 'onChange'
  >;

export type SingleSelectInputFieldProps = {
  onChange: (value: string | string[]) => void;
} & Omit<SelectInputFieldProps, keyof OnChange>;

export type MultipleSelectInputFieldProps = {
  onChange: (value: string[]) => void;
} & Omit<SelectInputFieldProps, keyof OnChange>;
