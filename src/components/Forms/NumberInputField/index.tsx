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
  increaseButtonProps = {},
  decreaseButtonProps = {},
  customOnChange = false,
  min = Infinity,
  max = Infinity,
  step = 1,
  ...props
}) => {
  const { increase, decrease, newValue, setValue } = useNumberInputField({
    value,
    min,
    max,
    step,
    onChange,
  });
  const {
    onClick: onIncreaseClick,
    ...increaseButtonOwnProps
  } = increaseButtonProps;
  const {
    onClick: onDecreaseClick,
    ...decreaseButtonOwnProps
  } = decreaseButtonProps;
  const handelOnIncreaseClicked: MouseEventHandler<HTMLButtonElement> = e =>
    customOnChange ? onIncreaseClick && onIncreaseClick(e) : increase();
  const handelOnDecreaseClicked: MouseEventHandler<HTMLButtonElement> = e =>
    customOnChange ? onDecreaseClick && onDecreaseClick(e) : decrease();
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
          onClick={handelOnIncreaseClicked}
          {...increaseButtonOwnProps}
        />
        <IconButton
          rounded="rectangle"
          transform="scale(0.8)"
          icon={<ExpandMore />}
          onClick={handelOnDecreaseClicked}
          {...decreaseButtonOwnProps}
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
