import styled from 'styled-components'
import CircleProgressSVG, { CircleProgressSVGProps } from './CircleProgressSVG'

const StyledCircleProgressSVG = styled(CircleProgressSVG)<CircleProgressSVGProps>`
transform-origin: center center;
transition: all 100ms ease;
transform: rotate(-90deg);
`

export default StyledCircleProgressSVG