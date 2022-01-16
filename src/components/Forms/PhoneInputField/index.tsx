import React, { useState } from 'react';
import { Label } from '../../Typography';
import { PhoneInputFieldProps } from '../FormFields.types';
import {
  StyledFieldset,
  StyledInputContainer,
  StyledLegend,
} from '../InputContainer.styled';
import { FieldInput } from './FieldInput';

export type CountryProps = {
  cca2: string;
  flag: string;
  idd: string;
  name: string;
};

export const PhoneInputField = ({
  varient,
  isError = false,
  name,
  label,
  errorMessage,
  ...props
}: PhoneInputFieldProps) => {
  const [selectedCountry, setSelectedCountry] = useState<CountryProps>({
    cca2: 'none',
    flag: '',
    idd: '',
    name: '',
  });
  const [fieldError, setFieldError] = useState(false);
  return (
    <>
      {varient === 'outlined' ? (
        <StyledFieldset
          style={{ display: 'flex', flexDirection: 'row' }}
          disableFloat
          varient={varient}
          isError={isError || fieldError}
        >
          <FieldInput
            setSelectedCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
            varient={varient}
            isError={isError}
            fieldError={fieldError}
            setFieldError={setFieldError}
            name={name}
            label={label}
            errorMessage={errorMessage}
            {...props}
          >
            <StyledLegend
              isError={isError || fieldError}
              disableFloat
              className="legend"
            >
              {label}
            </StyledLegend>
            <StyledLegend
              disableFloat
              className="float-legend"
              isError={isError || fieldError}
              children={label}
            />
          </FieldInput>
        </StyledFieldset>
      ) : (
        <StyledInputContainer
          disableFloat
          display="flex"
          flexDirection="row"
          justifyContent="center"
          alignItems="flex-end"
          varient={varient}
          isError={isError || fieldError}
        >
          <FieldInput
            setSelectedCountry={setSelectedCountry}
            selectedCountry={selectedCountry}
            varient={varient}
            isError={isError}
            fieldError={fieldError}
            setFieldError={setFieldError}
            name={name}
            label={label}
            errorMessage={errorMessage}
            {...props}
          >
            <Label
              style={{ position: 'absolute', top: '0', left: '1rem' }}
              htmlFor={name}
              children={label}
              textColor={isError || fieldError ? 'error' : undefined}
            />
          </FieldInput>
        </StyledInputContainer>
      )}
    </>
  );
};
