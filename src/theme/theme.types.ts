import { defaultTheme } from '.';
import { themeExtention } from '../theme.config';

let themeColors: keyof typeof defaultTheme.colors;
type ThemeColorsType = typeof themeColors;
let extentionColors: keyof typeof themeExtention.colors;
type ExtentionColorsType = typeof extentionColors;

export type ColorsType = ThemeColorsType | ExtentionColorsType;

let themeBorderRadius: keyof typeof defaultTheme.borderRadius;
type ThemeBorderRadiusType = typeof themeBorderRadius;
let extentionBorderRadius: keyof typeof themeExtention.borderRadius;
type ExtentionBorderRadiusType = typeof extentionBorderRadius;

export type BorderRadiusType =
  | ExtentionBorderRadiusType
  | ThemeBorderRadiusType;

let themeBorderWidth: keyof typeof defaultTheme.borderWidth;
type ThemeBorderWidthType = typeof themeBorderWidth;
let extentionBorderWidth: keyof typeof themeExtention.borderWidth;
type ExtentionBorderWidthType = typeof extentionBorderWidth;

export type BorderWidthType = ExtentionBorderWidthType | ThemeBorderWidthType;

let themeElevation: keyof typeof defaultTheme.elevation;
export type ElevationType = typeof themeElevation;
export type ElevationProp = { elevation?: ElevationType };

let themeScreens: keyof typeof defaultTheme.screens;
type ThemeScreenType = typeof themeScreens;
let extentionScreens: keyof typeof themeExtention.screens;
type ExtentionScreenType = typeof extentionScreens;

export type ScreensType = ExtentionScreenType | ThemeScreenType;

let themeOpacity: keyof typeof defaultTheme.opacity;
export type OpacityType = typeof themeOpacity;

let themeZIndex: keyof typeof defaultTheme.zIndex;
export type ZIndexType = typeof themeZIndex;

let themeText: keyof typeof defaultTheme.text;
export type ThemeTextType = typeof themeText;

export type RootFontSize = number;
export type RootScreenMaxWidth = ScreensType;
export type ThemeResponsiveScreen = ScreensType;
