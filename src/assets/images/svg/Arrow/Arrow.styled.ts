import styled from 'styled-components';
import {
  StyledInset,
  StyledTransform,
  StyledTransition,
} from '../../../../components/Styles';
import ArrowBase, { ArrowProps } from './ArrowBase';

export const StyledArrow = styled(ArrowBase)<ArrowProps>`
  ${StyledInset}
  ${StyledTransform}
  ${StyledTransition}
`;
