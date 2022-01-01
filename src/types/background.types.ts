import { CSSProperties } from "react";
import { Variations } from "../../styled";
import { ColorsType, OpacityType } from "../theme/theme.types";

export type BackgroundType = {
  backgroundColorVarient?: Variations;
  backgroundColor?: ColorsType;
  backgroundColorOpacity?: OpacityType;
} & Pick<
  CSSProperties,
  | "background"
  | "backgroundAttachment"
  | "backgroundBlendMode"
  | "backgroundClip"
  | "backgroundImage"
  | "backgroundOrigin"
  | "backgroundPosition"
  | "backgroundPositionX"
  | "backgroundPositionY"
  | "backgroundRepeat"
  | "backgroundSize"
>;
