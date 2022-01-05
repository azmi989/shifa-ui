import React, { FC } from 'react';
import {
  MultipleSelectInputFieldProps,
  SelectInputFieldProps,
  SingleSelectInputFieldProps,
} from '../FormFields.types';
import { StyledInputContainer } from '../InputContainer.styled';
import DropDown from '../../../icons/DropDown';
import Close from '../../../icons/Close';
import { getColor } from '../../../theme/utils';
import { useMultipleSelectField, useSingleSelectField } from '../../../hooks';
import { Container, Label, Typography, Divider } from '../..';
import { StyledOption } from './Option.styled';

export const SelectField: FC<SelectInputFieldProps> = ({
  multiple,
  ...props
}) => {
  return (
    <>
      {multiple ? (
        <MultipleSelectField {...props} />
      ) : (
        <SingleSelectField {...props} />
      )}
    </>
  );
};
const SingleSelectField: FC<Omit<SingleSelectInputFieldProps, 'multiple'>> = ({
  options,
  isError,
  errorMessage,
  varient,
  name,
  label,
  value,
  defaultValue,
  onChange,
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
  } = useSingleSelectField({ defaultValue, onChange });
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
        maxHeight="10rem"
        overflowY="scroll"
        style={{ scrollBehavior: 'smooth' }}
      >
        {options?.map((option, index) => (
          <>
            {index === 0 ? (
              undefined
            ) : (
              <Divider
                key={`${option.id}-div`}
                borderWidth="xxs"
                borderOpacity="50%"
              />
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
const MultipleSelectField: FC<Omit<
  MultipleSelectInputFieldProps,
  'multiple'
>> = ({
  options,
  isError,
  errorMessage,
  varient,
  name,
  label,
  value,
  defaultValue,
  onChange,
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
  } = useMultipleSelectField({ onChange });
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
      {fieldValue.length > 0 ? (
        <Container
          position="absolute"
          top="-5%"
          flowType="flex"
          elementType="container"
          flexDirection="row"
          justifyContent="flex-start"
          alignItems="flex-end"
          width="80%"
          overflow="hidden"
          padding="0.1rem 0"
          zIndex={10}
        >
          {fieldValue.map(item => (
            <Container
              width="fit-content"
              height="fit-content"
              margin="0 0.5rem"
              padding="0.25rem 1rem"
              key={`${item.id}-cont`}
              backgroundColor="paper"
              backgroundColorOpacity="20%"
              elevation={2}
              borderRadius="md"
              borderWidth="xxs"
              zIndex={10}
              onClick={e => {
                e.stopPropagation();
                setFieldValue(prev =>
                  prev.filter(option => option.id !== item.id)
                );
              }}
            >
              {item.value}
              <Close style={{ marginLeft: '0.5rem' }} />
            </Container>
          ))}
        </Container>
      ) : (
        <Typography style={{ position: 'absolute', top: '50%', left: '1rem' }}>
          {defaultValue}
        </Typography>
      )}
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
        maxHeight="10rem"
        overflowY="scroll"
        style={{ scrollBehavior: 'smooth' }}
      >
        {options?.map((option, index) => (
          <>
            {index === 0 ? (
              undefined
            ) : (
              <Divider
                key={`${option.id}-div`}
                borderWidth="xxs"
                borderOpacity="50%"
              />
            )}
            <StyledOption
              cursor="pointer"
              onClick={() => {
                fieldValue.includes(option)
                  ? setFieldValue(prev =>
                      prev.filter(item => item.id !== option.id)
                    )
                  : setFieldValue(prev => [...prev, option]);
              }}
              padding="0.5rem 0"
              key={option.id}
              selected={fieldValue.includes(option)}
            >
              {option.element ? option.element : option.value}
            </StyledOption>
          </>
        ))}
      </Container>
    </StyledInputContainer>
  );
};
