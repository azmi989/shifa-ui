import React, { FC, useEffect, useState } from 'react';
import { Container, IconButton } from '../..';
import ExpandLess from '../../../icons/ExpandLess';
import ExpandMore from '../../../icons/ExpandMore';
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
  onChange,
  ...props
}) => {
  const [newValue, setValue] = useState(Number(props.min) || value);
  useEffect(() => {
    onChange && onChange(newValue);
  }, [newValue]);
  const increase = () => {
    set
  }
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
          onClick={() => setValue(prev => {

            props.min ? props.step ? undefined : props.max ? undefined

          })}
        />
        <IconButton
          rounded="rectangle"
          transform="scale(0.8)"
          icon={<ExpandMore />}
          onClick={() => setValue(prev => (prev -= 1))}
        />
      </Container>
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
