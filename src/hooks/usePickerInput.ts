import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { addZerosToYear, addOnes } from 'react-taqweem';
import { DateTimePickerContex } from '../components/Forms/DateTimePickerField/DateTimePickerContex';

export const usePickerInput = () => {
  const { date, updateDate } = useContext(DateTimePickerContex);

  const getDateInputValue = (year: number, month: number, day: number) =>
    `${day ? day : ''}/${month ? month : ''}/${year ? year : '1900'}`;

  const [dateInputValue, setDateInputValue] = useState(
    getDateInputValue(date.getFullYear(), date.getMonth() + 1, date.getDate())
  );
  const getDateFromInputEvent = (event: string) =>
    event.split('/').map(item => parseInt(item));
  const handelChange = (str: string) => {
    const [day, month, year] = getDateFromInputEvent(str);
    setDateInputValue(getDateInputValue(year, month, day));
    updateDate(
      new Date(
        addZerosToYear(year),
        addOnes(month) - 1,
        addOnes(day),
        date.getHours(),
        date.getHours()
      )
    );
  };
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const [day, month, year] = getDateFromInputEvent(event.target.value);
    setDateInputValue(getDateInputValue(year, month, day));
  };

  const onBlur = (event: ChangeEvent<HTMLInputElement>) => {
    handelChange(event.target.value);
  };
  useEffect(() => {
    setDateInputValue(
      getDateInputValue(date.getFullYear(), date.getMonth() + 1, date.getDate())
    );
  }, [date]);
  return {
    dateInputValue,
    onChange,
    onBlur,
  };
};
