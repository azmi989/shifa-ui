import { css } from 'styled-components';
import { getBorderRadius } from '../../theme/utils';
import { getColor } from '../../theme/utils/getColors';
import { IconButtonProps } from '../IconButton/IconButton.types';

export const StyledIconButtonBorder = css<IconButtonProps>`
  border-style: solid;
  border-radius: ${({ rounded }) =>
    rounded === 'circle'
      ? getBorderRadius('circle')
      : getBorderRadius('rectangle')};
  border-width: 1px;
  border-color: ${props =>
    props.varient === 'outlined'
      ? getColor(props.backgroundColor)
      : 'transparent'};
  border-color: ${({ disabled, varient }) =>
    disabled
      ? varient !== 'base'
        ? getColor('paper', 500)
        : undefined
      : undefined};
`;
