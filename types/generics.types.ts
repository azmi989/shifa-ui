import { Dispatch, SetStateAction } from "react";

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
export type SeverityType = "error" | "warning" | "info" | "success" 
export type CircleRecType = "circle" | "rectangle";
export type DirectionsTB = "top" | "bottom";
export type DirectionsLR = "left" | "right";
export type DirectionType =
  | `${DirectionsTB}-${DirectionsLR}`
  |  DirectionsLR | DirectionsTB;

export type ButtonSizeProps = {
  size?: "xs" | "s" | "md" | "lg" | "xl";
};

export type Variations = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type Elevation =
  | 'none'
  | 1
  | 2
  | 3
  | 4
  | 5
  | 6
  | 7
  | 8
  | 9
  | 10
  | 11
  | 12
  | 13
  | 14
  | 15
  | 16
  | 17
  | 18
  | 19
  | 20
  | 21
  | 22
  | 23
  | 24;
export type Colors = Record<
  string,
  { main: string; variations?: Record<Variations, string> }
>;
// | Record<string, string>;
export type Opacity =
  | '0%'
  | '5%'
  | '10%'
  | '20%'
  | '30%'
  | '40%'
  | '50%'
  | '60%'
  | '70%'
  | '80%'
  | '90%'
  | '100%';
export type Screens = 'sm' | 'md' | 'lg' | 'xl' | '2xl';
export type WithOpenState = {
  open:boolean
  setOpen:Dispatch<SetStateAction<boolean>>
}