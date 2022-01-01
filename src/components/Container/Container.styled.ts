import styled from "styled-components";
import { ContainerProps } from "./Container.types";
import {
  StyledGridContainer,
  StyledGridItem,
  StyledFlexContainer,
  StyledFlexItem,
  StyledBackground,
  StyledBorder,
  StyledCursor,
  StyledFillAndStroke,
  StyledGutterAndSize,
  StyledInset,
  StyledOverflow,
  StyledText,
  StyledTransform,
  StyledTransition,
} from "../Styles";

export const StyledContainer = styled.div<ContainerProps>`
  ${(props) =>
    props.flowType === "grid"
      ? props.elementType === "container"
        ? StyledGridContainer
        : StyledGridItem
      : props.flowType === "flex"
      ? props.elementType === "container"
        ? StyledFlexContainer
        : StyledFlexItem
      : undefined};
  display: ${(props) =>
    props.flowType === "flex" && props.elementType === "container"
      ? "flex"
      : undefined};
  display: ${(props) =>
    props.flowType === "grid" && props.elementType === "container"
      ? "grid"
      : undefined};
  ${StyledBackground};
  ${StyledCursor};
  ${StyledBorder};
  ${StyledFillAndStroke};
  ${StyledGutterAndSize};
  ${StyledInset};
  ${StyledOverflow};
  ${StyledText};
  ${StyledTransform};
  ${StyledTransition};
`;
