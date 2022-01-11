import { keyframes } from 'styled-components';

export const ToRightAnimation = keyframes`
from {
  transform: translateX(200%)
}
to {
  transform: translateX(0%)
}
`;
export const ToLeftAnimation = keyframes`
from {
  transform: translateX(-200%)
}
to {
  transform: translateX(0%)
}
`;
export const ToTopAnimation = keyframes`
from {
  transform: translateY(200%)
}
to {
  transform: translateY(0%)
}
`;
export const ToBottomAnimation = keyframes`
from {
  transform: translateY(-200%)
}
to {
  transform: translateY(0%)
}
`;

export const FromRightToZeroAnimation = keyframes`
from {
  transform: translateX(2000%)
}
to {
  transform: translateX(0%)
}
`;
export const FromLeftToZeroAnimation = keyframes`
from {
  transform: translateX(-2000%)
}
to {
  transform: translateX(0%)
}
`;
export const FromZeroToRightAnimation = keyframes`
  from {
    transform: translateX(0%)
  }
to {
  transform: translateX(2000%)
}
`;
export const FromZeroToLeftAnimation = keyframes`
to {
  transform: translateX(0%)
}
from {
  transform: translateX(-2000%)
}
`;
export const FromBottomToZeroAnimation = keyframes`
from {
  transform: translateY(2000%)
}
to {
  transform: translateY(0%)
}
`;
export const FromTopToZeroAnimation = keyframes`
from {
  transform: translateY(-2000%)
}
to {
  transform: translateY(0%)
}
`;
export const FromZeroToBottomAnimation = keyframes`
from {
  transform: translateY(0%)
}
to {
  transform: translateY(2000%)
}
`;
export const FromZeroToTopAnimation = keyframes`
from {
  transform: translateY(0%)
}
to {
  transform: translateY(-2000%)
}
`;
