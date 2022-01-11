import styled, { css } from 'styled-components';
import { DirectionsLR, DirectionsTB } from '../../../types';
import { ContainerProps } from '../Container/Container.types';
import {
  StyledBackground,
  StyledCursor,
  StyledBorder,
  StyledFillAndStroke,
  StyledGutterAndSize,
  StyledInset,
  StyledOverflow,
  StyledElevation,
  StyledFlexContainer,
  StyledGridContainer,
} from '.';
import { CSSProperties } from 'react';
type Props = {
  currentTabID: number;
  tab: number;
  direction: DirectionsTB | DirectionsLR;
} & ContainerProps &
  Pick<CSSProperties, 'display'>;

const StyledSwipableView = styled.div<Props>`
  ${({ currentTabID, direction, tab }) => {
    if (currentTabID === tab) {
      switch (direction) {
        case 'bottom':
          return css`
            transform: translateX(0%);
            transform-origin: center bottom;
          `;
        case 'top':
          return css`
            transform: translateX(0%);
            transform-origin: center top;
          `;
        case 'right':
          return css`
            transform: translateX(0%);
            transform-origin: right center;
          `;
        case 'left':
          return css`
            transform: translateX(0%);
            transform-origin: left center;
          `;
        default:
          return css`
            transform: translateX(0%);
            transform-origin: left center;
          `;
      }
    } else {
      switch (direction) {
        case 'top':
          return css`
            transform: translateY(2000%);
            transform-origin: center bottom;
          `;
        case 'bottom':
          return css`
            transform: translateY(-2000%);
            transform-origin: center top;
          `;
        case 'left':
          return css`
            transform: translateX(2000%);
            transform-origin: right center;
          `;
        case 'right':
          return css`
            transform: translateX(-2000%);
            transform-origin: left center;
          `;
        default:
          return css`
            transform: translateX(2000%);
            transform-origin: left center;
          `;
      }
    }
  }}
  transition: transform 400ms ease;
  display: ${({ display }) => display || 'flex'};
  ${StyledBackground};
  ${StyledCursor};
  ${StyledBorder};
  ${StyledFillAndStroke};
  ${StyledGutterAndSize};
  ${StyledInset};
  ${StyledOverflow};
  ${StyledElevation};
  ${StyledFlexContainer}
  ${StyledGridContainer}
  ${({ transform, transformBox, transformOrigin, transformStyle }) => css`
    transform: ${transform};
    transform-box: ${transformBox};
    transform-origin: ${transformOrigin};
    transform-style: ${transformStyle};
  `};
  ${({
    transition,
    transitionDelay,
    transitionDuration,
    transitionProperty,
    transitionTimingFunction,
  }) => css`
    transition: ${transition};
    transition-delay: ${transitionDelay};
    transition-duration: ${transitionDuration};
    transition-property: ${transitionProperty};
    transition-timing-function: ${transitionTimingFunction};
  `}
`;
export default StyledSwipableView;
