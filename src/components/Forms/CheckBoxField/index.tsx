import React, { useState } from 'react';
import { Container, Label } from '../..';
import { CheckBoxProps } from '../FormFields.types';
import { StyledCheckBoxContainer } from './StyledCheckBox.styled';

export const CheckBoxField = ({
  name,
  label,
  checked,
  ...props
}: CheckBoxProps) => {
  const [isChecked, setIsChecked] = useState(checked);
  const handelChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <StyledCheckBoxContainer
      checked={isChecked}
      flowType="flex"
      elementType="container"
      flexDirection="row-reverse"
      justifyContent="start"
      alignItems="center"
      width="1.2rem"
      height="1.2rem"
      borderRadius="xs"
      borderWidth="xs"
      borderColor="secondary"
      borderStyle="solid"
      position="relative"
      cursor="pointer"
      onClick={handelChange}
      id={name}
      name={name}
      label={label}
      {...props}
    >
      <Label onClick={handelChange} className="label" htmlFor={name}>
        {label}
      </Label>
    </StyledCheckBoxContainer>
  );
};
