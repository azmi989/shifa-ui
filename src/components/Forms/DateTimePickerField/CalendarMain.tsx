import React, { useContext } from 'react';
import { useDateTimePickerProps } from 'use-datetime-picker';
import ExpandLess from '../../../icons/ExpandLess';
import ExpandMore from '../../../icons/ExpandMore';
import { Button } from '../../Button';
import { Container } from '../../Container';
import { IconButton } from '../../IconButton';
import { Label } from '../../Typography';
import { DatePickerElementsPropsContext } from './DatePickerElementsPropsContext';
import { StyledGeneralLabel } from './StyledGeneralLabel.styled';

export const CalendarMain = ({
  setCurrentTab,
}: {
  setCurrentTab: React.Dispatch<React.SetStateAction<number>>;
}) => {
  const { lang, matchesScreen } = useContext(DatePickerElementsPropsContext);
  const {
    goToPrevMonth,
    yearProps,
    monthProps,
    goToNextMonth,
    weekDays,
    date,
    selectDay,
    getMonthDaysArray,
  } = useDateTimePickerProps();
  console.log('CalendarMain');
  return (
    <Container
      fillContainer
      display="flex"
      flexDirection="column"
      rowGap="1rem"
    >
      <Container
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        id="calendar-head-nav"
        width="100%"
      >
        <IconButton
          aria-label="Previous month"
          icon={<ExpandMore style={{ transform: 'rotate(90deg)' }} />}
          size="lg"
          varient="base"
          elevation="none"
          rounded="rectangle"
          onClick={goToPrevMonth}
        />
        <Container flexDirection="row" columnGap="0.5rem">
          <Button
            size="xs"
            varient="base"
            elevation="none"
            onClick={() => setCurrentTab(3)}
            textTransform="capitalize"
          >
            {yearProps.year},
          </Button>
          <Button
            size="xs"
            varient="base"
            elevation="none"
            onClick={() => setCurrentTab(2)}
            textTransform="capitalize"
          >
            {monthProps.month}
          </Button>
        </Container>
        <IconButton
          aria-label="Next month"
          icon={<ExpandLess style={{ transform: 'rotate(90deg)' }} />}
          size="lg"
          varient="base"
          elevation="none"
          rounded="rectangle"
          onClick={goToNextMonth}
        />
      </Container>
      <Container
        id="weekdays"
        display="grid"
        gridTemplateRows="1fr"
        gridTemplateColumns="repeat(7,1fr)"
        height="100%"
        width="100%"
      >
        {weekDays.map(weekDay => (
          <Label
            style={{ placeSelf: 'center' }}
            key={weekDay}
            children={
              lang?.startsWith('ar') ? weekDay : weekDay?.substring(0, 3)
            }
          />
        ))}
      </Container>
      <Container
        display="grid"
        justifyContent="center"
        alignItems="center"
        gridTemplateColumns="repeat(7,1fr)"
        gridTemplateRows="repeat(5,1fr)"
        gridColumnGap={matchesScreen ? '0.25rem' : '1rem'}
        gridRowGap="0.25rem"
        height="100%"
        width="100%"
      >
        {getMonthDaysArray().map(day => (
          <StyledGeneralLabel
            disabled={day.month !== monthProps.monthNumber}
            onClick={() => selectDay(day.date)}
            selected={
              date.getDate() === day.date && date.getMonth() + 1 === day.month
            }
            key={`${day.month}-${day.date}`}
            style={{ placeSelf: 'center' }}
          >
            {day.date}
          </StyledGeneralLabel>
        ))}
      </Container>
    </Container>
  );
};
