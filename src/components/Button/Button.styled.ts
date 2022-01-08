import styled, { css } from 'styled-components';
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
