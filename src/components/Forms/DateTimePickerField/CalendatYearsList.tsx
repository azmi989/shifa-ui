import React, { Dispatch, SetStateAction, useContext } from 'react';
import { DateTimePickerContex } from './DateTimePickerContex';
import { Button, Container, IconButton } from '../../';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import { StandardPagination } from '../../Pagination';

export const CalendatYearsList = ({
  setCurrentTab,
}: {
  setCurrentTab: Dispatch<SetStateAction<number>>;
}) => {
  const currentYear = new Date().getFullYear();
  const { goToYear, type, yearProps } = useContext(DateTimePickerContex);

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
              goToYear(new Date(year, 0, 1));
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
