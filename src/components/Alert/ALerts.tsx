import React, { useRef } from 'react';
import { IconButton } from '..';
import Close from '../icons/Close';
import { AlertFunctionProps } from './Alert.types';
import AlertPortal from './AlertPortal';

const ALerts = () => {
  const alertsRef = useRef<AlertFunctionProps>(null);
  return (
    <>
      <IconButton
        onClick={() =>
          alertsRef.current?.addAlert({
            title: 'hi',
            message: 'hihi',
            severity: 'success',
          })
        }
        icon={<Close />}
      />
      <AlertPortal ref={alertsRef} />
    </>
  );
};

export default ALerts;
