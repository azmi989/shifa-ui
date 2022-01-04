import React, { FC } from 'react';
import { Button, Container, Divider, Typography } from '..';
import { DialogModalProps } from './Modal.types';

export const DialogModal: FC<DialogModalProps> = ({
  title = 'Dialog title',
  message,
  abortLogic,
  closeModal,
  confirmButtonProps,
  abortButtonProps,
  confirmLogic,
  actionButtonsVarient,
}) => {
  const onClose = () => {
    abortLogic ? abortLogic() : null;
    closeModal();
  };
  const onConfirm = () => {
    confirmLogic ? confirmLogic() : null;
    closeModal();
  };
  return (
    <>
      <Container
        flowType="grid"
        elementType="container"
        gridGap="0.5rem"
        gridTemplateRows="auto auto auto"
        gridTemplateColumns="1fr"
        fillContainer
      >
        <Typography as="h6">{title}</Typography>
        <Divider />
        <Typography style={{ padding: '0 1rem' }}>{message}</Typography>
        <Container
          flowType="flex"
          elementType="container"
          justifyContent="space-between"
          alignItems="center"
        >
          {actionButtonsVarient === 'single' ? (
            <Button
              backgroundColor="info"
              onClick={onConfirm}
              marginLeft="auto"
              children="Ok"
              {...confirmButtonProps}
            />
          ) : (
            <>
              <Button
                varient="outlined"
                backgroundColor="error"
                textTransform="capitalize"
                onClick={onClose}
                children="Cancel"
                {...abortButtonProps}
              />
              <Button
                backgroundColor="success"
                textTransform="capitalize"
                onClick={onConfirm}
                children="Ok"
                {...confirmButtonProps}
              />
            </>
          )}
        </Container>
      </Container>
    </>
  );
};
