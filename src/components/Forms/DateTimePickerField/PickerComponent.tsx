import React, { useContext } from 'react';
import { Container, IconButton } from '../..';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import { StyledSwipableView } from '../../Styles';
import CalendarComponent from './CalendarComponent';
import ClockComponent from './ClockComponent';
import { DateTimePickerContex } from './DateTimePickerContex';

const PickerComponent = () => {
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
            position={pickerCurrentTab === 1 ? undefined : 'absolute'}
            direction="left"
          >
            <CalendarComponent />
          </StyledSwipableView>
          <StyledSwipableView
            flexDirection="column"
            currentTabID={pickerCurrentTab}
            direction="left"
            tab={2}
            position={pickerCurrentTab === 2 ? undefined : 'absolute'}
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

export default PickerComponent;
