import React, { FC } from 'react';
import {
  StyledGeneralLabelProps,
  StyledGeneralLabel,
} from './StyledGeneralLabel.styled';

const GeneralLabel: FC<StyledGeneralLabelProps> = props => {
  return <StyledGeneralLabel {...props} />;
};

export default GeneralLabel;
