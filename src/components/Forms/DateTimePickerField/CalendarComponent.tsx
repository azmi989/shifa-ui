import React, { memo, useState } from 'react';
import { Container } from '../..';
import { StyledSwipableView } from '../../Styles';
import { CalendarMain } from './CalendarMain';
import { CalendarMonthList } from './CalendarMonthList';
import { CalendatYearsList } from './CalendatYearsList';

const CalendarComponentToMemo = () => {
  const [currentTab, setCurrentTab] = useState(1);
  return (
    <Container width="100%" minHeight="18rem" overflow="hidden">
      <StyledSwipableView currentTabID={currentTab} tab={1} direction="left">
        <CalendarMain setCurrentTab={setCurrentTab} />
      </StyledSwipableView>
      <StyledSwipableView currentTabID={currentTab} tab={2} direction="left">
        <CalendarMonthList setCurrentTab={setCurrentTab} />
      </StyledSwipableView>
      <StyledSwipableView currentTabID={currentTab} tab={3} direction="left">
        <CalendatYearsList setCurrentTab={setCurrentTab} />
      </StyledSwipableView>
    </Container>
  );
};

export const CalendarComponent = memo(CalendarComponentToMemo);
