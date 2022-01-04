import React, { forwardRef } from 'react';
import { Container } from '..';
import { useModal } from '../../hooks';
import { ModalBaseFunctionProps, ModalBaseProps } from './Modal.types';
import ReactDOM from 'react-dom';
import { DialogModal } from '.';

export const Modal = forwardRef<ModalBaseFunctionProps, ModalBaseProps>(
  (
    {
      children,
      container,
      origin = 'top',
      closeOnClickOutside = true,
      type = 'base',
      actionButtonsVarient,
      confirmButtonProps,
      abortButtonProps,
      confirmLogic,
      abortLogic,
      ...props
    },
    ref
  ) => {
    const close = type === 'base' ? closeOnClickOutside : false;
    const {
      portal,
      mounted,
      modalRef,
      dialogProps,
      getTransform,
      getTransformOrigin,
      closeModal,
    } = useModal({
      ref,
      closeOnClickOutside: close,
      type,
    });
    return portal ? (
      ReactDOM.createPortal(
        <Container
          flowType="grid"
          elementType="container"
          backgroundColor="modal"
          backgroundColorOpacity="70%"
          backgroundBlur="5px"
          width="100vw"
          height="100vh"
          position="fixed"
          top="0px"
          left="0px"
          zIndex="max"
          transform={mounted ? getTransform(origin) : undefined}
          transformOrigin={getTransformOrigin(origin)}
          transition="transform 150ms ease"
          {...props}
        >
          <Container
            id="hi"
            flowType="grid"
            elementType="item"
            placeSelf="center"
            backgroundColor="mainBgColor"
            fillContainer={false}
            minWidth="15%"
            minHeight="15%"
            elevation={2}
            borderRadius="s"
            padding="0.5rem"
            style={{ display: type === 'base' ? undefined : 'grid' }}
            ref={modalRef}
            {...container}
          >
            {type === 'base' ? (
              children
            ) : (
              <DialogModal
                actionButtonsVarient={actionButtonsVarient}
                confirmButtonProps={confirmButtonProps}
                abortButtonProps={abortButtonProps}
                confirmLogic={confirmLogic}
                abortLogic={abortLogic}
                closeModal={closeModal}
                {...dialogProps}
              />
            )}
          </Container>
        </Container>,
        portal
      )
    ) : (
      <div></div>
    );
  }
);
