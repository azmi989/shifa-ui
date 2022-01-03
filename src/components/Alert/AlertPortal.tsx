import React, { forwardRef } from 'react';
import ReactDOM from 'react-dom';
import AlertBase from './AlertBase';
import { Container } from '..';
import { AlertFunctionProps, AlertPortalProps } from './Alert.types';
import { useAlerts } from '../../hooks';
import './PortalContainer.css';

const AlertPortal = forwardRef<AlertFunctionProps, AlertPortalProps>(
  (
    {
      container,
      autoClose = false,
      alertProps,
      timeout = 5000,
      origin = 'left',
    },
    ref
  ) => {
    const { alerts, loaded, portal, removeAlert } = useAlerts({
      autoClose,
      timeout,
      ref,
    });
    return loaded && portal ? (
      ReactDOM.createPortal(
        <Container
          className={`portal-${origin}`}
          flowType="flex"
          elementType="container"
          flexDirection={
            origin.slice(0, 5) === 'bottom' ? 'column-reverse' : 'column'
          }
          rowGap="0.5rem"
          width="fit-content"
          position="fixed"
          zIndex={10000}
          {...container}
        >
          {alerts.map(item => (
            <AlertBase
              onClose={removeAlert}
              detailed={item.detailed || true}
              closeButton={!autoClose}
              id={item.id}
              key={item.id}
              severity={item.severity}
              title={item.title}
              message={item.message}
              origin={origin}
              {...alertProps}
            />
          ))}
        </Container>,
        portal
      )
    ) : (
      <div></div>
    );
  }
);

export default AlertPortal;
