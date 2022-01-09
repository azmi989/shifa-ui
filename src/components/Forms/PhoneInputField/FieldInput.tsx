import { isValidPhoneNumber, CountryCode } from 'libphonenumber-js';
import React, { Dispatch, FC, SetStateAction, useState } from 'react';
import { CountryProps } from '.';
import { Typography } from '../..';
import { PhoneInputFieldProps } from '../FormFields.types';
import { StyledInput } from '../InputContainer.styled';
import { CountrySelect } from './CountrySelect';

type Props = {
  selectedCountry: Partial<CountryProps>;
  setSelectedCountry: Dispatch<SetStateAction<CountryProps>>;
  fieldError: boolean;
  setFieldError: Dispatch<SetStateAction<boolean>>;
} & PhoneInputFieldProps;

export const FieldInput: FC<Props> = ({
  setSelectedCountry,
  selectedCountry,
  varient,
  isError,
  fieldError,
  name,
  label,
  errorMessage,
  children,
  setFieldError,
  onChange,
  ...props
}) => {
  const [fieldValue, setFieldValue] = useState('');
  const [fieldErrorMessage, setFieldErrorMessage] = useState('');
  const checkPhoneNumber = () => {
    if (
      isValidPhoneNumber(
        fieldValue,
        String(selectedCountry.cca2).toUpperCase() as CountryCode
      )
    ) {
      setFieldError(false);
      onChange(fieldValue);
      setFieldErrorMessage('InvalidPhoneNumber');
    } else {
      setFieldError(true);
    }
  };
  return (
    <>
      <CountrySelect
        setSelectedCountry={setSelectedCountry}
        selectedCountry={selectedCountry}
        varient={varient}
        isError={isError || fieldError}
      />
      <StyledInput
        type="text"
        name={name}
        id={name}
        placeholder={label}
        onChange={e => setFieldValue(`${selectedCountry.idd}${e.target.value}`)}
        onBlur={checkPhoneNumber}
        style={{ width: '100%' }}
        {...props}
      />
      {children}
      <Typography
        className="error-message"
        children={
          errorMessage || fieldErrorMessage
            ? errorMessage || fieldErrorMessage
            : undefined
        }
        style={{
          opacity:
            (isError && errorMessage) || fieldErrorMessage.length > 0 ? 1 : 0,
        }}
      />
    </>
  );
};
