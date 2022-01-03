import { CSSProperties } from 'react';
import { Variations } from '.';
import {
  BorderRadiusType,
  ColorsType,
  BorderWidthType,
  OpacityType,
} from '../src/theme/theme.types';

export type BorderType = {
  borderBottomLeftRadius?: BorderRadiusType;
  borderBottomRightRadius?: BorderRadiusType;
  borderEndEndRadius?: BorderRadiusType;
  borderEndStartRadius?: BorderRadiusType;
  borderRadius?: BorderRadiusType;
  borderStartEndRadius?: BorderRadiusType;
  borderStartStartRadius?: BorderRadiusType;
  borderTopLeftRadius?: BorderRadiusType;
  borderTopRightRadius?: BorderRadiusType;
  borderBlockColor?: ColorsType;
  borderBlockEndColor?: ColorsType;
  borderBlockStartColor?: ColorsType;
  borderBottomColor?: ColorsType;
  borderColor?: ColorsType;
  borderInlineColor?: ColorsType;
  borderInlineEndColor?: ColorsType;
  borderInlineStartColor?: ColorsType;
  borderLeftColor?: ColorsType;
  borderRightColor?: ColorsType;
  borderTopColor?: ColorsType;
  borderBlockEndWidth?: BorderWidthType;
  borderBlockStartWidth?: BorderWidthType;
  borderBlockWidth?: BorderWidthType;
  borderBottomWidth?: BorderWidthType;
  borderImageWidth?: BorderWidthType;
  borderInlineEndWidth?: BorderWidthType;
  borderInlineStartWidth?: BorderWidthType;
  borderInlineWidth?: BorderWidthType;
  borderLeftWidth?: BorderWidthType;
  borderRightWidth?: BorderWidthType;
  borderTopWidth?: BorderWidthType;
  borderWidth?: BorderWidthType;
  borderOpacity?: OpacityType;
  borderColorVarient?: Variations;
} & Pick<
  CSSProperties,
  | 'borderBlock'
  | 'borderBlockEnd'
  | 'borderBlockStart'
  | 'borderBottom'
  | 'borderCollapse'
  | 'borderImage'
  | 'borderImageOutset'
  | 'borderImageRepeat'
  | 'borderImageSlice'
  | 'borderImageSource'
  | 'borderInline'
  | 'borderInlineEnd'
  | 'borderInlineStart'
  | 'borderLeft'
  | 'borderRight'
  | 'borderSpacing'
  | 'borderTop'
  | 'borderBlockEndStyle'
  | 'borderBlockStartStyle'
  | 'borderBlockStyle'
  | 'borderBottomStyle'
  | 'borderInlineEndStyle'
  | 'borderInlineStartStyle'
  | 'borderInlineStyle'
  | 'borderLeftStyle'
  | 'borderRightStyle'
  | 'borderStyle'
  | 'borderTopStyle'
>;
