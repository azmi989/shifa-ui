import React, { memo, useContext } from 'react';
import { Modal, Container } from '../..';
import { DateTimePickerContex } from './DateTimePickerContex';
import { PickerComponent } from './PickerComponent';

const PickerContainerToMemo = () => {
  const { isMobile, containerOpen, containerRef, modalRef, type } = useContext(
    DateTimePickerContex
  );
  return (
    <>
      {isMobile ? (
        <Modal
          closeOnClickOutside
          ref={modalRef}
          container={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: type === 'date-time' ? 'flex-end' : 'center',
            alignItems: 'center',
            width: '95%',
            height: '23rem',
            padding: '1rem',
            overflow: 'hidden',
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
          display="flex"
          flexDirection="column"
          justifyContent={type === 'date-time' ? 'flex-end' : 'center'}
          alignItems="center"
          top="4rem"
          left="0rem"
          width="23rem"
          height="23rem"
          transition="transform 100ms ease-in-out"
          transformOrigin="center top"
          transform={containerOpen ? 'scale(1,1)' : 'scale(1,0)'}
          ref={containerRef}
          zIndex="max"
          padding="1rem"
          overflow="hidden"
        >
          <PickerComponent />
        </Container>
      )}
    </>
  );
};

export const PickerContainer = memo(PickerContainerToMemo);
