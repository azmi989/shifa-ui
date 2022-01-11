import styled from 'styled-components';
import {
  StyledBackground,
  StyledBorder,
  StyledElevation,
  StyledFlexGrid,
  StyledGutterAndSize,
} from '../Styles';
import { AppBarProps, NavProps } from './Appbar.types';

export const StyledAppBar = styled.header<AppBarProps>`
  position: ${props =>
    props.sticky && props.direction === 'bottom'
      ? 'fixed'
      : props.sticky
      ? 'sticky'
      : undefined};
  right: ${props => (props.direction === 'bottom' ? '50%' : '0%')};
  left: ${props => (props.direction === 'bottom' ? '50%' : undefined)};
  transform: ${props =>
    props.direction === 'bottom' ? 'translateX(-50%)' : undefined};
  ${props => (props.direction === 'top' ? 'top: 0%;' : 'bottom: 0%;')}
  ${StyledBackground}
  ${StyledBorder}
  ${StyledElevation}
  ${StyledGutterAndSize}
  ${StyledFlexGrid}
`;

const StyledNav = styled.nav<NavProps>`
  ${StyledBackground}
  ${StyledBorder}
  ${StyledElevation}
  ${StyledGutterAndSize}
  ${StyledFlexGrid}
`;
export default StyledNav;
