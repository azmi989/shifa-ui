import React from 'react';
import { Modal, Container } from '../..';
import { useDateTimePickerField } from '../../../hooks';
import { StyledInputContainer } from '../InputContainer.styled';
import { DateTimePickerType } from './DateTimePicker.types';
import { DateTimePickerContexProvider } from './DateTimePickerContex';
import PickerComponent from './PickerComponent';
import { PickerInput } from './PickerInput';

export const DateTimePickerField = ({
  initialDate,
  timeFormat = '12',
  lang = 'default',
  dateFormat = 'none',
  type = 'date-time',
  varient = 'outlined',
  label,
  name,
  isError,
  onChange,
}: DateTimePickerType) => {
  const picker = useDateTimePickerField({
    initialDate,
    timeFormat,
    label,
    lang,
    dateFormat,
    type,
    varient,
    name,
    isError,
    onChange,
  });
  return (
    <DateTimePickerContexProvider {...picker}>
      <StyledInputContainer
        disableGutter
        varient={varient || 'standard'}
        marginTop="0.5rem"
        marginBottom="2rem"
        paddingTop="0.5rem"
        paddingBottom="2rem"
        position="relative"
        justifyContent="space-between"
        alignItems="end"
        height="3.2rem"
        isError={isError}
      >
        <PickerInput setContainerOpen={picker.setContainerOpen} />
        {picker.isMobile ? (
          <Modal
            ref={picker.modalRef}
            container={{
              flowType: 'flex',
              elementType: 'container',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <PickerComponent />
          </Modal>
        ) : (
          <Container
            backgroundColor="paper"
            borderRadius="s"
            elevation={2}
            position="absolute"
            top="120%"
            flowType="flex"
            elementType="container"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            rowGap="1rem"
            transition="transform 100ms ease-in-out"
            transformOrigin="center top"
            transform={picker.containerOpen ? 'scale(1,1)' : 'scale(1,0)'}
            ref={picker.containerRef}
            zIndex="max"
            style={{ overflow: 'hidden' }}
          >
            <PickerComponent />
          </Container>
        )}
      </StyledInputContainer>
    </DateTimePickerContexProvider>
  );
};
