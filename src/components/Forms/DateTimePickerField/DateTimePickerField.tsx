import React from 'react';
import { DateTimeProvider, useDateTimePickerProps } from 'react-datetime-hook';
import { useDateTimePickerField } from '../../../hooks';
import { DatePickerElementsPropsProvider } from './DatePickerElementsPropsContext';
import { DateTimePickerProps } from './DateTimePicker.types';
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
}: DateTimePickerProps) => {
  const { date } = useDateTimePickerProps();
  const picker = useDateTimePickerField({
    date,
    type,
    varient,
    label,
    name,
    isError,
    disableFloat,
    errorMessage,
    forceFocus,
    onChange,
  });

  return (
    <DateTimeProvider
      dateArg={initialDate}
      dateFormatArg={dateFormat}
      timeFormatArg={timeFormat}
      langArg={lang}
    >
      <DatePickerElementsPropsProvider {...picker}>
        <PickerInput setContainerOpen={picker.setContainerOpen}>
          <PickerContainer />
        </PickerInput>
      </DatePickerElementsPropsProvider>
    </DateTimeProvider>
  );
};
