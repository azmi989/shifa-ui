import { AppBarProps, NavProps } from './Appbar.types';

export const getAppBarProps = ({
  background,
  direction = 'top',
  backgroundColor = 'primary',
  padding = '0rem 1rem',
  borderRadius = 's',
  elevation = 2,
  minHeight = '3rem',
  flexDirection = 'row',
  justifyContent = 'center',
  alignItems = 'center',
  ...props
}: AppBarProps): AppBarProps => ({
  backgroundColor,
  direction,
  padding,
  borderRadius,
  elevation,
  minHeight,
  flexDirection,
  justifyContent,
  alignItems,
  width: direction === 'bottom' ? '98%' : '100%',
  ...props,
});

export const getNavProps = (props: NavProps): NavProps => ({
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  ...props,
});
