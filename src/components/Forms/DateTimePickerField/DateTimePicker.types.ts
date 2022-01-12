import { Dispatch, RefObject, SetStateAction } from 'react';
import { useTaqweem } from 'react-taqweem';
import { DateFormatType, LanguagesType } from 'react-taqweem/types';
import { ButtonVarientType } from '../../Button/Button.types';
import { ModalBaseFunctionProps } from '../../Modal/Modal.types';
import { CommonFieldProps } from '../FormFields.types';

export type DateTimePickerType = Omit<CommonFieldProps, 'type' | 'label'> & {
  initialDate: Date;
  dateFormat?: DateFormatType;
  lang?: LanguagesType;
  timeFormat?: '12' | '24';
  label: string;
  name: string;
  type?: 'date' | 'time' | 'date-time';
  onChange: (date: Date) => void;
};

export type DateTimePickerContexProps = {
  isMobile: boolean;
  containerOpen: boolean;
  pickerCurrentTab: number;
  setPickerCurrentTab: Dispatch<SetStateAction<number>>;
  hours: number;
  setHours: Dispatch<SetStateAction<number>>;
  minutes: number;
  setMinutes: Dispatch<SetStateAction<number>>;
  meridiem: 'am' | 'pm';
  setMeridiem: Dispatch<SetStateAction<'am' | 'pm'>>;
  pick: 'hours' | 'minutes';
  setPick: Dispatch<SetStateAction<'hours' | 'minutes'>>;
  currentCalendarTab: number;
  setCurrentCalendarTab: Dispatch<SetStateAction<number>>;
  inputVarient: ButtonVarientType;
  modalRef: RefObject<ModalBaseFunctionProps>;
  containerRef: RefObject<HTMLDivElement>;
  matchesScreen: boolean;
} & Omit<
  DateTimePickerType,
  'background' | 'container' | 'isCloseOnClickOutside' | 'onChange'
> &
  ReturnType<typeof useTaqweem>;
