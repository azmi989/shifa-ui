import React, { FC } from 'react';
import { StyledLabel } from './Label.styled';
import { defaultLabelProps } from './Typography.defaults';
import { LabelProps } from './Typography.types';

const Label: FC<LabelProps> = props => {
  const defaultProps = defaultLabelProps(props);
  return <StyledLabel {...defaultProps} />;
};

export default Label;
