import {
  InputHTMLAttributes,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { ColorsType } from '../../theme/theme.types';

export type SelectOptionType = {
  id: string | number;
  value: string;
  element?: ReactNode;
  extraArgs?: string;
};

export type CheckBoxRadioOptionsType = {
  id: string | number;
  text?: string;
  value: string | number;
}[];

export type CommonFieldProps = {
  name: string;
  label: string;
  isError?: boolean;
  color?: ColorsType;
  varient?: 'filled' | 'outlined' | 'standard';
  errorMessage?: string;
  disableFloat?: true;
  forceFocus?: boolean;
};

export type CheckBoxProps = { onClick?: () => void } & CommonFieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onClick'>;

export type CheckBoxGroupProps = {
  options: CheckBoxRadioOptionsType;
  onChange: (values: string[]) => void;
  labelMargin?: string;
} & CommonFieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'>;

export type RadioGroupProps = {
  onChange: (values?: string | number | readonly string[]) => void;
  labelMargin?: string;
} & Omit<CheckBoxGroupProps, 'onChange'>;

export type TextInputFieldProps = {
  type?: 'email' | 'password' | 'search' | 'text' | 'url';
} & CommonFieldProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type'>;

export type TextAreaFieldProps = CommonFieldProps &
  TextareaHTMLAttributes<HTMLTextAreaElement>;

export type NumberInputFieldProps = { value?: number } & Omit<
  CommonFieldProps,
  'type'
> &
  Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value'>;

export type PhoneInputFieldProps = {
  onChange: (phone: string) => void;
} & Omit<CommonFieldProps, 'type'>;

// type OnChange = {
//   multiple?: boolean;
//   onChange: (value: string | string[]) => void;
// };

export type SelectFieldProps = {
  options?: SelectOptionType[];
} & SelectHTMLAttributes<HTMLSelectElement> &
  Omit<CommonFieldProps, 'type' | 'color'>;

export type FileFieldProps = {
  onChange: (file: string | ArrayBuffer) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'value' | 'onChange'> &
  Omit<CommonFieldProps, 'type' | 'color'>;

export type ImageFieldProps = {
  srcImg?: string;
  onChange: (image: string) => void;
} & Omit<FileFieldProps, 'onChange'>;
