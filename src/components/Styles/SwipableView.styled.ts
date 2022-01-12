import styled, { css } from 'styled-components';
import { DirectionsLR, DirectionsTB } from '../../../types';
type Props = {
  currentTabID: number;
  tab: number;
  direction: DirectionsTB | DirectionsLR;
};

const StyledSwipableView = styled.div<Props>`
  ${({ currentTabID, direction, tab }) => {
    if (currentTabID === tab) {
      switch (direction) {
        case 'top':
          return css`
            transform: translateY(0%);
            transition-delay: 200ms;
            transform-origin: center top;
          `;
        case 'bottom':
          return css`
            transform: translateY(0%);
            transition-delay: 200ms;
            transform-origin: center bottom;
          `;
        case 'right':
          return css`
            transform: translateX(0%);
            transition-delay: 200ms;
            transform-origin: right center;
          `;
        case 'left':
          return css`
            transform: translateX(0%);
            transition-delay: 200ms;
            transform-origin: left center;
          `;
        default:
          return css`
            transform: translateX(0%);
            transition-delay: 200ms;
            transform-origin: left center;
          `;
      }
    } else {
      switch (direction) {
        case 'top':
          return css`
            transform: translateY(-2000%);
            transform-origin: center top;
            position: absolute;
            /* bottom: 1000%; */
          `;
        case 'bottom':
          return css`
            transform: translateY(2000%);
            transform-origin: center bottom;
            position: absolute;
            /* bottom: 1000%; */
          `;
        case 'left':
          return css`
            transform: translateX(-2000%);
            transform-origin: left center;
            position: absolute;
            /* bottom: 1000%; */
          `;
        case 'right':
          return css`
            transform: translateX(2000%);
            transform-origin: right center;
            position: absolute;
            /* bottom: 1000%; */
          `;
        default:
          return css`
            transform: translateX(-2000%);
            transform-origin: left center;
            position: absolute;
            /* bottom: 1000%; */
          `;
      }
    }
  }}
  height:100%;
  width: 100%;
  transition: transform 200ms ease;
`;
export default StyledSwipableView;
