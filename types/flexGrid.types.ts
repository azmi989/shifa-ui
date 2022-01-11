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
export type GridContainerType = Pick<
  CSSProperties,
  | 'gridTemplateColumns'
  | 'gridTemplateRows'
  | 'gridTemplateAreas'
  | 'gridTemplate'
  | 'gridAutoColumns'
  | 'gridAutoRows'
  | 'gridColumnGap'
  | 'gridRowGap'
  | 'gridGap'
  | 'justifyItems'
  | 'alignItems'
  | 'placeItems'
  | 'justifyContent'
  | 'alignContent'
  | 'placeContent'
  | 'gridAutoFlow'
  | 'grid'
>;

export type GridItemType = Pick<
  CSSProperties,
  | 'gridColumnStart'
  | 'gridColumnEnd'
  | 'gridRowStart'
  | 'gridRowEnd'
  | 'gridColumn'
  | 'gridRow'
  | 'gridArea'
  | 'justifySelf'
  | 'alignSelf'
  | 'placeSelf'
>;
export type FlexGridType = Pick<CSSProperties, 'display'> &
  FlexItemType &
  FlexContainerType &
  GridItemType &
  GridContainerType;
