import React, { Dispatch, SetStateAction, useContext } from 'react';
import { useDateTimePickerProps } from 'use-datetime-picker';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import { Button } from '../../Button';
import { Container } from '../../Container';
import { IconButton } from '../../IconButton';
import { DatePickerElementsPropsContext } from './DatePickerElementsPropsContext';

export const CalendarMonthList = ({
  setCurrentTab,
}: {
  setCurrentTab: Dispatch<SetStateAction<number>>;
}) => {
  const { type, setCurrentCalendarTab } = useContext(
    DatePickerElementsPropsContext
  );
  const { yearProps, goToMonth, monthProps } = useDateTimePickerProps();
  console.log('CalendarMonthList');

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
            active={month.monthNumber === monthProps.monthNumber}
            onClick={() => {
              goToMonth(month.monthNumber - 1);
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
