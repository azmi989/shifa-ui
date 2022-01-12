import React, { Dispatch, FC, SetStateAction, useContext } from 'react';
import { TextInputField } from '..';
import { Container, IconButton } from '../..';
import { usePickerInput } from '../../../hooks';
import Clock from '../../../icons/Clock';
import DateIcon from '../../../icons/DateIcon';
import { DateTimePickerContex } from './DateTimePickerContex';

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
    <Container id="picker-inputContainer" position="relative" width="100%">
      <TextInputField
        name="dateTimePickerInput"
        varient={inputVarient}
        label={label}
        disableFloat
        forceFocus
        isError={isError}
        onFocus={() =>
          isMobile ? modalRef.current?.openModal() : setContainerOpen(true)
        }
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
