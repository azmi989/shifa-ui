import React, { useState } from 'react';
import { Container } from '../../Container';
import { StyledSwipableView } from '../../Styles';
import { CalendarMain } from './CalendarMain';
import { CalendarMonthList } from './CalendarMonthList';
import { CalendarYearsList } from './CalendarYearsList';

export const CalendarComponent = () => {
  const [currentTab, setCurrentTab] = useState(1);
  console.log('CalendarComponent');
  return (
    <Container width="100%" minHeight="18rem" overflow="hidden">
      <StyledSwipableView currentTabID={currentTab} tab={1} direction="left">
        <CalendarMain setCurrentTab={setCurrentTab} />
      </StyledSwipableView>
      <StyledSwipableView currentTabID={currentTab} tab={2} direction="left">
        <CalendarMonthList setCurrentTab={setCurrentTab} />
      </StyledSwipableView>
      <StyledSwipableView currentTabID={currentTab} tab={3} direction="left">
        <CalendarYearsList setCurrentTab={setCurrentTab} />
      </StyledSwipableView>
    </Container>
  );
};
