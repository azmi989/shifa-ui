import { css } from 'styled-components';
import { getColor } from '../../theme/utils/getColors';
import { getTextProps } from '../../theme/utils';
import { ButtonProps } from '../Button/Button.types';

export const StyledButtonText = css<ButtonProps>`
  letter-spacing: ${({ size }) =>
    size === 'xs' || size === 's'
      ? getTextProps('button2').letterSpacing
      : getTextProps('button1').letterSpacing};
  font-weight: ${({ size }) =>
    size === 'xs' || size === 's'
      ? getTextProps('button2').weight
      : getTextProps('button1').weight};
  font-size: ${({ size }) =>
    size === 'xs' || size === 's'
      ? getTextProps('button3').size
      : size === 'xl'
      ? getTextProps('button1').size
      : getTextProps('button2').size};
  color: ${({ varient, backgroundColor }) =>
    varient === 'contained' ? getColor('white') : getColor(backgroundColor)};
  color: ${({ disabled, varient }) =>
    disabled
      ? varient !== 'contained'
        ? getColor('paper', 800)
        : getColor('white')
      : undefined};
`;
