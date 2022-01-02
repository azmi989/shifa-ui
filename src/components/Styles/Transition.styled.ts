import { css } from 'styled-components';
import { TransitionType } from '../../../types';

export const StyledTransition = css<TransitionType>`
  transition: ${({ transition }) => transition};
  transition-delay: ${({ transitionDelay }) => transitionDelay};
  transition-duration: ${({ transitionDuration }) => transitionDuration};
  transition-property: ${({ transitionProperty }) => transitionProperty};
  transition-timing-function: ${({ transitionTimingFunction }) =>
    transitionTimingFunction};
`;
