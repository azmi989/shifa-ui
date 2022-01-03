import React, { useState } from 'react';
import { Button, Alert, GlobalStyle, useAlertPortalRef } from '../../src';

const App = () => {
  const [state, setstate] = useState(false);
  const ref = useAlertPortalRef();
  // const ref = useRef<AlertFunctionProps>(null);
  return (
    <>
      <GlobalStyle />
      <Button
        onClick={() =>
          ref.current?.addAlert({ severity: 'error', message: 'hi' })
        }
      >
        hi
      </Button>
      <Alert ref={ref} maxAlerts={7} />
      {/* <Alert detailed>hihi</Alert> */}
    </>
  );
};

export default App;
