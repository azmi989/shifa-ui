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
