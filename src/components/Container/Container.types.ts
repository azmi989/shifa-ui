import { ForwardedRef, HTMLAttributes } from 'react';
import {
  BackgroundType,
  BorderType,
  CursorType,
  FlexContainerType,
  FlexItemType,
  GridContainerType,
  GridItemType,
  GutterAndSizeType,
  InsetType,
  OverFlowType,
  TransformType,
  TransitionType,
} from '../../../types';
import { ElevationProp } from '../../theme/theme.types';

type Flex =
  | ({ elementType?: 'item' } & FlexItemType)
  | ({ elementType?: 'container' } & FlexContainerType);
type Grid =
  | ({ elementType?: 'item' } & GridItemType)
  | ({ elementType?: 'container' } & GridContainerType);
type ElementFlowType =
  | ({ flowType?: 'grid' } & Grid)
  | ({ flowType?: 'flex' } & Flex);
export type ContainerProps = {
  ref?: ForwardedRef<HTMLDivElement>;
  fillContainer?: boolean;
} & ElementFlowType &
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
