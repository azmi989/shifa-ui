import { BorderRadiusType, ColorsType } from '../../theme/theme.types';
import { ButtonVarientType } from '../Button/Button.types';

export type RippleProps = {
  color: ColorsType;
  duration?: number;
  buttonVarient?: ButtonVarientType;
  borderRadius?: BorderRadiusType;
};
