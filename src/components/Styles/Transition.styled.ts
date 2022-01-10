import { css } from 'styled-components';
import { TransitionType } from '../../../types';

export const StyledTransition = css<TransitionType>`
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
