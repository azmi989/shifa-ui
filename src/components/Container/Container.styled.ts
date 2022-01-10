import styled, { css } from 'styled-components';
import { ContainerProps } from './Container.types';
import {
  StyledGridContainer,
  StyledGridItem,
  StyledFlexContainer,
  StyledFlexItem,
  StyledBackground,
  StyledBorder,
  StyledCursor,
  StyledFillAndStroke,
  StyledGutterAndSize,
  StyledInset,
  StyledOverflow,
  StyledText,
  StyledTransform,
  StyledTransition,
  StyledElevation,
} from '../Styles';

export const StyledContainer = styled.div<ContainerProps>`
  ${({ flowType, elementType }) =>
    flowType === 'flex'
      ? elementType === 'container'
        ? css`
            display: flex;
            ${StyledFlexContainer}
          `
        : StyledFlexItem
      : flowType === 'grid'
      ? elementType === 'container'
        ? css`
            display: grid;
            ${StyledGridContainer}
          `
        : StyledGridItem
      : undefined}
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
