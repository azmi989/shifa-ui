export type FontUnitsType =
  | `${number}px`
  | `${number}em`
  | `${number}ex`
  | `${number}ch`
  | `${number}rem`;
type Units =
  | FontUnitsType
  | `${number}vmin`
  | `${number}vmax`
  | `${number}%`
  | `calc(${number | string})`
  | "max-content"
  | "min-content";

type UnitsWithFunc =
  | `minmax(${Units}, ${Units})`
  | `max(${Units}, ${Units})`
  | `max(${Units}, ${Units})`;

export type WidthUnitsType = UnitsWithFunc | `${number}vw`;
export type HeightUnitsType = UnitsWithFunc | `${number}vh`;
export type UnitsType =
  | WidthUnitsType
  | HeightUnitsType
  | "auto"
  | `${number}fr`;

type OriginXType = "left" | "center" | "right";
type OriginYType = "top" | "center" | "bottom";

export type TransformOrigin =
  | `${OriginXType} ${OriginYType} ${`${UnitsType | "initial" | "inherit"}`}`
  | `${OriginXType} ${OriginYType}`;
export type SeverityType = "error" | "warning" | "info" | "success" | "paper";
export type CircleRecType = "circle" | "rectangle";
export type DirectionsTB = "top" | "bottom";
export type DirectionsLR = "left" | "right";
export type DirectionType = DirectionsLR | DirectionsTB;
export type AlertDirectionType =
  | `${DirectionsTB}-${DirectionsLR}`
  | DirectionType;

export type ButtonSizeProps = {
  size?: "xs" | "s" | "md" | "lg" | "xl";
};
