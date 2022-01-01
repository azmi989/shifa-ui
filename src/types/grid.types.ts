import { CSSProperties } from 'react';

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

// export type GridItem = {
//   elementType: "item";
// } & GridItemType;
// export type GridContainer = { elementType: "container" } & GridContainerType;

// export type GridType = GridContainer | GridItem;
