import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import AlertBase from './AlertBase';
import { AlertFunctionProps, AlertPortalProps } from './Alert.types';
import { useAlerts } from '../../hooks';
import { StyledPortal } from './AlertPortal.styled';

const AlertPortal = forwardRef<AlertFunctionProps, AlertPortalProps>(
  (
    {
      autoClose = true,
      alertProps,
      timeout = 5000,
      origin = 'bottom-right',
      maxAlerts = 5,
      ...container
    },
    ref
  ) => {
    const { alerts, loaded, portal, removeAlert } = useAlerts({
      autoClose,
      timeout,
      maxAlerts,
      ref,
    });
    return loaded && portal ? (
      ReactDOM.createPortal(
        <StyledPortal
          display="flex"
          flexDirection={
            origin.slice(0, 6) === 'bottom' ? 'column-reverse' : 'column'
          }
          rowGap="0.5rem"
          width="fit-content"
          position="fixed"
          zIndex="max"
          origin={origin}
          {...container}
        >
          {alerts.map(item => (
            <AlertBase
              key={item.id}
              onClose={removeAlert}
              detailed={item.detailed || true}
              closeButton={!autoClose}
              id={item.id}
              severity={item.severity}
              title={item.title}
              message={item.message}
              origin={origin}
              {...alertProps}
              container={{ ...alertProps?.container, className: 'alertBase' }}
            />
          ))}
        </StyledPortal>,
        portal
      )
    ) : (
      <div></div>
    );
  }
);

export default AlertPortal;
