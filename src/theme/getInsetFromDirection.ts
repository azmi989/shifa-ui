import { DirectionType } from "../types/generics.types";

export const getInsetFromDirection = (direction?: DirectionType): string => {
  switch (direction) {
    case "top":
      return `bottom: 0%;
      left: 50%;
      transform: translateX(-50%);`;
    case "right":
      return `bottom: 50%;
      left: 0%;
      transform: translateY(-50%);`;
    case "bottom":
      return `top: 0%;
      left: 50%;
      transform: translateX(-50%);`;
    case "left":
      return `bottom: 50%;
      right: 0%;
      transform: translateY(-50%);`;
    default:
      return `bottom: 0%;
  left: 50%;
  transform: translateX(-50%);`;
  }
};
