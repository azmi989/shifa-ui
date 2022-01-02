import { ButtonProps } from './Button.types';

export const buttonDefaults = ({
  size = 'md',
  varient = 'contained',
  backgroundColor = 'primary',
  height = 'fit-content',
  transition = 'background 200ms, color 200ms ease',
  type = 'button',
  disableRipple = false,
  ...props
}: ButtonProps): ButtonProps => {
  return {
    size,
    varient,
    backgroundColor,
    elevation: varient === 'contained' ? 2 : 'none',
    transition,
    width: props.fitContainer ? '100%' : 'fit-content',
    height,
    disableRipple,
    type,
    position: !disableRipple ? 'relative' : undefined,
    padding:
      size === 'xs'
        ? '0.25rem 0.5rem'
        : size === 's'
        ? '0.5rem 0.75rem'
        : size === 'md'
        ? '0.75rem 1rem'
        : size === 'lg'
        ? '1rem 1.25rem'
        : size === 'xl'
        ? '1.25rem 1.5rem'
        : undefined,
    cursor: props.disabled ? 'not-allowed' : 'pointer',
    ...props,
  };
};
