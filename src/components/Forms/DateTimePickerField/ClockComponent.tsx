import React, { useContext, FocusEvent, memo } from 'react';
import { Container, NumberInputField, Typography } from '../..';
import { Arrow } from '../../../assets/images/svg/Arrow';
import Clock from '../../../assets/images/svg/Clock/Clock';
import { getColor } from '../../../theme/utils';
import { StyledPaginationButton } from '../../Pagination/PaginationButton.styled';
import { DateTimePickerContex } from './DateTimePickerContex';

export const ClockComponentToMemo = () => {
  const {
    date,
    timeFormat,
    varient,
    updateDate,
    hours,
    setHours,
    minutes,
    setMinutes,
    meridiem,
    setMeridiem,
    pick,
    setPick,
  } = useContext(DateTimePickerContex);
  const onSetMeridiem = () => {
    setMeridiem(prev => (prev === 'am' ? 'pm' : 'am'));
  };
  const hoursChanged = (hour: number) => {
    setHours(hour);
    updateDate(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        hour,
        date.getMinutes()
      )
    );
  };
  const minutesChanged = (minute: number) => {
    setMinutes(minute);
    updateDate(
      new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        minute
      )
    );
  };
  const onHoursChange = (hour: number) => {
    hoursChanged(hour);
  };
  const onMinutesChange = (minute: number) => {
    minutesChanged(minute);
  };
  const onHoursBlur = (event: FocusEvent<HTMLInputElement>) => {
    hoursChanged(Number(event.target.value));
  };
  const onMinutesBlur = (event: FocusEvent<HTMLInputElement>) => {
    minutesChanged(Number(event.target.value));
  };
  return (
    <Container
      fillContainer
      id="clock"
      padding="0 2rem"
      display="flex"
      flexDirection="column"
      alignItems="center"
      rowGap="1rem"
    >
      <Container fillContainer position="relative">
        <Clock width={160} height={160} color={getColor('primary')} />
        <Arrow
          color={getColor('primary')}
          position="absolute"
          top="50%"
          left="50%"
          transform={`translateX(-50%) translateY(-100%) rotate(${
            pick === 'minutes' ? minutes * 6 : hours * 30
          }deg)`}
          transformOrigin="center bottom"
        />
      </Container>
      <Container
        fillContainer
        display="flex"
        flexDirection="column"
      ></Container>
      <Container
        display="flex"
        flexDirection="row"
        columnGap="0.5rem"
        justifyContent="center"
        alignItems="center"
        width="50%"
      >
        <NumberInputField
          name="clockHours"
          label="Hours"
          value={hours}
          min={timeFormat === '12' ? 1 : 0}
          max={timeFormat === '12' ? 12 : 24}
          onChange={onHoursChange}
          onBlur={onHoursBlur}
          onFocus={() => setPick('hours')}
          onClick={() => setPick('hours')}
        />
        <Typography>:</Typography>
        <NumberInputField
          name="clockMinutes"
          label="Minutes"
          value={minutes}
          min={0}
          max={59}
          onChange={onMinutesChange}
          onBlur={onMinutesBlur}
          onFocus={() => setPick('minutes')}
          onClick={() => setPick('minutes')}
        />
        {timeFormat === '12' ? (
          <StyledPaginationButton
            size="md"
            varient={meridiem === 'pm' ? 'contained' : 'outlined'}
            elevation="none"
            textTransform="lowercase"
            // style={{
            //   height: '2rem',
            //   paddingBottom: '0.9rem',
            // }}
            onClick={onSetMeridiem}
          >
            {meridiem}
          </StyledPaginationButton>
        ) : null}
      </Container>
    </Container>
  );
};
export const ClockComponent = memo(ClockComponentToMemo);
