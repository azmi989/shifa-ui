import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Button, Container, IconButton } from '../..';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import { DateTimePickerContex } from './DateTimePickerContex';

export const CalendarMonthList = ({
  setCurrentTab,
}: {
  setCurrentTab: Dispatch<SetStateAction<number>>;
}) => {
  const { yearProps, goToMonth, type, setCurrentCalendarTab } = useContext(
    DateTimePickerContex
  );
  return (
    <Container
      fillContainer
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      rowGap="1rem"
    >
      <Container disableGutter>
        <IconButton
          rounded="rectangle"
          icon={
            type === 'date' || type === 'date-time' ? <DateIcon /> : <Clock />
          }
          size="md"
          onClick={() => setCurrentTab(1)}
        />
      </Container>
      <Container
        disableGutter
        paddingBlock="0.5rem"
        height="100%"
        display="grid"
        gridTemplateColumns="repeat(3,auto)"
        gridGap="2rem"
      >
        {yearProps.yearMonths.map(month => (
          <Button
            size="xs"
            key={month.month}
            varient="base"
            elevation="none"
            textTransform="capitalize"
            width="100%"
            onClick={() => {
              goToMonth(new Date(yearProps.year, month.monthNumber - 1));
              setCurrentCalendarTab(1);
            }}
          >
            {month.month}
          </Button>
        ))}
      </Container>
    </Container>
  );
};
