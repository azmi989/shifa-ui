import React from 'react';
import { FormElementContainer } from '../FormElementContainer';
import { TextAreaFieldProps } from '../FormFields.types';
import { StyledTextArea } from './TextArea.styled';

export const TextAreaField = ({
  varient,
  isError,
  errorMessage,
  disableFloat = true,
  forceFocus = true,
  ...props
}: TextAreaFieldProps) => {
  return (
    <>
      <FormElementContainer
        disabled={props.disabled || false}
        name={props.name}
        varient={varient}
        label={props.label}
        disableFloat={disableFloat}
        errorMessage={errorMessage}
        forceFocus={forceFocus}
        isError={isError}
        resizable
      >
        <StyledTextArea placeholder={props.label} {...props} />
      </FormElementContainer>
    </>
  );
};
