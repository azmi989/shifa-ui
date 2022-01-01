import { css } from "styled-components";
import { getBorderRadius, getColor } from "../../theme";
import { ButtonProps } from "../Button/Button.types";

export const StyledButtonBorder = css<ButtonProps>`
  border-style: solid;
  border-radius: ${(props) =>
    props.pill ? getBorderRadius("lg") : getBorderRadius("s")};
  border-width: 1px;
  border-color: ${(props) =>
    props.varient === "outlined"
      ? getColor(props.backgroundColor)
      : "transparent"};
  border-color: ${({ disabled, varient }) =>
    disabled
      ? varient !== "base"
        ? getColor("paper", 500)
        : undefined
      : undefined};
`;
