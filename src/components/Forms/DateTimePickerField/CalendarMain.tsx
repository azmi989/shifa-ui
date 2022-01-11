import React, { Dispatch, SetStateAction, useContext } from 'react';
import { Button, Container, IconButton, Label } from '../..';
import ExpandLess from '../../../icons/ExpandLess';
import ExpandMore from '../../../icons/ExpandMore';
import { DateTimePickerContex } from './DateTimePickerContex';
import { StyledGeneralLabel } from './StyledGeneralLabel.styled';

export const CalendarMain = ({
  setCurrentTab,
}: {
  setCurrentTab: Dispatch<SetStateAction<number>>;
}) => {
  const {
    yearProps,
    goToPrevMonth,
    goToNextMonth,
    weekDays,
    monthProps,
    lang,
    matchesScreen,
    date,
    renderMonth,
    selectDate,
  } = useContext(DateTimePickerContex);
  return (
    <>
      <Container
        justifyContent="space-between"
        id="calendar-head-nav"
        width="100%"
      >
        <IconButton
          aria-label="Previous month"
          icon={<ExpandMore style={{ transform: 'rotate(90deg)' }} />}
          size="s"
          varient="outlined"
          elevation={1}
          rounded="rectangle"
          onClick={goToPrevMonth}
        />
        <Container flexDirection="row" columnGap="0.5rem">
          <Button
            size="xs"
            varient="base"
            elevation="none"
            onClick={() => setCurrentTab(2)}
            textTransform="capitalize"
          >
            {yearProps.year},
          </Button>
          <Button
            size="xs"
            varient="base"
            elevation="none"
            onClick={() => setCurrentTab(1)}
            textTransform="capitalize"
          >
            {monthProps.month}
          </Button>
        </Container>
        <IconButton
          aria-label="Next month"
          icon={<ExpandLess style={{ transform: 'rotate(90deg)' }} />}
          size="s"
          varient="outlined"
          elevation={1}
          rounded="rectangle"
          onClick={goToNextMonth}
        />
      </Container>
      <Container
        id="weekdays"
        flowType="grid"
        elementType="container"
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
        flowType="grid"
        elementType="container"
        justifyContent="center"
        alignItems="center"
        gridTemplateColumns="repeat(7,1fr)"
        gridTemplateRows="repeat(5,1fr)"
        gridColumnGap={matchesScreen ? '0.25rem' : '1rem'}
        gridRowGap="0.25rem"
        height="100%"
        width="100%"
      >
        {renderMonth.map(day => {
          return (
            <StyledGeneralLabel
              disabled={day.month !== monthProps.monthNumber}
              onClick={() => selectDate(day.date)}
              selected={
                date.getDate() === day.date && date.getMonth() + 1 === day.month
              }
              key={`${day.month}-${day.date}`}
              style={{ placeSelf: 'center' }}
            >
              {day.date}
            </StyledGeneralLabel>
          );
        })}
      </Container>
    </>
  );
};
