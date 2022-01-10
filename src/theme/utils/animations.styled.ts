import { keyframes } from 'styled-components';

export const TabsEnterAnimation = keyframes`
0% {
  transform: translateX(-200%);
}
100% {
  transform: translateX(0%);
}
`;
export const TabsExitAnimation = keyframes`
0% {
  transform: translateX(0%);
}
100% {
  transform: translateX(200%);
}
`;

export const LineProgressAnimation = keyframes`
0%{
  transform: translate(-100%, 0) scale(0.25,1)
}
50%{
  transform: translate(0%, 0) scale(0.05,1);
}
100%{
  transform: translate(100%, 0) scale(0.25,1);
}
`;

export const CircleProgressSVGAnimation = keyframes`
0% {
  transform: rotate(0deg)
}
100% {
  transform: rotate(360deg)
}
`;

export const CarouselInAnimation = keyframes`
0% {
  transform: translateX(-150%)
}
100% {
  transform: translateX(0%)
}
`;
export const CarouselOutAnimation = keyframes`
0% {
  transform: translateX(0%)
}
100% {
  transform: translateX(150%)
}
`;
export const SwitchOnAnimation = keyframes`
0% {
  transform: translateX(0%) scale(0.8)
}
100% {
  transform: translateX(80%) scale(0.8)
}
`;
export const SwitchOffAnimation = keyframes`
0% {
  transform: translateX(80%) scale(0.8)
}
100% {
  transform: translateX(0%) scale(0.8)
}
`;
