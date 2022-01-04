import React, { FC } from 'react';
import { Container, Divider, IconButton, Typography } from '..';
import Close from '../../icons/Close';
import { defaultAlertProps } from './Alert.defaults';
import { AlertProps } from './Alert.types';

const AlertBase: FC<AlertProps> = ({
  children,
  container,
  title,
  message,
  ...props
}) => {
  const {
    severity,
    varient,
    borderRadius,
    closeButton,
    onClose,
    id,
    origin,
    detailed,
  } = defaultAlertProps(props);
  return (
    <Container
      className={origin}
      flowType="flex"
      elementType="container"
      flexDirection="column"
      justifyContent="center"
      alignItems="flex-start"
      rowGap="0.25rem"
      backgroundColor={severity}
      backgroundColorVarient={varient === 'outline' ? 400 : undefined}
      borderColor={varient === 'outline' ? severity : undefined}
      borderWidth={varient === 'outline' ? 'xs' : undefined}
      borderStyle={varient === 'outline' ? 'solid' : undefined}
      borderRadius={borderRadius}
      padding="0.5rem 1rem"
      {...container}
    >
      <Container justifyContent="space-between">
        <Typography as="p" textColor="white" textProps="body1">
          {title}
        </Typography>
        {closeButton ? (
          <IconButton
            varient="base"
            rounded="rectangle"
            elevation="none"
            backgroundColor="white"
            onClick={() => onClose(id)}
            icon={<Close />}
          />
        ) : null}
      </Container>
      {detailed ? (
        <>
          <Divider color={severity} />
          <Container
            justifyContent="center"
            alignItems="center"
            width="fit-content"
            padding="0 2rem"
          >
            <Typography as="p" textColor="white" textProps="body2">
              {children || message}
            </Typography>
          </Container>
        </>
      ) : null}
    </Container>
  );
};

export default AlertBase;
