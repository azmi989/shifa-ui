import React, { FC, MouseEventHandler } from 'react';
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
  increaseButtonProps,
  decreaseButtonProps,
  customOnChange = false,
  ...props
}) => {
  const { increase, decrease, newValue, setValue } = useNumberInputField({
    value,
    min: props.min,
    max: props.max,
    step: props.step,
    onChange,
  });
  const handelOnIncreaseClicked: MouseEventHandler<HTMLButtonElement> = e => {
    customOnChange
      ? increaseButtonProps?.onClick && increaseButtonProps.onClick(e)
      : undefined;
    increase();
  };
  const handelOnDecreaseClicked: MouseEventHandler<HTMLButtonElement> = e => {
    customOnChange
      ? decreaseButtonProps?.onClick && decreaseButtonProps.onClick(e)
      : undefined;
    decrease();
  };
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
          onClick={handelOnIncreaseClicked}
        />
        <IconButton
          rounded="rectangle"
          transform="scale(0.8)"
          icon={<ExpandMore />}
          onClick={handelOnDecreaseClicked}
          {...decreaseButtonProps}
        />
      </Container>
      <StyledInput
        type="number"
        id={props.name}
        value={newValue}
        onChange={e => {
          if (!customOnChange) {
            setValue(Number(e.target.value));
            onChange && onChange(e);
          }
        }}
        {...props}
      />
    </FormElementContainer>
  );
};
