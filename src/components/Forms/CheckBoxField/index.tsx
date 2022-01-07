import React, { useRef, useState } from 'react';
import { Label } from '../..';
import { CheckBoxProps } from '../FormFields.types';
import CheckBox from '../../../icons/CheckBox';
import {
  StyledCheckBoxContainer,
  StyledCheckBoxInput,
} from './StyledCheckBox.styled';

export const CheckBoxField = ({ label, checked, ...props }: CheckBoxProps) => {
  const ref = useRef<HTMLInputElement>(null);
  const [isChecked, setisChecked] = useState(checked);
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
      position="relative"
      cursor="pointer"
      onClick={() => ref.current?.click()}
    >
      <StyledCheckBoxInput
        type="checkbox"
        ref={ref}
        onClick={() => setisChecked(prev => !prev)}
        checked={isChecked}
        {...props}
      />
      <Label className="label" htmlFor={props.name}>
        {label}
      </Label>
      <CheckBox />
    </StyledCheckBoxContainer>
  );
};
