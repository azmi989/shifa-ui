import styled from 'styled-components';
import TypographyBase from './Base';
import { StyledFlexContainer, StyledText } from '../Styles';
import { TypographyComponentType, TypographyProps } from './Typography.types';

const StyledTypography = styled(TypographyBase)<
  TypographyProps<TypographyComponentType>
>`
  ${StyledFlexContainer}
  ${StyledText}
`;
export default StyledTypography;
StyledTypography.defaultProps = {
  justifyContent: 'center',
  alignItems: 'center',
};
