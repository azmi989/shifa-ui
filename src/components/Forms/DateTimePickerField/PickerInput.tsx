import React, { FC, memo, useContext } from 'react';
import { useDateTimePickerProps } from 'react-datetime-hook';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import { Container } from '../../Container';
import { IconButton } from '../../IconButton';
import { TextInputField } from '../TextInputField';
import { DatePickerElementsPropsContext } from './DatePickerElementsPropsContext';

export const PickerInput: FC = memo(({ children }) => {
  const {
    type,
    isMobile,
    isError,
    modalRef,
    label,
    varient,
    containerOpen,
    setContainerOpen,
  } = useContext(DatePickerElementsPropsContext);
  const { inputsProps } = useDateTimePickerProps();

  return (
    <Container id="picker-inputContainer" position="relative" width="100%">
      <TextInputField
        name="dateTimePickerInput"
        varient={varient}
        label={label}
        disableFloat
        forceFocus
        isError={isError}
        {...inputsProps.date}
        onFocus={() =>
          isMobile ? modalRef.current?.openModal() : setContainerOpen(true)
        }
        renderElement={
          <IconButton
            varient="contained"
            elevation="none"
            position="absolute"
            top={varient === 'outlined' ? '0rem' : '25%'}
            right="1rem"
            size="md"
            style={{ pointerEvents: containerOpen ? 'none' : undefined }}
            icon={
              type === 'date' ? (
                <DateIcon />
              ) : type === 'time' ? (
                <Clock />
              ) : (
                <DateIcon />
              )
            }
            onClick={() =>
              isMobile ? modalRef.current?.openModal() : setContainerOpen(true)
            }
          />
        }
      />
      {children}
    </Container>
  );
});
