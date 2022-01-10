import React, { ChangeEvent, FocusEvent, useContext } from 'react';
import { Container, Typography } from '../..';
import { getColor } from '../../../theme/utils';
import { StyledPaginationButton } from '../../Pagination/PaginationButton.styled';
import { StyledInputContainer, StyledInput } from '../InputContainer.styled';
import { Arrow } from '../../../assets/images/svg/Arrow';
import { DateTimePickerContex } from './DateTimePickerContex';
import Clock from '../../../assets/images/svg/Clock/Clock';

const ClockComponent = () => {
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
  const hoursChanged = (str: string) => {
    const hour = parseInt(str);
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
  const minutesChanged = (str: string) => {
    const minute = parseInt(str);
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
  const onHoursChange = (event: ChangeEvent<HTMLInputElement>) => {
    hoursChanged(event.target.value);
  };
  const onMinutesChange = (event: ChangeEvent<HTMLInputElement>) => {
    minutesChanged(event.target.value);
  };
  const onHoursBlur = (event: FocusEvent<HTMLInputElement>) => {
    hoursChanged(event.target.value);
  };
  const onMinutesBlur = (event: FocusEvent<HTMLInputElement>) => {
    minutesChanged(event.target.value);
  };
  return (
    <Container
      disableGutter
      id="clock"
      padding="0 2rem"
      flexDirection="column"
      alignItems="center"
      rowGap="1rem"
    >
      clock
    </Container>
  );
};

export default ClockComponent;
{
  /* <Container position="relative">
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
      <Container flexDirection="column"></Container>
      <Container
        columnGap="0.5rem"
        justifyContent="center"
        alignItems="center"
        width="50%"
      >
        <StyledInputContainer
          varient={varient || 'base'}
          position="relative"
          justifyContent="center"
          alignItems="end"
          height="2rem"
        >
          <StyledInput
            value={hours}
            type="number"
            min={timeFormat === '12' ? 1 : 0}
            max={timeFormat === '12' ? 12 : 24}
            onChange={onHoursChange}
            onBlur={onHoursBlur}
            onFocus={() => setPick('hours')}
            onClick={() => setPick('hours')}
            style={{ width: '3rem', height: '100%' }}
          />
        </StyledInputContainer>
        <Typography>:</Typography>
        <StyledInputContainer
          varient={varient || 'base'}
          position="relative"
          justifyContent="center"
          alignItems="end"
          height="2rem"
        >
          <StyledInput
            value={minutes}
            type="number"
            min={0}
            max={59}
            onChange={onMinutesChange}
            onBlur={onMinutesBlur}
            onFocus={() => setPick('minutes')}
            onClick={() => setPick('minutes')}
            style={{ width: '3rem', height: '100%' }}
          />
        </StyledInputContainer>
        {timeFormat === '12' ? (
          <StyledPaginationButton
            size="md"
            varient={meridiem === 'pm' ? 'contained' : 'outlined'}
            elevation="none"
            textTransform="lowercase"
            style={{
              height: '2rem',
              paddingBottom: '0.9rem',
            }}
            onClick={onSetMeridiem}
          >
            {meridiem}
          </StyledPaginationButton>
        ) : null}
      </Container> */
}
