import React, { memo, useContext } from 'react';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import { Container } from '../../Container';
import { IconButton } from '../../IconButton';
import { StyledSwipableView } from '../../Styles';
import { CalendarComponent } from './CalendarComponent';
import { ClockComponent } from './ClockComponent';
import { DatePickerElementsPropsContext } from './DatePickerElementsPropsContext';

export const PickerComponent = memo(() => {
  const { type, pickerCurrentTab, setPickerCurrentTab } = useContext(
    DatePickerElementsPropsContext
  );
  console.log('PickerComponent');
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
            id="calendar-main-tab-1"
            direction="left"
          >
            <CalendarComponent />
          </StyledSwipableView>
          <StyledSwipableView
            id="clock-main-tab-2"
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
});
