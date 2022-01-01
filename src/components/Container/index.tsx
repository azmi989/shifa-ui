import React, { FC } from "react";
import { containerDefaults } from "./Container.defaults";
import { StyledContainer } from "./Container.styled";
import { ContainerProps } from "./Container.types";

export const Container: FC<ContainerProps> = (props) => {
  const defaultPrpos = containerDefaults(props);
  return <StyledContainer {...defaultPrpos} />;
};
