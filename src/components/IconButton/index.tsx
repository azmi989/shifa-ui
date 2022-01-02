import React, { FC } from 'react';
import Ripple from '../Ripple';
import { iconButtonDefaults } from './IconButton.defaults';
import { StyledIconButton } from './IconButton.styled';
import { IconButtonProps } from './IconButton.types';

const IconButton: FC<IconButtonProps> = props => {
  const {
    disableRipple,
    rippleDuration,
    children,
    icon,
    ...defaultProps
  } = iconButtonDefaults(props);
  return (
    <StyledIconButton {...defaultProps}>
      {icon}
      {!disableRipple && (
        <Ripple
          duration={rippleDuration}
          color={defaultProps.backgroundColor || 'primary'}
          borderRadius={defaultProps.rounded}
        />
      )}
      {children}
    </StyledIconButton>
  );
};

export default IconButton;
