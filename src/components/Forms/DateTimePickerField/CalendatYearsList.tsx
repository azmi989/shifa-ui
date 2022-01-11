import React, { useContext, useState } from 'react';
import { DateTimePickerContex } from './DateTimePickerContex';
import { Button } from '../../';

export const CalendatYearsList = () => {
  const currentYear = new Date().getFullYear();
  const { goToYear, setCurrentCalendarTab } = useContext(DateTimePickerContex);

  const maxYear = currentYear + 10;
  const minYear = currentYear - 70;
  const yearsList = Array.from(
    { length: maxYear - minYear },
    (_, i) => minYear - 1 + i
  );

  return (
    <>
      {yearsList.map(year => (
        <Button
          size="xs"
          key={year}
          varient="base"
          elevation="none"
          textTransform="capitalize"
          onClick={() => {
            goToYear(new Date(year, 0, 1));
            setCurrentCalendarTab(1);
          }}
        >
          {year}
        </Button>
      ))}
    </>
  );
};
