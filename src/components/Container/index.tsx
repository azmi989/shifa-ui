import React, { FC, forwardRef } from 'react';
import { containerDefaults } from './Container.defaults';
import { StyledContainer } from './Container.styled';
import { ContainerProps } from './Container.types';

export const Container: FC<ContainerProps> = forwardRef((props, ref) => {
  const defaultPrpos = containerDefaults(props);
  return <StyledContainer ref={ref} {...defaultPrpos} />;
});
