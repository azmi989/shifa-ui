import React, { FC } from 'react';
import { Label, Typography } from '../..';
import { useSingleSelectField } from '../../../hooks';
import { SingleSelectInputFieldProps } from '../FormFields.types';
import {
  StyledFieldset,
  StyledInputContainer,
  StyledLegend,
} from '../InputContainer.styled';
import { SingleSelectFieldChildren } from './SingleSelectFieldChildren';

export const SingleSelectField: FC<Omit<
  SingleSelectInputFieldProps,
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
  } = useSingleSelectField({ defaultValue, onChange });
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
          <SingleSelectFieldChildren
            options={options}
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
          <SingleSelectFieldChildren
            options={options}
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
