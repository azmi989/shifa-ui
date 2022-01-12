import styled, { css } from 'styled-components';
import {
  StyledBackground,
  StyledCursor,
  StyledBorder,
  StyledGutterAndSize,
  StyledInset,
  StyledOverflow,
  StyledTransform,
  StyledTransition,
  StyledElevation,
  StyledFlexGrid,
} from '../Styles';
import { ContainerProps } from './Container.types';
export const StyledContainer = styled.div<ContainerProps>`
  ${StyledFlexGrid}
  ${StyledBackground};
  ${StyledCursor};
  ${StyledBorder};
  ${StyledGutterAndSize};
  ${StyledInset};
  ${StyledOverflow};
  ${StyledTransform};
  ${StyledTransition};
  ${StyledElevation}
`;
