import { IconButtonProps } from './IconButton.types';

export const iconButtonDefaults = ({
  size = 's',
  varient = 'contained',
  backgroundColor = 'primary',
  transition = 'background 200ms, color 200ms ease',
  type = 'button',
  disableRipple = false,
  rounded = 'circle',
  ...props
}: IconButtonProps): IconButtonProps => {
  return {
    size,
    varient,
    backgroundColor,
    elevation: varient === 'contained' ? 2 : 'none',
    transition,
    disableRipple,
    type,
    rounded,
    position: !disableRipple ? 'relative' : undefined,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    ...props,
  };
};
