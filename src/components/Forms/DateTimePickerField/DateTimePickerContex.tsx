import React, { createContext, FC, RefObject, useMemo } from 'react';
import { DayProps } from 'react-taqweem/types';
import { ModalBaseFunctionProps } from '../../Modal/Modal.types';
import { DateTimePickerContexProps } from './DateTimePicker.types';

export const DateTimePickerContex = createContext<DateTimePickerContexProps>({
  isMobile: false,
  containerOpen: false,
  initialDate: new Date(),
  label: '',
  name: '',
  dateFormat: 'none',
  isError: false,
  lang: 'default',
  timeFormat: '12',
  type: 'date-time',
  inputVarient: 'base',
  matchesScreen: false,
  date: new Date(),
  modalRef: {} as RefObject<ModalBaseFunctionProps>,
  containerRef: {} as RefObject<HTMLDivElement>,
  monthProps: {
    daysOfMonth: {} as IterableIterator<DayProps>,
    month: '',
    monthNumber: 0,
    monthShort: '',
    nextMonthNumber: 0,
    nextMonthNumberOfDays: 0,
    numberOfDays: 0,
    prevMonthNumber: 0,
    prevMonthNumberOfDays: 0,
  },
  nextYearMaxed: false,
  minYear: 1900,
  maxYear: 0,
  dayProps: {
    date: 0,
    day: '',
    dayNumberInWeek: 0,
    dayShort: '',
    month: 0,
    week: 0,
  },
  isPrevYearMaxed: () => false,
  isNextYearMaxed: () => false,
  inputsProps: {
    date: {
      onBlur: () => {
        return;
      },
      value: '',
      onChange: () => {
        return;
      },
    },
    hours: {
      max: 0,
      min: 0,
      type: '',
      onBlur: () => {
        return;
      },
      onChange: () => {
        return;
      },
      value: 0,
    },
    minutes: {
      max: 0,
      min: 0,
      onBlur: () => {
        return;
      },
      onChange: () => {
        return;
      },
      type: '',
      value: 0,
    },
  },
  goToYear: () => {
    return;
  },
  goToPrevYear: () => {
    return;
  },
  goToPrevMonth: () => {
    return;
  },
  goToPrevDay: () => {
    return;
  },
  goToNextYear: () => {
    return;
  },
  goToNextMonth: () => {
    return;
  },
  goToNextDay: () => {
    return;
  },
  goToMonth: () => {
    return;
  },
  goToDay: () => {
    return;
  },
  fromatedTime: '',
  formatedDate: '',
  prevYearMaxed: false,
  renderMonth: [],
  selectDate: () => {
    return;
  },
  setMaxYear: () => {
    return;
  },
  setMinYear: () => {
    return;
  },
  timeProps: {
    minutes: 0,
    hours: 0,
    ms: 0,
    seconds: 0,
    timeStamp: 0,
    meridiem: 'am',
  },
  updateDate: () => {
    return;
  },
  weekDays: [],
  yearProps: {
    nextYear: 0,
    prevYear: 0,
    timeStamp: 0,
    year: 0,
    yearMonths: [],
    yearShort: 0,
  },
  yearsList: [],
  pickerCurrentTab: 1,
  setPickerCurrentTab: () => {
    return;
  },
  hours: 0,
  minutes: 0,
  meridiem: 'am',
  pick: 'hours',
  currentCalendarTab: 1,
  setHours: () => {
    return;
  },
  setMinutes: () => {
    return;
  },
  setMeridiem: () => {
    return;
  },
  setPick: () => {
    return;
  },
  setCurrentCalendarTab: () => {
    return;
  },
});

export const DateTimePickerContexProvider: FC<DateTimePickerContexProps> = ({
  children,
  ...values
}) => {
  const memoValue = useMemo(() => ({ ...values }), [values]);
  return (
    <DateTimePickerContex.Provider value={memoValue}>
      {children}
    </DateTimePickerContex.Provider>
  );
};
