import React, { FC } from 'react';
import DropDown from '../../../icons/DropDown';
import { useMultipleSelectField } from '../../../hooks';
import { MultipleSelectInputFieldProps } from '../FormFields.types';
import {
  StyledFieldset,
  StyledInputContainer,
  StyledLegend,
} from '../InputContainer.styled';
import { getColor } from '../../../theme/utils';
import { Label, Typography } from '../..';
import { MultipleSelectFieldChildren } from './MultipleSelectFieldChildren';

export const MultipleSelectField: FC<Omit<
  MultipleSelectInputFieldProps,
  'multiple'
>> = ({
  options,
  isError,
  errorMessage,
  varient,
  name,
  label,
  defaultValue,
  onChange,
}) => {
  const {
    open,
    focus,
    containerRef,
    setFocus,
    setOpen,
    fieldValue,
    setFieldValue,
    fieldsetRef,
  } = useMultipleSelectField({ onChange });
  return (
    <>
      {varient === 'outlined' ? (
        <StyledFieldset
          forceFocus
          isError={isError}
          varient={varient}
          ref={fieldsetRef}
          onClick={() => {
            setOpen(prev => !prev);
            setFocus(prev => !prev);
          }}
          style={{ cursor: 'pointer' }}
        >
          <StyledLegend isError={isError}>{label}</StyledLegend>
          <MultipleSelectFieldChildren
            options={options}
            defaultValue={defaultValue}
            fieldValue={fieldValue}
            setFieldValue={setFieldValue}
            open={open}
            focus={focus}
            isError={isError}
            varient={varient}
          />
          <Typography
            className="error-message"
            children={errorMessage && errorMessage ? errorMessage : undefined}
            style={{ opacity: isError && errorMessage ? 1 : 0 }}
          />
        </StyledFieldset>
      ) : (
        <StyledInputContainer
          forceFocus={focus}
          isError={isError}
          varient={varient}
          onClick={() => {
            setOpen(prev => !prev);
            setFocus(prev => !prev);
          }}
          errorMessage={errorMessage}
          ref={containerRef}
        >
          <Label
            style={{ top: 0, transform: 'scale(0.8)' }}
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
          <MultipleSelectFieldChildren
            options={options}
            defaultValue={defaultValue}
            fieldValue={fieldValue}
            setFieldValue={setFieldValue}
            open={open}
            focus={focus}
            isError={isError}
            varient={varient}
          />
          <Typography
            className="error-message"
            children={errorMessage && errorMessage ? errorMessage : undefined}
            style={{ opacity: isError && errorMessage ? 1 : 0 }}
          />
        </StyledInputContainer>
      )}
    </>
  );
};
