import { DateFormatType, LanguagesType } from 'react-datetime-hook';
import { CommonFieldProps } from '../FormFields.types';

export type DateTimePickerProps = Omit<CommonFieldProps, 'type'> & {
  initialDate: Date;
  dateFormat?: DateFormatType;
  lang?: LanguagesType;
  timeFormat?: '12' | '24';
  type?: 'date' | 'time' | 'date-time';
  onChange: (date: Date) => void;
};
