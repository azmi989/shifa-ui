import React, { useRef } from 'react';
import { Label } from '../..';
import { CheckBoxProps } from '../FormFields.types';
import CheckBox from '../../../icons/CheckBox';
import {
  StyledCheckBoxContainer,
  StyledCheckBoxInput,
} from './StyledCheckBox.styled';

export const CheckBoxField = ({ label, onClick, ...props }: CheckBoxProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <StyledCheckBoxContainer
      checked={props.checked}
      display="flex"
      flexDirection="row-reverse"
      justifyContent="start"
      alignItems="center"
      width="1.2rem"
      height="1.2rem"
      position="relative"
      cursor="pointer"
      onClick={() => ref.current?.click()}
    >
      <StyledCheckBoxInput type="checkbox" ref={ref} {...props} />
      <Label className="label" htmlFor={props.name}>
        {label}
      </Label>
      <CheckBox />
    </StyledCheckBoxContainer>
  );
};
