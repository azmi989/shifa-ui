import React, { useState } from 'react';
import { NumberInputFieldProps } from '../FormFields.types';
import { FormElementContainer } from '../FormElementContainer';
import { Container } from '../../Container';
import { StyledInput } from '../InputContainer.styled';
import { IconButton } from '../../IconButton';
import ExpandLess from '../../../icons/ExpandLess';
import ExpandMore from '../../../icons/ExpandMore';

export const ClockInputField = ({
  varient,
  disableFloat,
  errorMessage,
  isError,
  forceFocus,
  increaseButtonProps,
  decreaseButtonProps,
  min,
  max,
  value,
  onChange,
  step,
  ...props
}: NumberInputFieldProps) => {
  const [newValue, setValue] = useState(value);
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
      <Container position="absolute" right="1rem">
        <IconButton
          rounded="rectangle"
          transform="scale(0.8)"
          icon={<ExpandLess />}
          {...increaseButtonProps}
        />
        <IconButton
          rounded="rectangle"
          transform="scale(0.8)"
          icon={<ExpandMore />}
          {...decreaseButtonProps}
        />
      </Container>
      <StyledInput
        type="number"
        id={props.name}
        value={newValue}
        min={min}
        max={max}
        step={step}
        onChange={e => {
          setValue(Number(e.target.value));
          onChange && onChange(e);
        }}
        {...props}
      />
    </FormElementContainer>
  );
};
