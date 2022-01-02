import { css } from 'styled-components';
import { GridContainerType, GridItemType } from '../../../types';

export const StyledGridItem = css<GridItemType>`
  grid-column-start: ${({ gridColumnStart }) => gridColumnStart};
  grid-column-end: ${({ gridColumnEnd }) => gridColumnEnd};
  grid-row-start: ${({ gridRowStart }) => gridRowStart};
  grid-row-end: ${({ gridRowEnd }) => gridRowEnd};
  grid-column: ${({ gridColumn }) => gridColumn};
  grid-row: ${({ gridRow }) => gridRow};
  grid-area: ${({ gridArea }) => gridArea};
  justify-self: ${({ justifySelf }) => justifySelf};
  align-self: ${({ alignSelf }) => alignSelf};
  place-self: ${({ placeSelf }) => placeSelf};
`;

export const StyledGridContainer = css<GridContainerType>`
  display: grid;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns};
  grid-template-rows: ${({ gridTemplateRows }) => gridTemplateRows};
  grid-template-areas: ${({ gridTemplateAreas }) => gridTemplateAreas};
  grid-template: ${({ gridTemplate }) => gridTemplate};
  grid-auto-columns: ${({ gridAutoColumns }) => gridAutoColumns};
  grid-auto-rows: ${({ gridAutoRows }) => gridAutoRows};
  grid-column-gap: ${({ gridColumnGap }) => gridColumnGap};
  grid-row-gap: ${({ gridRowGap }) => gridRowGap};
  grid-gap: ${({ gridGap }) => gridGap};
  justify-items: ${({ justifyItems }) => justifyItems};
  align-items: ${({ alignItems }) => alignItems};
  place-items: ${({ placeItems }) => placeItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  place-content: ${({ placeContent }) => placeContent};
  grid-auto-flow: ${({ gridAutoFlow }) => gridAutoFlow};
  grid: ${({ grid }) => grid};
`;
