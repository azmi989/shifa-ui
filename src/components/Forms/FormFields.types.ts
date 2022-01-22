import {
  InputHTMLAttributes,
  MouseEvent,
  ReactNode,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react';
import { CB, OrientationType } from '../../../types';
import { ButtonVarientType } from '../Button/Button.types';

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
  varient?: ButtonVarientType;
  errorMessage?: string;
  disableFloat?: true;
  forceFocus?: boolean;
  renderElement?: ReactNode;
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

export type NumberInputFieldProps = {
  value?: number;
  min?: number;
  max?: number;
  step?: number;
  onIncreaseClicked?: CB<MouseEvent<HTMLButtonElement>, unknown>;
  onDecreaseClicked?: CB<MouseEvent<HTMLButtonElement>, unknown>;
} & Omit<CommonFieldProps, 'type'> &
  Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'type' | 'value' | 'min' | 'max' | 'step'
  >;

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

export type SliderFieldProps = {
  marks?: string[];
  orientation?: OrientationType;
  thickness?: 'small' | 'medium';
  valueLabelDisplay?: boolean;
  vlaue?: number;
  max?: number;
  min?: number;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size' | 'min' | 'max'
> &
  Omit<CommonFieldProps, 'type' | 'color' | 'varient'>;
