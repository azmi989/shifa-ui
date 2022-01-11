import { css } from 'styled-components';
import { FlexGridType } from '../../../types';

export const StyledFlexGrid = css<FlexGridType>`
  ${({
    display,
    flexDirection,
    flexWrap,
    flexFlow,
    gap,
    rowGap,
    columnGap,
    order,
    flexGrow,
    flexShrink,
    flexBasis,
    flex,
    alignSelf,
    gridTemplateColumns,
    gridTemplateRows,
    gridTemplateAreas,
    gridTemplate,
    gridAutoColumns,
    gridAutoRows,
    gridColumnGap,
    gridRowGap,
    gridGap,
    justifyItems,
    placeItems,
    placeContent,
    gridAutoFlow,
    grid,
    gridColumnStart,
    gridColumnEnd,
    gridRowStart,
    gridRowEnd,
    gridColumn,
    gridRow,
    gridArea,
    justifySelf,
    placeSelf,
    alignContent,
    alignItems,
    justifyContent,
  }) => css`
    display: ${display};
    //flex
    flex-direction: ${flexDirection};
    flex-wrap: ${flexWrap};
    flex-flow: ${flexFlow};
    align-items: ${alignItems};
    justify-content: ${justifyContent};
    align-content: ${alignContent};
    gap: ${gap};
    row-gap: ${rowGap};
    column-gap: ${columnGap};
    order: ${order};
    flex-grow: ${flexGrow};
    flex-shrink: ${flexShrink};
    flex-basis: ${flexBasis};
    flex: ${flex};
    align-self: ${alignSelf};

    //grid
    grid-template-columns: ${gridTemplateColumns};
    grid-template-rows: ${gridTemplateRows};
    grid-template-areas: ${gridTemplateAreas};
    grid-template: ${gridTemplate};
    grid-auto-columns: ${gridAutoColumns};
    grid-auto-rows: ${gridAutoRows};
    grid-column-gap: ${gridColumnGap};
    grid-row-gap: ${gridRowGap};
    grid-gap: ${gridGap};
    justify-items: ${justifyItems};
    align-items: ${alignItems};
    place-items: ${placeItems};
    justify-content: ${justifyContent};
    align-content: ${alignContent};
    place-content: ${placeContent};
    grid-auto-flow: ${gridAutoFlow};
    grid: ${grid};
    grid-column-start: ${gridColumnStart};
    grid-column-end: ${gridColumnEnd};
    grid-row-start: ${gridRowStart};
    grid-row-end: ${gridRowEnd};
    grid-column: ${gridColumn};
    grid-row: ${gridRow};
    grid-area: ${gridArea};
    justify-self: ${justifySelf};
    align-self: ${alignSelf};
    place-self: ${placeSelf};
  `}
`;
