import React, { useContext } from 'react';
import { Modal, Container } from '../..';
import { DateTimePickerContex } from './DateTimePickerContex';
import { PickerComponent } from './PickerComponent';

export const PickerContainer = () => {
  const { isMobile, containerOpen, containerRef, modalRef } = useContext(
    DateTimePickerContex
  );
  return (
    <>
      {isMobile ? (
        <Modal closeOnClickOutside ref={modalRef}>
          <PickerComponent />
        </Modal>
      ) : (
        <Container
          backgroundColor="paper"
          borderRadius="s"
          elevation={2}
          position="absolute"
          flowType="flex"
          elementType="container"
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
          top="4rem"
          left="0rem"
          width="23rem"
          transition="transform 100ms ease-in-out"
          transformOrigin="center top"
          transform={containerOpen ? 'scale(1,1)' : 'scale(1,0)'}
          ref={containerRef}
          zIndex="max"
          style={{ overflow: 'hidden' }}
        >
          <PickerComponent />
        </Container>
      )}
    </>
  );
};
