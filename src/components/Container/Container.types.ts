import { HTMLAttributes } from "react";
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
} from "../../types";

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
  | ({ elementType?: "container" } & FlexItemType)
  | ({ elementType?: "item" } & FlexContainerType);
type Grid =
  | ({ elementType?: "container" } & GridItemType)
  | ({ elementType?: "item" } & GridContainerType);
type ElementFlowType =
  | ({ flowType?: "grid" } & Grid)
  | ({ flowType?: "flex" } & Flex);

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
