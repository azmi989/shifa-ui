import { css } from "styled-components";
import { FlexContainerType, FlexItemType } from "../../types";

export const StyledFlexItem = css<FlexItemType>`
  order: ${({ order }) => order};
  flex-grow: ${({ flexGrow }) => flexGrow};
  flex-shrink: ${({ flexShrink }) => flexShrink};
  flex-basis: ${({ flexBasis }) => flexBasis};
  flex: ${({ flex }) => flex};
  align-self: ${({ alignSelf }) => alignSelf};
`;

export const StyledFlexContainer = css<FlexContainerType>`
  flex-direction: ${({ flexDirection }) => flexDirection};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  flex-flow: ${({ flexFlow }) => flexFlow};
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  align-content: ${({ alignContent }) => alignContent};
  gap: ${({ gap }) => gap};
  row-gap: ${({ rowGap }) => rowGap};
  column-gap: ${({ columnGap }) => columnGap};
`;
