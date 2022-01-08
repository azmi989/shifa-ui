import React, { FC } from 'react';
import Ripple from '../Ripple';
import { buttonDefaults } from './Button.defaults';
import { StyledButton } from './Button.styled';
import { ButtonProps } from './Button.types';

const Button: FC<ButtonProps> = props => {
  const {
    disableRipple,
    rippleDuration,
    children,
    startIcon,
    endIcon,
    ...defaultProps
  } = buttonDefaults(props);
  return (
    <StyledButton startIcon={startIcon} endIcon={endIcon} {...defaultProps}>
      {startIcon ? startIcon : null}
      {!disableRipple && (
        <Ripple
          duration={rippleDuration}
          color={defaultProps.backgroundColor || 'primary'}
          borderRadius={defaultProps.pill ? 'lg' : 's'}
        />
      )}
      {children}
      {endIcon ? endIcon : null}
    </StyledButton>
  );
};

export default Button;
