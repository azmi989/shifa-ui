import React from 'react';
import useTaqweem from 'react-taqweem';
import { Modal, Container, TextInputField } from '../..';
import { useDateTimePickerField } from '../../../hooks';
import { StyledInputContainer } from '../InputContainer.styled';
import { DateTimePickerType } from './DateTimePicker.types';
import { DateTimePickerContexProvider } from './DateTimePickerContex';
import { PickerComponent } from './PickerComponent';
import { PickerContainer } from './PickerContainer';
import { PickerInput } from './PickerInput';

export const DateTimePickerField = ({
  initialDate,
  timeFormat = '12',
  lang = 'default',
  dateFormat = 'none',
  type = 'date-time',
  varient = 'outlined',
  label,
  name,
  isError,
  disableFloat,
  errorMessage,
  forceFocus,
  onChange,
}: DateTimePickerType) => {
  const taqweem = useTaqweem({
    dateArg: initialDate,
    timeFormatArg: timeFormat,
    langArg: lang,
    dateFormatArg: dateFormat,
  });
  const picker = useDateTimePickerField({
    timeFormat,
    date: taqweem.date,
    onChange,
  });

  return (
    <DateTimePickerContexProvider
      initialDate={initialDate}
      timeFormat={timeFormat}
      label={label}
      name={name}
      inputVarient={varient}
      isError={isError}
      disableFloat={disableFloat}
      errorMessage={errorMessage}
      forceFocus={forceFocus}
      type={type}
      {...taqweem}
      {...picker}
    >
      <PickerInput setContainerOpen={picker.setContainerOpen}>
        <PickerContainer />
      </PickerInput>
    </DateTimePickerContexProvider>
  );
};
