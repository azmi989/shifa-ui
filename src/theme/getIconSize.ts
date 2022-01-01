import { ButtonSizeProps } from "../types/generics.types";

export const getIconSize = (size?: ButtonSizeProps) => {
  switch (size) {
    case "xs":
      return { height: "1rem", width: "1rem" };
    case "s":
      return { height: "1.2rem", width: "1.2rem" };
    case "md":
      return { height: "1.5rem", width: "1.5rem" };
    case "lg":
      return { height: "2rem", width: "2rem" };
    default:
      return undefined;
  }
};
