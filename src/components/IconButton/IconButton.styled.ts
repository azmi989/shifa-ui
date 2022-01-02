import styled, { css } from 'styled-components';
import { getColor } from '../../theme/utils';
import {
  StyledCursor,
  StyledElevation,
  StyledButtonBackground,
  StyledInset,
  StyledTransform,
  StyledTransition,
  StyledIconButtonBorder,
} from '../Styles';
import { IconButtonProps } from './IconButton.types';

export const StyledIconButton = styled.button<IconButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${StyledButtonBackground};
  ${StyledIconButtonBorder};
  ${StyledCursor};
  ${StyledElevation};
  ${StyledInset};
  ${StyledTransform};
  ${StyledTransition};
  & > .icon {
    height: ${({ size }) =>
      size === 'md'
        ? '20px'
        : size === 'lg'
        ? '22px'
        : size === 'xl'
        ? '24px'
        : undefined};
    width: ${({ size }) =>
      size === 'md'
        ? '20px'
        : size === 'lg'
        ? '22px'
        : size === 'xl'
        ? '24px'
        : undefined};
    fill: ${({ varient, backgroundColor }) =>
      varient === 'contained' ? getColor('white') : getColor(backgroundColor)};
    fill: ${({ disabled, varient }) =>
      disabled
        ? varient !== 'contained'
          ? getColor('paper', 800)
          : getColor('white')
        : undefined};
  }
  ${({ size }) => {
    switch (size) {
      case 'xs':
        return css`
          width: 1.25rem;
          height: 1.25rem;
        `;
      case 's':
        return css`
          width: 1.5rem;
          height: 1.5rem;
        `;
      case 'md':
        return css`
          width: 1.75rem;
          height: 1.75rem;
        `;
      case 'lg':
        return css`
          width: 2rem;
          height: 2rem;
        `;
      case 'xl':
        return css`
          width: 2.25rem;
          height: 2.25rem;
        `;
      default:
        return undefined;
    }
  }}
`;
