import { ColorsType } from '../../theme/theme.types';

export type CommonFieldProps = {
  name: string;
  label: string;
  isError?: boolean;
  color?: ColorsType;
  varient?: 'filled' | 'outlined' | 'standard';
};

export type TextInputFieldProps = CommonFieldProps;
