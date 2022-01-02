import styled from 'styled-components';
import { getBorderRadius, getColor } from '../../theme/utils';
import { RippleProps } from '../Ripple/Ripple.types';

export const StyledRipple = styled.div<RippleProps>`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  border-radius: ${({ borderRadius }) => getBorderRadius(borderRadius)};
  span {
    transform: scale(0);
    border-radius: 100%;
    position: absolute;
    opacity: 0.75;
    background-color: ${({ color, buttonVarient }) =>
      buttonVarient === 'contained'
        ? getColor(color, 900)
        : getColor(color, undefined, '50%')};
    animation-name: ripple;
    animation-duration: ${({ duration }) => duration}ms;
  }

  @keyframes ripple {
    to {
      opacity: 0;
      transform: scale(2);
    }
  }
`;
