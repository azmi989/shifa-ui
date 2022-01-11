import styled, { css } from 'styled-components';
import {
  StyledBackground,
  StyledCursor,
  StyledBorder,
  StyledFillAndStroke,
  StyledGutterAndSize,
  StyledInset,
  StyledOverflow,
  StyledText,
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
  ${StyledFillAndStroke};
  ${StyledGutterAndSize};
  ${StyledInset};
  ${StyledOverflow};
  ${StyledText};
  ${StyledTransform};
  ${StyledTransition};
  ${StyledElevation}
`;
