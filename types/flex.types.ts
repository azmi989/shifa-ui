import { CSSProperties } from 'react';

export type FlexContainerType = Pick<
  CSSProperties,
  | 'flexDirection'
  | 'flexWrap'
  | 'flexFlow'
  | 'alignItems'
  | 'justifyContent'
  | 'alignContent'
  | 'gap'
  | 'rowGap'
  | 'columnGap'
>;

export type FlexItemType = Pick<
  CSSProperties,
  'order' | 'flexGrow' | 'flexShrink' | 'flexBasis' | 'flex' | 'alignSelf'
>;

// export type FlexItem = {
//   elementType: "item";
// } & FlexItemType;
// export type FlexContainer = { elementType: "container" } & FlexContainerType;

// export type FlexType = FlexContainer | FlexItem;
