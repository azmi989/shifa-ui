import { ForwardedRef, HTMLAttributes } from 'react';
import {
  BackgroundType,
  BorderType,
  CursorType,
  FlexGridType,
  GutterAndSizeType,
  InsetType,
  OverFlowType,
  TransformType,
  TransitionType,
} from '../../../types';
import { ElevationProp } from '../../theme/theme.types';

export type ContainerProps = {
  ref?: ForwardedRef<HTMLDivElement>;
  fillContainer?: boolean;
  fitContent?: boolean;
  disableGutter?: boolean;
} & FlexGridType &
  BackgroundType &
  BorderType &
  CursorType &
  GutterAndSizeType &
  InsetType &
  OverFlowType &
  TransformType &
  TransitionType &
  ElevationProp &
  HTMLAttributes<HTMLDivElement>;
