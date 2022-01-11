import { css } from 'styled-components';
import { OverFlowType } from '../../../types';

export const StyledOverflow = css<OverFlowType>`
  ${({
    overflow,
    overflowAnchor,
    overflowBlock,
    overflowClipBox,
    overflowInline,
    overflowWrap,
    overflowX,
    overflowY,
  }) => css`
    overflow: ${overflow};
    overflow-anchor: ${overflowAnchor};
    overflow-block: ${overflowBlock};
    overflow-clip-box: ${overflowClipBox};
    overflow-inline: ${overflowInline};
    overflow-wrap: ${overflowWrap};
    overflow-x: ${overflowX};
    overflow-y: ${overflowY};
  `}
`;
