import React, { FC } from 'react';
import { Container, IconButton, Typography } from '..';
import Close from '../icons/Close';
import { defaultAlertProps } from './Alert.defaults';
import { AlertProps } from './Alert.types';

const AlertBase: FC<AlertProps> = props => {
  const {
    severity,
    varient,
    borderRadius,
    ...defaultProps
  } = defaultAlertProps(props);
  return (
    <Container
      flowType="flex"
      elementType="container"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      backgroundColor={severity}
      backgroundColorVarient={varient === 'outline' ? 400 : undefined}
      borderColor={varient === 'outline' ? severity : undefined}
      borderWidth={varient === 'outline' ? 'xs' : undefined}
      borderStyle={varient === 'outline' ? 'solid' : undefined}
      borderRadius={borderRadius}
      padding="0.25rem 1rem"
    >
      <Container justifyContent="space-between">
        <Typography as="h5" textProps="body2">
          headText
        </Typography>
        <IconButton
          varient="base"
          rounded="rectangle"
          elevation="none"
          backgroundColor={severity}
          icon={<Close />}
        />
      </Container>
    </Container>
  );
};

export default AlertBase;
