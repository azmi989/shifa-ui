import React, { Dispatch, FC, SetStateAction, useContext } from 'react';
import { usePickerInput } from '../../../hooks';
import { DateTimePickerContex } from './DateTimePickerContex';
import { IconButton } from '../../';
import DateIcon from '../../../icons/DateIcon';
import Clock from '../../../icons/Clock';
import { Container } from '../../Container';
import { TextInputField } from '..';

export const PickerInput: FC<{
  setContainerOpen: Dispatch<SetStateAction<boolean>>;
}> = ({ setContainerOpen, children }) => {
  const pickerInputProps = usePickerInput();
  const {
    type,
    isMobile,
    isError,
    modalRef,
    label,
    inputVarient,
    containerOpen,
  } = useContext(DateTimePickerContex);

  return (
    <Container position="relative" width="100%">
      <TextInputField
        name="dateTimePickerInput"
        varient={inputVarient}
        label={label}
        disableFloat
        forceFocus
        isError={isError}
        width="100%"
        renderElement={
          <IconButton
            varient="contained"
            elevation="none"
            position="absolute"
            top={inputVarient === 'outlined' ? '0rem' : '25%'}
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
        {...pickerInputProps}
      />
      {children}
    </Container>
  );
};
