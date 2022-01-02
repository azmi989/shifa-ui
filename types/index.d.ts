/// <reference types="react" />
/// <reference types="react-dom" />
/// <reference types="styled-components" />

export type { BackgroundType } from "./background.types";
export type { BorderType } from "./border.types";
export type { CursorType } from "./cursor.types";
export type { DisplayType } from "./displayNoGridAndFlex.types";
export type { FillAndStrokeType } from "./fillAndStroke.types";
export type { FlexItemType, FlexContainerType } from "./flex.types";
export type {
  FontUnitsType,
  HeightUnitsType,
  UnitsType,
  WidthUnitsType,
  ButtonSizeProps,
  CircleRecType,
  DirectionType,
  DirectionsLR,
  DirectionsTB,
  SeverityType,
  TransformOrigin,
  Screens,
  Variations,
  Colors,
  Elevation,
  Opacity,
  WithOpenState
} from "./generics.types";
export type { GridContainerType, GridItemType } from "./grid.types";
export type { GutterAndSizeType } from "./gutterAndSize.types";
export type { InsetType } from "./inset.types";
export type { OverFlowType } from "./overflow.types";
export type { TextType } from "./text.types";
export type { TransformType } from "./transform.types";
export type { TransitionType } from "./transition.types";
import 'styled-components';
import { BorderWidthType } from './src/theme/theme.types';
import {
  Colors,
  Elevation,
  Opacity,
  Screens,
} from './types/utils/generics.types';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors;
    borderRadius: Record<string, string>;
    borderWidth: BorderWidthType;
    elevation: Record<Elevation, string>;
    opacity: Record<Opacity, string>;
    screens: Record<Screens, string>;
    zIndex: Record<string | number, number>;
    rootFontSize: number;
    rootScreenMaxWidth: Screens;
    themeResponsiveScreen: Screens;
  }
}