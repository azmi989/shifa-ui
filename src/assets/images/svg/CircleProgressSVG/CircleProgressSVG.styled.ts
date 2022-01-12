import styled from 'styled-components';
import CircleProgressSVG, { CircleProgressSVGProps } from './CircleProgressSVG';
type Props = CircleProgressSVGProps;
const StyledCircleProgressSVG = styled(CircleProgressSVG)<Props>`
  transform-origin: center center;
  transition: all 100ms ease;
  transform: rotate(-90deg);
`;

export default StyledCircleProgressSVG;
