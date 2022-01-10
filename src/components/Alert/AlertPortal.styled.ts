import styled, { css } from 'styled-components';
import {
  ToRightAnimation,
  ToLeftAnimation,
  ToBottomAnimation,
  ToTopAnimation,
} from '../../theme/utils/Animation';
import { StyledContainer } from '../Container/Container.styled';
import { AlertPortalProps } from './Alert.types';

export const StyledPortal = styled(StyledContainer)<AlertPortalProps>`
  & > .alertBase {
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-fill-mode: forwards;
  }
  ${({ origin }) => {
    switch (origin) {
      case 'top-right':
        return css`
          top: 1rem;
          right: 1rem;
          & > .alertBase {
            transform-origin: right center;
            animation-name: ${ToRightAnimation};
          }
        `;
      case 'top-left':
        return css`
          top: 1rem;
          left: 1rem;
          & > .alertBase {
            transform-origin: left center;
            animation-name: ${ToLeftAnimation};
          }
        `;
      case 'top':
        return css`
          top: 1rem;
          left: 50%;
          transform: translateX(-50%);
          & > .alertBase {
            transform-origin: center bottom;
            animation-name: ${ToBottomAnimation};
          }
        `;
      case 'bottom-right':
        return css`
          bottom: 1rem;
          right: 1rem;
          & > .alertBase {
            transform-origin: right center;
            animation-name: ${ToRightAnimation};
          }
        `;
      case 'bottom-left':
        return css`
          bottom: 1rem;
          left: 1rem;
          & > .alertBase {
            transform-origin: left center;
            animation-name: ${ToLeftAnimation};
          }
        `;
      case 'bottom':
        return css`
          bottom: 1rem;
          left: 50%;
          transform: translateX(-50%);
          & > .alertBase {
            transform-origin: center top;
            animation-name: ${ToTopAnimation};
          }
        `;
      case 'left':
        return css`
          left: 1rem;
          top: 50%;
          transform: translateY(-50%);
          & > .alertBase {
            transform-origin: left center;
            animation-name: ${ToLeftAnimation};
          }
        `;
      case 'right':
        return css`
          right: 1rem;
          top: 50%;
          transform: translateY(-50%);
          & > .alertBase {
            transform-origin: right center;
            animation-name: ${ToRightAnimation};
          }
        `;
      default:
        return undefined;
    }
  }}
`;
