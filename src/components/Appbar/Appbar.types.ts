import { ForwardedRef, HTMLAttributes } from 'react';
import {
  BackgroundType,
  BorderType,
  DirectionsTB,
  FlexContainerType,
  FlexItemType,
  GutterAndSizeType,
} from '../../../types';
import { ElevationProp } from '../../theme/theme.types';

type AppBarAPI = {
  direction?: DirectionsTB;
} & GutterAndSizeType &
  FlexContainerType &
  BackgroundType &
  BorderType &
  ElevationProp;

export type AppBarProps = {
  sticky?: boolean;
  nav?: NavProps;
  ref?: ForwardedRef<HTMLElement>;
} & AppBarAPI &
  HTMLAttributes<HTMLElement>;

type NavAPI = GutterAndSizeType & FlexContainerType & FlexItemType;
export type NavProps = {
  responsive?: NavAPI;
  direction?: DirectionsTB;
  sticky?: boolean;
  ref?: ForwardedRef<HTMLElement>;
} & NavAPI &
  HTMLAttributes<HTMLElement>;
