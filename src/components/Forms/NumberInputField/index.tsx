import React, { FC, useState } from 'react';
import { IconButton, Label, Typography } from '../..';
import { NumberInputFieldProps } from '../FormFields.types';
import {
  StyledFieldset,
  StyledInput,
  StyledInputContainer,
  StyledLegend,
} from '../InputContainer.styled';
import Add from '../../../icons/Add';
import Remove from '../../../icons/Remove';

export const NumberInputField: FC<NumberInputFieldProps> = ({
  name,
  label,
  varient,
  isError,
  errorMessage,
  value = 0,
  ...props
}) => {
  const [newValue, setValue] = useState(Number(props.min) || value);
  return (
    <>
      {varient === 'outlined' ? (
        <StyledFieldset varient={varient} isError={isError}>
          <StyledInput
            type="number"
            name={name}
            id={name}
            value={newValue}
            onChange={e => setValue(Number(e.target.value))}
            {...props}
          />
          <IconButton
            position="absolute"
            right="1rem"
            top="50%"
            rounded="rectangle"
            transform="translateY(-113%) scale(0.85)"
            backgroundColor={isError ? 'error' : 'primary'}
            elevation="none"
            icon={<Add />}
            onClick={() =>
              setValue(prev => (prev === props.max ? prev : prev + 1))
            }
          />
          <IconButton
            position="absolute"
            right="1rem"
            top="50%"
            rounded="rectangle"
            transform="translateY(-20%) scale(0.85)"
            backgroundColor={isError ? 'error' : 'primary'}
            elevation="none"
            icon={<Remove />}
            onClick={() =>
              setValue(prev => (prev === props.min ? prev : prev - 1))
            }
          />
          <StyledLegend disableFloat className="legend" isError={isError}>
            {label}
          </StyledLegend>
          <StyledLegend
            disableFloat
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
          <IconButton
            position="absolute"
            right="1rem"
            top="50%"
            rounded="rectangle"
            transform="translateY(-93%) scale(0.85)"
            backgroundColor={isError ? 'error' : 'primary'}
            elevation="none"
            icon={<Add />}
            onClick={() =>
              setValue(prev => (prev === props.max ? prev : prev + 1))
            }
          />
          <IconButton
            position="absolute"
            right="1rem"
            top="50%"
            rounded="rectangle"
            transform="translateY(0%) scale(0.85)"
            backgroundColor={isError ? 'error' : 'primary'}
            elevation="none"
            icon={<Remove />}
            onClick={() =>
              setValue(prev => (prev === props.min ? prev : prev - 1))
            }
          />
          <StyledInput
            type="number"
            name={name}
            id={name}
            value={newValue}
            onChange={e => setValue(Number(e.target.value))}
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
