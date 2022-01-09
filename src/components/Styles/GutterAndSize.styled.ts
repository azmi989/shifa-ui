import { css } from 'styled-components';
import { GutterAndSizeType } from '../../../types';

export const StyledGutterAndSize = css<GutterAndSizeType>`
  margin: ${({ margin, disableGutter }) =>
    disableGutter ? undefined : margin};
  margin-block: ${({ marginBlock, disableGutter }) =>
    disableGutter ? undefined : marginBlock};
  margin-block-end: ${({ marginBlockEnd, disableGutter }) =>
    disableGutter ? undefined : marginBlockEnd};
  margin-block-start: ${({ marginBlockStart, disableGutter }) =>
    disableGutter ? undefined : marginBlockStart};
  margin-bottom: ${({ marginBottom, disableGutter }) =>
    disableGutter ? undefined : marginBottom};
  margin-inline: ${({ marginInline, disableGutter }) =>
    disableGutter ? undefined : marginInline};
  margin-inline-end: ${({ marginInlineEnd, disableGutter }) =>
    disableGutter ? undefined : marginInlineEnd};
  margin-inline-start: ${({ marginInlineStart, disableGutter }) =>
    disableGutter ? undefined : marginInlineStart};
  margin-left: ${({ marginLeft, disableGutter }) =>
    disableGutter ? undefined : marginLeft};
  margin-right: ${({ marginRight, disableGutter }) =>
    disableGutter ? undefined : marginRight};
  margin-top: ${({ marginTop, disableGutter }) =>
    disableGutter ? undefined : marginTop};
  padding: ${({ padding, disableGutter }) =>
    disableGutter ? undefined : padding};
  padding-block: ${({ paddingBlock, disableGutter }) =>
    disableGutter ? undefined : paddingBlock};
  padding-block-end: ${({ paddingBlockEnd, disableGutter }) =>
    disableGutter ? undefined : paddingBlockEnd};
  padding-block-start: ${({ paddingBlockStart, disableGutter }) =>
    disableGutter ? undefined : paddingBlockStart};
  padding-bottom: ${({ paddingBottom, disableGutter }) =>
    disableGutter ? undefined : paddingBottom};
  padding-inline: ${({ paddingInline, disableGutter }) =>
    disableGutter ? undefined : paddingInline};
  padding-inline-end: ${({ paddingInlineEnd, disableGutter }) =>
    disableGutter ? undefined : paddingInlineEnd};
  padding-inline-start: ${({ paddingInlineStart, disableGutter }) =>
    disableGutter ? undefined : paddingInlineStart};
  padding-left: ${({ paddingLeft, disableGutter }) =>
    disableGutter ? undefined : paddingLeft};
  padding-right: ${({ paddingRight, disableGutter }) =>
    disableGutter ? undefined : paddingRight};
  padding-top: ${({ paddingTop, disableGutter }) =>
    disableGutter ? undefined : paddingTop};
  height: ${({ height }) => height};
  max-height: ${({ maxHeight }) => maxHeight};
  min-height: ${({ minHeight }) => minHeight};
  width: ${({ width }) => width};
  max-width: ${({ maxWidth }) => maxWidth};
  min-width: ${({ minWidth }) => minWidth};
`;
