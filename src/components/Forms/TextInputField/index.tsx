import React, { FC } from 'react';
import { Label } from '../..';
import { TextInputFieldProps } from '../FormFields.types';
import {
  StyledFieldset,
  StyledInput,
  StyledInputContainer,
  StyledLegend,
} from '../InputContainer.styled';

export const TextInputField: FC<TextInputFieldProps> = ({
  name,
  label,
  varient,
  isError,
}) => {
  // return (
  //   <StyledInputContainer
  //     marginTop="1rem"
  //     flowType="flex"
  //     elementType="container"
  //     flexDirection="column"
  //     justifyContent="end"
  //     varient={varient}
  //     isError={isError}
  //   >
  //     <StyledInput name={name} id={name} placeholder={label} />
  //     <Label className="float-label" htmlFor={name} children={label} />
  //   </StyledInputContainer>
  // );
  return (
    <>
      <StyledFieldset varient={varient} isError={isError}>
        <StyledInput name={name} id={name} placeholder={label} />
        <StyledLegend className="float-label">{label}</StyledLegend>
      </StyledFieldset>
    </>
  );
};
