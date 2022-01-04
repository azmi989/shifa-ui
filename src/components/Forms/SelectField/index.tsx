import React, { FC } from 'react';
import { SelectInputFieldProps } from '../FormFields.types';
import { StyledInputContainer } from '../InputContainer.styled';
import DropDown from '../../../icons/DropDown';
import { getColor } from '../../../theme/utils';
import { useSelectField } from '../../../hooks';
import { Container, Label, Typography, Divider } from '../..';
import { StyledOption } from './Option.styled';

export const SelectField: FC<SelectInputFieldProps> = ({
  options,
  isError,
  errorMessage,
  varient,
  name,
  label,
  value,
  defaultValue,
  ...props
}) => {
  const {
    open,
    focus,
    containerRef,
    setFocus,
    setOpen,
    fieldValue,
    setFieldValue,
  } = useSelectField({ name, value, defaultValue });
  return (
    <StyledInputContainer
      forceFocus={focus}
      isError={isError}
      onClick={() => {
        setOpen(prev => !prev);
        setFocus(prev => !prev);
      }}
      errorMessage={errorMessage}
      ref={containerRef}
    >
      <Label
        style={{ top: 0 }}
        className="float-label"
        htmlFor={name}
        children={label}
      />
      <DropDown
        style={{
          transition: 'transform 100ms ease',
          transform: open ? 'rotate(180deg) scale(2)' : 'scale(2)',
          position: 'absolute',
          right: '1rem',
          fill: getColor(isError ? 'error' : focus ? 'primary' : 'primary'),
          top: '25%',
        }}
      />
      <Typography style={{ position: 'absolute', top: '50%', left: '1rem' }}>
        {fieldValue.value}
      </Typography>
      <Container
        flowType="flex"
        elementType="container"
        flexDirection="column"
        position="absolute"
        height="fit-content"
        top="110%"
        left={0}
        padding="1rem"
        transform={open ? 'scale(1,1)' : 'scale(1,0)'}
        transition="transform 100ms ease"
        transformOrigin="top center"
        backgroundColor="paper"
        borderRadius="s"
        cursor="default"
        elevation={1}
      >
        {options?.map((option, index) => (
          <>
            {index === 0 ? (
              undefined
            ) : (
              <Divider key={option.id} borderWidth="xxs" borderOpacity="50%" />
            )}
            <StyledOption
              cursor="pointer"
              onClick={() => setFieldValue(option)}
              padding="0.5rem 0"
              key={option.id}
              selected={fieldValue.id === option.id}
            >
              {option.element ? option.element : option.value}
            </StyledOption>
          </>
        ))}
      </Container>
    </StyledInputContainer>
  );
};
