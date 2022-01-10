import React, { useContext } from 'react';
import { useMediaQuery } from 'usehooks-ts';
import { Button, Container, IconButton, Label } from '../..';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import ExpandLess from '../../../icons/ExpandLess';
import ExpandMore from '../../../icons/ExpandMore';
import { defaultTheme } from '../../../theme';
import { StandardPagination } from '../../Pagination';
import { StyledSwipableView } from '../../Styles';
import { DateTimePickerContex } from './DateTimePickerContex';
import { StyledGeneralLabel } from './StyledGeneralLabel.styled';

const CalendarComponent = () => {
  const {
    yearProps,
    goToMonth,
    goToYear,
    goToPrevMonth,
    goToNextMonth,
    weekDays,
    monthProps,
    lang,
    renderMonth,
    selectDate,
    date,
    type,
    currentCalendarTab,
    setCurrentCalendarTab,
  } = useContext(DateTimePickerContex);
  const currentYear = new Date().getFullYear();
  const maxYear = currentYear + 10;
  const minYear = currentYear - 70;
  const yearsList = Array.from(
    { length: maxYear - minYear },
    (_, i) => minYear - 1 + i
  );
  const matchesScreen = useMediaQuery(
    `(max-width: ${defaultTheme.themeResponsiveScreen})`
  );
  const monthsComponent = () =>
    yearProps.yearMonths.map(month => (
      <Button
        size="xs"
        key={month.month}
        varient="base"
        elevation="none"
        textTransform="capitalize"
        onClick={() => {
          goToMonth(new Date(yearProps.year, month.monthNumber - 1));
          setCurrentCalendarTab(1);
        }}
      >
        {month.month}
      </Button>
    ));
  const yearsListComponent = () =>
    yearsList.map(year => (
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
    ));
  return (
    <>
      <StyledSwipableView
        tab={1}
        currentTabID={currentCalendarTab}
        minWidth="0rem"
        width="100%"
        flowType="flex"
        elementType="container"
        flexDirection="column"
        rowGap="1rem"
        direction="left"
      >
        <Container
          id="head"
          justifyContent="space-between"
          flexDirection="column"
          rowGap="1rem"
          height="100%"
          width="100%"
        >
          <Container justifyContent="space-between">
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
                onClick={() => setCurrentCalendarTab(3)}
                textTransform="capitalize"
              >
                {yearProps.year},
              </Button>
              <Button
                size="xs"
                varient="base"
                elevation="none"
                onClick={() => setCurrentCalendarTab(2)}
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
            flowType="grid"
            elementType="container"
            gridTemplateRows="1fr"
            gridTemplateColumns="repeat(7,1fr)"
            height="100%"
            width="100%"
          >
            {weekDays.map(weekDay => (
              <Label
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
                key={weekDay}
                children={
                  lang?.startsWith('ar') ? weekDay : weekDay?.substring(0, 3)
                }
              />
            ))}
          </Container>
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
                  date.getDate() === day.date &&
                  date.getMonth() + 1 === day.month
                }
                key={`${day.month}-${day.date}`}
                style={{ placeSelf: 'center' }}
              >
                {day.date}
              </StyledGeneralLabel>
            );
          })}
        </Container>
      </StyledSwipableView>
      <StyledSwipableView
        alignItems="center"
        flexDirection="column"
        justifyContent="space-between"
        tab={2}
        currentTabID={currentCalendarTab}
        position="absolute"
        inset="0%"
        direction="left"
      >
        <Container disableGutter>
          <IconButton
            rounded="rectangle"
            icon={
              type === 'date' || type === 'date-time' ? <DateIcon /> : <Clock />
            }
            size="s"
            onClick={() => setCurrentCalendarTab(1)}
          />
        </Container>
        <Container
          disableGutter
          paddingBlock="0.5rem"
          height="100%"
          flowType="grid"
          elementType="container"
          gridTemplateColumns="repeat(3,auto)"
          gridGap="2rem"
        >
          {monthsComponent()}
        </Container>
      </StyledSwipableView>
      <StyledSwipableView
        flexDirection="column"
        rowGap="0.5rem"
        tab={3}
        currentTabID={currentCalendarTab}
        position="absolute"
        inset="0%"
        direction="left"
      >
        <Container disableGutter>
          <IconButton
            rounded="rectangle"
            icon={
              type === 'date' || type === 'date-time' ? <DateIcon /> : <Clock />
            }
            size="s"
            onClick={() => setCurrentCalendarTab(1)}
          />
        </Container>
        <StandardPagination
          pageSize={12}
          disableFlex
          disableGutter
          container={{
            //@ts-ignore
            flowType: 'grid',
            elementType: 'container',
            paddingBlock: '2rem',
            gridTemplateColumns: 'repeat(4,auto)',
            gridTemplateRows: 'repeat(3,auto)',
            columnGap: '1rem',
            rowGap: '2rem',
          }}
        >
          {yearsListComponent()}
        </StandardPagination>
      </StyledSwipableView>
    </>
  );
};

export default CalendarComponent;
