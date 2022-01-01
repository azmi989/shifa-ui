import "styled-components";
import { BorderWidthType } from "./src/theme/theme.types";
interface IPalette {
  main: string;
  contrastText: string;
}
export type Variations = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export type Elevation =
  | "none"
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
type Colors = Record<
  string,
  { main: string; variations?: Record<Variations, string> }
>;
// | Record<string, string>;
export type Opacity =
  | "0%"
  | "5%"
  | "10%"
  | "20%"
  | "30%"
  | "40%"
  | "50%"
  | "60%"
  | "70%"
  | "80%"
  | "90%"
  | "100%";
export type Screens = "sm" | "md" | "lg" | "xl" | "2xl";
declare module "styled-components" {
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
