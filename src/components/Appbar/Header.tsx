import React, { FC, forwardRef } from 'react';
import { getAppBarProps } from './AppBar.defaults';
import { StyledAppBar } from './AppBar.styled';
import { AppBarProps } from './Appbar.types';
import Nav from './Nav';

const Header: FC<AppBarProps> = forwardRef(({ children, ...props }, ref) => {
  const { nav, ...defaultProps } = getAppBarProps(props);
  return (
    <StyledAppBar ref={ref} {...defaultProps}>
      <Nav
        minHeight={defaultProps.minHeight}
        width={defaultProps.width}
        {...nav}
        children={children}
      />
    </StyledAppBar>
  );
});

export default Header;
