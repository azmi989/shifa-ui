import { css } from 'styled-components';
import { GutterAndSizeType } from '../../../types';

export const StyledGutterAndSize = css<GutterAndSizeType>`
  ${({
    margin,
    marginBlock,
    marginBlockEnd,
    marginBlockStart,
    marginBottom,
    marginInline,
    marginInlineEnd,
    marginInlineStart,
    marginLeft,
    marginRight,
    marginTop,
    padding,
    paddingBlock,
    paddingBlockEnd,
    paddingBlockStart,
    paddingBottom,
    paddingInline,
    paddingInlineEnd,
    paddingInlineStart,
    paddingLeft,
    paddingRight,
    paddingTop,
    disableGutter,
    height,
    maxHeight,
    minHeight,
    width,
    maxWidth,
    minWidth,
  }) => css`
    margin: ${!disableGutter && margin};
    margin-block: ${!disableGutter && marginBlock};
    margin-block-end: ${!disableGutter && marginBlockEnd};
    margin-block-start: ${!disableGutter && marginBlockStart};
    margin-bottom: ${!disableGutter && marginBottom};
    margin-inline: ${!disableGutter && marginInline};
    margin-inline-end: ${!disableGutter && marginInlineEnd};
    margin-inline-start: ${!disableGutter && marginInlineStart};
    margin-left: ${!disableGutter && marginLeft};
    margin-right: ${!disableGutter && marginRight};
    margin-top: ${!disableGutter && marginTop};
    padding: ${!disableGutter && padding};
    padding-block: ${!disableGutter && paddingBlock};
    padding-block-end: ${!disableGutter && paddingBlockEnd};
    padding-block-start: ${!disableGutter && paddingBlockStart};
    padding-bottom: ${!disableGutter && paddingBottom};
    padding-inline: ${!disableGutter && paddingInline};
    padding-inline-end: ${!disableGutter && paddingInlineEnd};
    padding-inline-start: ${!disableGutter && paddingInlineStart};
    padding-left: ${!disableGutter && paddingLeft};
    padding-right: ${!disableGutter && paddingRight};
    padding-top: ${!disableGutter && paddingTop};
    height: ${height};
    max-height: ${maxHeight};
    min-height: ${minHeight};
    width: ${width};
    max-width: ${maxWidth};
    min-width: ${minWidth};
  `}
`;
