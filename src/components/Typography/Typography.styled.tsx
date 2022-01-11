import React, { FC } from 'react';
import styled from 'styled-components';
import TypographyBase from './Base';
import { TypographyComponentType, TypographyProps } from './Typography.types';
import { ThemeTextType } from '../../theme/theme.types';
import { StyledFlexGrid, StyledText } from '../Styles';

const StyledTypographyBase = styled(TypographyBase)<
  TypographyProps<TypographyComponentType>
>`
  ${StyledFlexGrid}
  ${StyledText}
`;

const StyledTypography: FC<TypographyProps<TypographyComponentType>> = ({
  as,
  textProps,
  ...props
}) => {
  const getTextProps = (): ThemeTextType => {
    switch (as) {
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'h4':
        return 'h4';
      case 'h5':
        return 'h5';
      case 'h6':
        return 'h6';
      case 'p':
        return 'body2';
      default:
        return 'body2';
    }
  };
  return (
    <StyledTypographyBase textProps={textProps || getTextProps()} {...props} />
  );
};

export default StyledTypography;
