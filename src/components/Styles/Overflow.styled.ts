import { css } from "styled-components";
import { OverFlowType } from "../../types";

export const StyledOverflow = css<OverFlowType>`
  overflow: ${({ overflow }) => overflow};
  overflow-anchor: ${({ overflowAnchor }) => overflowAnchor};
  overflow-block: ${({ overflowBlock }) => overflowBlock};
  overflow-clip-box: ${({ overflowClipBox }) => overflowClipBox};
  overflow-inline: ${({ overflowInline }) => overflowInline};
  overflow-wrap: ${({ overflowWrap }) => overflowWrap};
  overflow-x: ${({ overflowX }) => overflowX};
  overflow-y: ${({ overflowY }) => overflowY};
`;
