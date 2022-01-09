import React, { FC, useState } from 'react';
import { FormElementContainer } from '../FormElementContainer';
import { NumberInputFieldProps } from '../FormFields.types';
import { StyledInput } from '../InputContainer.styled';

export const NumberInputField: FC<NumberInputFieldProps> = ({
  varient,
  isError,
  errorMessage,
  disableFloat,
  forceFocus,
  value = 0,
  ...props
}) => {
  const [newValue, setValue] = useState(Number(props.min) || value);
  return (
    <FormElementContainer
      name={props.name}
      varient={varient}
      label={props.label}
      disableFloat={disableFloat}
      errorMessage={errorMessage}
      forceFocus={forceFocus}
      isError={isError}
      disabled={props.disabled}
    >
      <StyledInput
        type="number"
        id={props.name}
        value={newValue}
        onChange={e => setValue(Number(e.target.value))}
        {...props}
      />
    </FormElementContainer>
  );
};
