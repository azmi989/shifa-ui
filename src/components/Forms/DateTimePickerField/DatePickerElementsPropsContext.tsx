import React, { createContext, FC, RefObject, useMemo } from 'react';
import { useDateTimePickerField } from '../../../hooks';
import { ModalBaseFunctionProps } from '../../Modal/Modal.types';

export const DatePickerElementsPropsContext = createContext<
  ReturnType<typeof useDateTimePickerField>
>({
  containerOpen: false,
  containerRef: {} as RefObject<HTMLDivElement>,
  modalRef: {} as RefObject<ModalBaseFunctionProps>,
  setContainerOpen: () => {},
  isMobile: false,
  currentCalendarTab: 0,
  setCurrentCalendarTab: () => {},
  pickerCurrentTab: 0,
  setPickerCurrentTab: () => {},
  matchesScreen: false,
  label: '',
  name: '',
  onChange: () => {},
});

export const DatePickerElementsPropsProvider: FC<ReturnType<
  typeof useDateTimePickerField
>> = ({ children, ...values }) => {
  const memoValue = useMemo(() => ({ ...values }), [values]);
  return (
    <DatePickerElementsPropsContext.Provider value={memoValue}>
      {children}
    </DatePickerElementsPropsContext.Provider>
  );
};
