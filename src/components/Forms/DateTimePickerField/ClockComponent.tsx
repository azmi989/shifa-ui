import React, { useEffect } from 'react';
import { useDateTimePickerContext } from 'use-datetime-picker';
import { Arrow } from '../../../assets/images/svg/Arrow';
import Clock from '../../../assets/images/svg/Clock/Clock';
import { getColor } from '../../../theme/utils';
import { Container } from '../../Container';
import { StyledPaginationButton } from '../../Pagination/PaginationButton.styled';
import { Typography } from '../../Typography';
import { NumberInputField } from '../NumberInputField';

export const ClockComponent = () => {
  const {
    timeProps,
    inputsProps,
    pickClockArrow,
    setPickClockArrow,
    updateDate,
    date,
    increaseHours,
    increaseMinutes,
    decreaseHours,
    decreaseMinutes,
  } = useDateTimePickerContext();
  useEffect(() => {
    console.log(date);
  }, [date]);

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
            pickClockArrow === 'minutes'
              ? inputsProps.minutes.value * 6
              : pickClockArrow === 'hours'
              ? inputsProps.hours.value * 30
              : '0'
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
          onIncreaseClicked={increaseHours}
          onDecreaseClicked={decreaseHours}
          {...inputsProps.hours}
        />
        <Typography>:</Typography>
        <NumberInputField
          onIncreaseClicked={increaseMinutes}
          onDecreaseClicked={decreaseMinutes}
          {...inputsProps.minutes}
        />
        {timeProps.meridiem && (
          <StyledPaginationButton
            size="md"
            varient={timeProps.meridiem === 'pm' ? 'contained' : 'outlined'}
            elevation="none"
            textTransform="lowercase"
            {...inputsProps.meridiem}
          >
            {timeProps.meridiem}
          </StyledPaginationButton>
        )}
      </Container>
    </Container>
  );
};
