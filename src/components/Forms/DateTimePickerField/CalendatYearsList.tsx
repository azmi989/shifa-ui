import React, { Dispatch, SetStateAction, useContext } from 'react';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import { StandardPagination } from '../../Pagination';
import { Container } from '../../Container';
import { IconButton } from '../../IconButton';
import { Button } from '../../Button';
import { DatePickerElementsPropsContext } from './DatePickerElementsPropsContext';
import { useDateTimePickerContext } from 'use-datetime-picker';

export const CalendatYearsList = ({
  setCurrentTab,
}: {
  setCurrentTab: Dispatch<SetStateAction<number>>;
}) => {
  const currentYear = new Date().getFullYear();
  const { type } = useContext(DatePickerElementsPropsContext);
  const { goToYear, yearProps } = useDateTimePickerContext();

  const maxYear = currentYear + 10;
  const minYear = currentYear - 70;
  const yearsList = Array.from(
    { length: maxYear - minYear },
    (_, i) => minYear - 1 + i
  );
  console.log('CalendatYearsList');

  return (
    <Container
      fillContainer
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Container fitContent>
        <IconButton
          rounded="rectangle"
          icon={
            type === 'date' || type === 'date-time' ? <DateIcon /> : <Clock />
          }
          size="md"
          onClick={() => setCurrentTab(1)}
        />
      </Container>
      <StandardPagination
        pageSize={12}
        fillContainer
        container={{
          fillContainer: true,
          display: 'grid',
          paddingBlock: '2rem',
          gridTemplateColumns: 'repeat(4,auto)',
          gridTemplateRows: 'repeat(3,auto)',
          columnGap: '1rem',
          rowGap: '2rem',
        }}
      >
        {yearsList.map(year => (
          <Button
            size="xs"
            key={year}
            varient="base"
            elevation="none"
            textTransform="capitalize"
            active={year === yearProps.year}
            onClick={() => {
              goToYear(year);
              setCurrentTab(1);
            }}
          >
            {year}
          </Button>
        ))}
      </StandardPagination>
    </Container>
  );
};
