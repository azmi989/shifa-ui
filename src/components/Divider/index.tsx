import React, { FC, forwardRef } from 'react';
import getDividerProps from './devider.defaults';
import StyledDivider from './Divider.styled';
import { DividerProps } from './Divider.types';

export const Divider: FC<DividerProps> = forwardRef((props, ref) => {
  const defaultProps = getDividerProps(props);
  return <StyledDivider ref={ref} {...defaultProps} />;
});
