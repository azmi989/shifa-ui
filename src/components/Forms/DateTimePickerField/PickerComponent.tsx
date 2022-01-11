import React, { useContext } from 'react';
import { Container, IconButton } from '../..';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import { StyledSwipableView } from '../../Styles';
import { CalendarComponent } from './CalendarComponent';
import { ClockComponent } from './ClockComponent';
import { DateTimePickerContex } from './DateTimePickerContex';

export const PickerComponent = () => {
  const { type, pickerCurrentTab, setPickerCurrentTab } = useContext(
    DateTimePickerContex
  );
  switch (type) {
    case 'date':
      return <CalendarComponent />;
    case 'time':
      return <ClockComponent />;
    default:
      return (
        <>
          <StyledSwipableView
            currentTabID={pickerCurrentTab}
            tab={1}
            id="calendar-main-tab"
            direction="left"
          >
            <CalendarComponent />
          </StyledSwipableView>
          <StyledSwipableView
            id="clock-main-tab"
            currentTabID={pickerCurrentTab}
            direction="left"
            tab={2}
          >
            <ClockComponent />
          </StyledSwipableView>
          <Container
            width="50%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            paddingTop="1rem"
          >
            <IconButton
              size="lg"
              icon={<Clock />}
              onClick={() => setPickerCurrentTab(2)}
            />
            <IconButton
              size="lg"
              icon={<DateIcon />}
              onClick={() => setPickerCurrentTab(1)}
            />
          </Container>
        </>
      );
  }
};
