import styled from 'styled-components';
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
