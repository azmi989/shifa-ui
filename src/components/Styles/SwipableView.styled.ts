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
            position: fixed;
          `;
        case 'bottom':
          return css`
            transform: translateY(-2000%);
            transform-origin: center top;
            position: fixed;
          `;
        case 'left':
          return css`
            transform: translateX(2000%);
            transform-origin: right center;
            position: fixed;
          `;
        case 'right':
          return css`
            transform: translateX(-2000%);
            transform-origin: left center;
            position: fixed;
          `;
        default:
          return css`
            transform: translateX(2000%);
            transform-origin: left center;
            position: fixed;
          `;
      }
    }
  }}
  height:100%;
  width: 100%;
  transition: transform 400ms ease;
`;
export default StyledSwipableView;
