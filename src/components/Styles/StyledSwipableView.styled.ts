import styled, { css } from 'styled-components';
import { DirectionsLR, DirectionsTB } from '../../../types';
import { ContainerProps } from '../Container/Container.types';
import {
  ToBottomAnimation,
  ToLeftAnimation,
  ToRightAnimation,
  ToTopAnimation,
} from '../../theme/utils/Animation';
import {
  StyledBackground,
  StyledCursor,
  StyledBorder,
  StyledFillAndStroke,
  StyledGutterAndSize,
  StyledInset,
  StyledOverflow,
  StyledElevation,
} from '.';

type Props = {
  currentTabID: number;
  tab: number;
  direction: DirectionsTB | DirectionsLR;
} & ContainerProps;

const StyledSwipableView = styled.div<Props>`
  ${({ currentTabID, direction, tab }) => {
    if (currentTabID === tab) {
      switch (direction) {
        case 'bottom':
          return css`
            animation-name: ${ToTopAnimation};
            transform-origin: center bottom;
          `;
        case 'top':
          return css`
            animation-name: ${ToBottomAnimation};
            transform-origin: center top;
          `;
        case 'right':
          return css`
            animation-name: ${ToLeftAnimation};
            transform-origin: right center;
          `;
        case 'left':
          return css`
            animation-name: ${ToRightAnimation};
            transform-origin: left center;
          `;
        default:
          return css`
            animation-name: ${ToLeftAnimation};
            transform-origin: right center;
          `;
      }
    } else {
      switch (direction) {
        case 'top':
          return css`
            animation-name: ${ToTopAnimation};
            transform-origin: center bottom;
          `;
        case 'bottom':
          return css`
            animation-name: ${ToBottomAnimation};
            transform-origin: center top;
          `;
        case 'left':
          return css`
            animation-name: ${ToLeftAnimation};
            transform-origin: right center;
          `;
        case 'right':
          return css`
            animation-name: ${ToRightAnimation};
            transform-origin: left center;
          `;
        default:
          return css`
            animation-name: ${ToRightAnimation};
            transform-origin: left center;
          `;
      }
    }
  }}
  animation-duration: 200ms;
  animation-fill-mode: forwards;
  animation-direction: normal;
  ${StyledBackground};
  ${StyledCursor};
  ${StyledBorder};
  ${StyledFillAndStroke};
  ${StyledGutterAndSize};
  ${StyledInset};
  ${StyledOverflow};
  ${StyledElevation};
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
