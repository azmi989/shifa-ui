import React, { useRef } from 'react';
import { CheckBoxProps } from '../FormFields.types';
import { StyledRadioContainer } from './StyledRadio.styled';
import { StyledCheckBoxInput } from '../CheckBoxField/StyledCheckBox.styled';
import { Label } from '../../Typography';

export const RadioField = ({ label, ...props }: CheckBoxProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <StyledRadioContainer
      checked={props.checked}
      onClick={() => ref.current?.click()}
    >
      <StyledCheckBoxInput type="radio" ref={ref} {...props} />
      <Label className="label" htmlFor={props.name}>
        {label}
      </Label>
    </StyledRadioContainer>
  );
};
