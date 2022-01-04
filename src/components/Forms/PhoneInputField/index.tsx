import React, { FC } from 'react';
import { Label, Typography } from '../..';
import { TextInputFieldProps } from '../FormFields.types';
import {
  StyledFieldset,
  StyledInput,
  StyledInputContainer,
  StyledLegend,
} from '../InputContainer.styled';

export const PhoneInputField: FC<TextInputFieldProps> = ({
  name,
  label,
  varient,
  isError,
  errorMessage,
  ...props
}) => {
  return (
    <>
      {varient === 'outlined' ? (
        <StyledFieldset varient={varient} isError={isError}>
          <StyledInput
            type="text"
            name={name}
            id={name}
            placeholder={label}
            {...props}
          />
          <StyledLegend className="legend">{label}</StyledLegend>
          <StyledLegend
            className="float-legend"
            isError={isError}
            children={label}
          />
          <Typography
            className="error-message"
            children={errorMessage && errorMessage ? errorMessage : undefined}
            style={{ opacity: isError && errorMessage ? 1 : 0 }}
          />
        </StyledFieldset>
      ) : (
        <StyledInputContainer
          flowType="flex"
          elementType="container"
          flexDirection="column"
          justifyContent="end"
          varient={varient}
          isError={isError}
        >
          <StyledInput
            type="text"
            name={name}
            id={name}
            placeholder={label}
            {...props}
          />
          <Label className="float-label" htmlFor={name} children={label} />
          <Typography
            className="error-message"
            children={errorMessage && errorMessage ? errorMessage : undefined}
            style={{ opacity: isError && errorMessage ? 1 : 0 }}
          />
        </StyledInputContainer>
      )}
    </>
  );
};
