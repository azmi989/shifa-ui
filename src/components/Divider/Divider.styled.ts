import styled from 'styled-components';
import { StyledBorder } from '../Styles';
import { DividerProps } from './Divider.types';

const StyledDivider = styled.hr<DividerProps>`
${StyledBorder}
  transform: ${props =>
    props.direction === 'y' ? `rotate(90deg)` : undefined};
  width: 100%;
`;

export default StyledDivider;
