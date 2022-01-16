import React, { FC } from 'react';
import { useNumberInputField } from '../../../hooks';
import ExpandLess from '../../../icons/ExpandLess';
import ExpandMore from '../../../icons/ExpandMore';
import { Container } from '../../Container';
import { IconButton } from '../../IconButton';
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
  const { increase, decrease, newValue, setValue } = useNumberInputField(
    value,
    props.min,
    props.max,
    props.step
  );
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
          onClick={increase}
        />
        <IconButton
          rounded="rectangle"
          transform="scale(0.8)"
          icon={<ExpandMore />}
          onClick={decrease}
        />
      </Container>
      <StyledInput
        type="number"
        id={props.name}
        value={newValue}
        onChange={e => {
          alert('hi');
          setValue(Number(e.target.value));
          onChange && onChange(e);
        }}
        {...props}
      />
    </FormElementContainer>
  );
};
