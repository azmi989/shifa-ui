import 'styled-components';
import { BorderWidthType } from './src/theme/theme.types';
import {
  Colors,
  Elevation,
  Opacity,
  Screens,
} from './src/types/utils/generics.types';
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
