import { HTMLAttributes } from 'react';
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
  TransitionType,
} from '../../../types';

type Container = BackgroundType &
  BorderType &
  CursorType &
  GutterAndSizeType &
  InsetType &
  OverFlowType &
  TransitionType &
  TransitionType &
  HTMLAttributes<HTMLDivElement>;

type Flex =
  | ({ elementType?: 'item' } & FlexItemType)
  | ({ elementType?: 'container' } & FlexContainerType);
type Grid =
  | ({ elementType?: 'item' } & GridItemType)
  | ({ elementType?: 'container' } & GridContainerType);
type ElementFlowType =
  | ({ flowType?: 'grid' } & Grid)
  | ({ flowType?: 'flex' } & Flex);
export type ContainerProps = ElementFlowType &
  BackgroundType &
  BorderType &
  CursorType &
  GutterAndSizeType &
  InsetType &
  OverFlowType &
  TransitionType &
  TransitionType &
  HTMLAttributes<HTMLDivElement>;
