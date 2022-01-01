import { css } from 'styled-components';
import { getBorderRadius, getBorderWidth } from '../../theme/utils';
import { BorderType } from '../../types';

export const StyledBorder = css<BorderType>`
  border-block: ${({ borderBlock }) => borderBlock};
  border-block-color: ${({ borderBlockColor }) => borderBlockColor};
  border-block-end: ${({ borderBlockEnd }) => borderBlockEnd};
  border-block-end-color: ${({ borderBlockEndColor }) => borderBlockEndColor};
  border-block-end-style: ${({ borderBlockEndStyle }) => borderBlockEndStyle};
  border-block-end-width: ${({ borderBlockEndWidth }) =>
    getBorderWidth(borderBlockEndWidth)};
  border-block-start: ${({ borderBlockStart }) => borderBlockStart};
  border-block-start-color: ${({ borderBlockStartColor }) =>
    borderBlockStartColor};
  border-block-start-style: ${({ borderBlockStartStyle }) =>
    borderBlockStartStyle};
  border-block-start-width: ${({ borderBlockStartWidth }) =>
    getBorderWidth(borderBlockStartWidth)};
  border-block-style: ${({ borderBlockStyle }) => borderBlockStyle};
  border-block-width: ${({ borderBlockWidth }) =>
    getBorderWidth(borderBlockWidth)};
  border-bottom: ${({ borderBottom }) => borderBottom};
  border-bottom-color: ${({ borderBottomColor }) => borderBottomColor};
  border-bottom-left-radius: ${({ borderBottomLeftRadius }) =>
    getBorderRadius(borderBottomLeftRadius)};
  border-bottom-right-radius: ${({ borderBottomRightRadius }) =>
    getBorderRadius(borderBottomRightRadius)};
  border-bottom-style: ${({ borderBottomStyle }) => borderBottomStyle};
  border-bottom-width: ${({ borderBottomWidth }) =>
    getBorderWidth(borderBottomWidth)};
  border-collapse: ${({ borderCollapse }) => borderCollapse};
  border-color: ${({ borderColor }) => borderColor};
  border-end-end-radius: ${({ borderEndEndRadius }) =>
    getBorderRadius(borderEndEndRadius)};
  border-end-start-radius: ${({ borderEndStartRadius }) =>
    getBorderRadius(borderEndStartRadius)};
  border-image: ${({ borderImage }) => borderImage};
  border-image-outset: ${({ borderImageOutset }) => borderImageOutset};
  border-image-repeat: ${({ borderImageRepeat }) => borderImageRepeat};
  border-image-slice: ${({ borderImageSlice }) => borderImageSlice};
  border-image-source: ${({ borderImageSource }) => borderImageSource};
  border-image-width: ${({ borderImageWidth }) =>
    getBorderWidth(borderImageWidth)};
  border-inline: ${({ borderInline }) => borderInline};
  border-inline-color: ${({ borderInlineColor }) => borderInlineColor};
  border-inline-end: ${({ borderInlineEnd }) => borderInlineEnd};
  border-inline-end-color: ${({ borderInlineEndColor }) =>
    borderInlineEndColor};
  border-inline-end-style: ${({ borderInlineEndStyle }) =>
    borderInlineEndStyle};
  border-inline-end-width: ${({ borderInlineEndWidth }) =>
    getBorderWidth(borderInlineEndWidth)};
  border-inline-start: ${({ borderInlineStart }) => borderInlineStart};
  border-inline-start-color: ${({ borderInlineStartColor }) =>
    borderInlineStartColor};
  border-inline-start-style: ${({ borderInlineStartStyle }) =>
    borderInlineStartStyle};
  border-inline-start-width: ${({ borderInlineStartWidth }) =>
    getBorderWidth(borderInlineStartWidth)};
  border-inline-style: ${({ borderInlineStyle }) => borderInlineStyle};
  border-inline-width: ${({ borderInlineWidth }) =>
    getBorderWidth(borderInlineWidth)};
  border-left: ${({ borderLeft }) => borderLeft};
  border-left-color: ${({ borderLeftColor }) => borderLeftColor};
  border-left-style: ${({ borderLeftStyle }) => borderLeftStyle};
  border-left-width: ${({ borderLeftWidth }) =>
    getBorderWidth(borderLeftWidth)};
  border-radius: ${({ borderRadius }) => getBorderRadius(borderRadius)};
  border-right: ${({ borderRight }) => borderRight};
  border-right-color: ${({ borderRightColor }) => borderRightColor};
  border-right-style: ${({ borderRightStyle }) => borderRightStyle};
  border-right-width: ${({ borderRightWidth }) =>
    getBorderWidth(borderRightWidth)};
  border-spacing: ${({ borderSpacing }) => borderSpacing};
  border-start-end-radius: ${({ borderStartEndRadius }) =>
    getBorderRadius(borderStartEndRadius)};
  border-start-start-radius: ${({ borderStartStartRadius }) =>
    getBorderRadius(borderStartStartRadius)};
  border-style: ${({ borderStyle }) => borderStyle};
  border-top: ${({ borderTop }) => borderTop};
  border-top-color: ${({ borderTopColor }) => borderTopColor};
  border-top-left-radius: ${({ borderTopLeftRadius }) =>
    getBorderRadius(borderTopLeftRadius)};
  border-top-right-radius: ${({ borderTopRightRadius }) =>
    getBorderRadius(borderTopRightRadius)};
  border-top-style: ${({ borderTopStyle }) => borderTopStyle};
  border-top-width: ${({ borderTopWidth }) => borderTopWidth};
  border-width: ${({ borderWidth }) => getBorderWidth(borderWidth)};
`;
