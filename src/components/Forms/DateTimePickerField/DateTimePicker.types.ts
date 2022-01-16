import { DateFormatType, LanguagesType } from 'use-datetime-picker';
import { CommonFieldProps } from '../FormFields.types';

export type DateTimePickerProps = Omit<CommonFieldProps, 'type'> & {
  initialDate: Date;
  dateFormat?: DateFormatType;
  lang?: LanguagesType;
  timeFormat?: '12' | '24';
  type?: 'date' | 'time' | 'date-time';
  onChange: (date: Date) => void;
};
