import styled from 'styled-components';
import { StyledFlexGrid, StyledText } from '../Styles';
import { LabelProps } from './Typography.types';

export const StyledLabel = styled.label<LabelProps>`
  ${StyledText}
  ${StyledFlexGrid}
`;
