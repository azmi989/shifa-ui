import React, { useState } from 'react';

import { StyledSwipableView } from '../../Styles';
import { CalendarMain } from './CalendarMain';
import { CalendarMonthList } from './CalendarMonthList';

export const CalendarComponent = () => {
  const [currentTab, setCurrentTab] = useState(0);
  return (
    <>
      <StyledSwipableView
        width="100%"
        currentTabID={currentTab}
        tab={0}
        direction="left"
        id="calendar-head"
        justifyContent="space-between"
        flexDirection="column"
        rowGap="1rem"
        height="100%"
      >
        <CalendarMain setCurrentTab={setCurrentTab} />
      </StyledSwipableView>
      <StyledSwipableView
        width="100%"
        currentTabID={currentTab}
        tab={1}
        direction="left"
      >
        <CalendarMonthList setCurrentTab={setCurrentTab} />
      </StyledSwipableView>
    </>
  );
};

//calendar
{
  /* <Container
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
        </Container> */
}

//month list
{
  /* <Container disableGutter>
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
        </Container> */
}
//years list

{
  /* <Container disableGutter>
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
</StandardPagination> */
}
