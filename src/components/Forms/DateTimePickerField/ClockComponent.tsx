import React from 'react';
import { Arrow } from '../../../assets/images/svg/Arrow';
import Clock from '../../../assets/images/svg/Clock/Clock';
import { getColor } from '../../../theme/utils';
import { Container } from '../../Container';
import { StyledPaginationButton } from '../../Pagination/PaginationButton.styled';
import { Typography } from '../../Typography';
import { NumberInputField } from '../NumberInputField';
import { useDateTimePickerProps } from 'react-datetime-hook';

export const ClockComponent = () => {
  const {
    inputsProps,
    timeProps,
    pickClockArrow,
    timeFormatArg,
  } = useDateTimePickerProps();
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
              : inputsProps.hours.value * 30
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
          {...inputsProps.hours}
        />
        <Typography>:</Typography>
        <NumberInputField
          name="clockMinutes"
          label="Minutes"
          {...inputsProps.minutes}
        />
        {timeFormatArg === '12' ? (
          <StyledPaginationButton
            size="md"
            varient={timeProps.meridiem === 'pm' ? 'contained' : 'outlined'}
            elevation="none"
            textTransform="lowercase"
            {...inputsProps.meridiem}
          >
            {timeProps.meridiem}
          </StyledPaginationButton>
        ) : null}
      </Container>
    </Container>
  );
};
