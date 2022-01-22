import React, { useRef } from 'react';
import { useNumberInputField } from '../../../hooks';
import ExpandLess from '../../../icons/ExpandLess';
import ExpandMore from '../../../icons/ExpandMore';
import { Container } from '../../Container';
import { IconButton } from '../../IconButton';
import { FormElementContainer } from '../FormElementContainer';
import { NumberInputFieldProps } from '../FormFields.types';
import { StyledInput } from '../InputContainer.styled';

export const NumberInputField = ({
  varient,
  isError,
  errorMessage,
  disableFloat,
  forceFocus,
  value = 0,
  onChange,
  min = Infinity,
  max = Infinity,
  step = 1,
  onIncreaseClicked,
  onDecreaseClicked,
  ...props
}: NumberInputFieldProps) => {
  const { dispatch, newValue, setValue } = useNumberInputField({
    value,
    min,
    max,
    step,
    onChange,
  });
  const inputRef = useRef<HTMLInputElement>(null);
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
          onClick={e => {
            dispatch('increase');
            onIncreaseClicked && onIncreaseClicked(e);
            inputRef.current?.click();
          }}
        />
        <IconButton
          rounded="rectangle"
          transform="scale(0.8)"
          icon={<ExpandMore />}
          onClick={e => {
            dispatch('decrease');
            onDecreaseClicked && onDecreaseClicked(e);
            inputRef.current?.click();
          }}
        />
      </Container>
      <StyledInput
        type="number"
        id={props.name}
        value={newValue}
        min={min}
        max={max}
        step={step}
        ref={inputRef}
        onChange={e => {
          setValue(
            Number(e.target.value) >= max
              ? Number(e.target.value)
              : Number(e.target.value) <= min
              ? Number(e.target.value)
              : Number(e.target.value)
          );
          onChange && onChange(e);
        }}
        {...props}
      />
    </FormElementContainer>
  );
};
