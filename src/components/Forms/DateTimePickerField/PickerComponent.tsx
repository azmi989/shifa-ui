import React, { useContext } from 'react';
import { Container, IconButton } from '../..';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import { StyledSwipableView } from '../../Styles';
import { CalendarComponent } from './CalendarComponent';
import ClockComponent from './ClockComponent';
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
            width="100%"
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CalendarComponent />
          </StyledSwipableView>
          <StyledSwipableView
            flexDirection="column"
            id="clock-main-tab"
            currentTabID={pickerCurrentTab}
            direction="left"
            width="100%"
            tab={2}
            height="100%"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <ClockComponent />
          </StyledSwipableView>
          <Container
            width="50%"
            justifyContent="space-between"
            alignItems="center"
            paddingTop="1rem"
          >
            <IconButton
              icon={<Clock />}
              onClick={() => setPickerCurrentTab(2)}
            />
            <IconButton
              icon={<DateIcon />}
              onClick={() => setPickerCurrentTab(1)}
            />
          </Container>
        </>
      );
  }
};
