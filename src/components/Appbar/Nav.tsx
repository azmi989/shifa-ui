import React, { FC, forwardRef } from 'react';
import { getNavProps } from './AppBar.defaults';
import StyledNav from './AppBar.styled';
import { NavProps } from './Appbar.types';

const Nav: FC<NavProps> = forwardRef((props, ref) => {
  const defaultProps = getNavProps(props);
  return <StyledNav ref={ref} {...defaultProps} />;
});

export default Nav;
