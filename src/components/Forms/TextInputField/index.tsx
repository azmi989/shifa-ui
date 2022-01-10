import React, { FC } from 'react';
import { FormElementContainer } from '../FormElementContainer';
import { TextInputFieldProps } from '../FormFields.types';
import { StyledInput } from '../InputContainer.styled';

export const TextInputField: FC<TextInputFieldProps> = ({
  varient,
  isError,
  errorMessage,
  disableFloat,
  forceFocus,
  disabled = false,
  renderElement,
  ...props
}) => {
  return (
    <FormElementContainer
      name={props.name}
      varient={varient}
      label={props.label}
      disableFloat={disableFloat}
      errorMessage={errorMessage}
      forceFocus={forceFocus}
      isError={isError}
      disabled={disabled}
      renderElement={renderElement}
    >
      <StyledInput disabled={disabled} placeholder={props.label} {...props} />
    </FormElementContainer>
  );
};
