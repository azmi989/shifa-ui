import { CSSProperties } from 'react';

export type GutterAndSizeType = { disableGutter?: boolean } & Pick<
  CSSProperties,
  | 'margin'
  | 'marginBlock'
  | 'marginBlockEnd'
  | 'marginBlockStart'
  | 'marginBottom'
  | 'marginInline'
  | 'marginInlineEnd'
  | 'marginInlineStart'
  | 'marginLeft'
  | 'marginRight'
  | 'marginTop'
  | 'padding'
  | 'paddingBlock'
  | 'paddingBlockEnd'
  | 'paddingBlockStart'
  | 'paddingBottom'
  | 'paddingInline'
  | 'paddingInlineEnd'
  | 'paddingInlineStart'
  | 'paddingLeft'
  | 'paddingRight'
  | 'paddingTop'
  | 'height'
  | 'maxHeight'
  | 'minHeight'
  | 'width'
  | 'maxWidth'
  | 'minWidth'
>;
