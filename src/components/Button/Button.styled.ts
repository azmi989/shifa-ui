import styled, { css } from 'styled-components';
import { getColor } from '../../theme/utils';
import { ButtonPulse, Pulse } from '../../theme/utils/Animation';
import {
  StyledCursor,
  StyledElevation,
  StyledGutterAndSize,
  StyledButtonText,
  StyledButtonBackground,
  StyledButtonBorder,
  StyledInset,
  StyledTransform,
  StyledTransition,
} from '../Styles';
import { ButtonProps } from './Button.types';

export const StyledButton = styled.button<ButtonProps>`
  position: relative;
  overflow: hidden;
  & > .icon {
    height: 24px;
    width: 24px;
  }
  ${({ startIcon, endIcon }) =>
    startIcon || endIcon
      ? css`
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          column-gap: 0.5rem;
        `
      : undefined}

  &::before {
    position: absolute;
    content: '';
    top: 0;
    bottom: 0;
    left: 35%;
    right: 35%;
    transform-origin: center;
    border-radius: 50%;
    transform: scale(0);
    background-color: ${({ backgroundColor, varient }) =>
      varient === 'contained'
        ? getColor(backgroundColor, 900, '20%')
        : getColor(backgroundColor, undefined, '20%')};
    ${({ active }) =>
      active &&
      css`
        transform: scale(1);
        animation: ${ButtonPulse} 1500ms ease infinite alternate;
      `}
  }

  ${StyledButtonBackground};
  ${StyledButtonBorder};
  ${StyledCursor};
  ${StyledElevation};
  ${StyledGutterAndSize};
  ${StyledButtonText};
  ${StyledInset};
  ${StyledTransform};
  ${StyledTransition};
`;
