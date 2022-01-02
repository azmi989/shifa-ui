import { CSSProperties } from 'react';

export type OverFlowType = Pick<
  CSSProperties,
  | 'overflow'
  | 'overflowAnchor'
  | 'overflowBlock'
  | 'overflowClipBox'
  | 'overflowInline'
  | 'overflowWrap'
  | 'overflowX'
  | 'overflowY'
>;
