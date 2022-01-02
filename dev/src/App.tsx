import React, { useState } from 'react';
import { Button, Alert, GlobalStyle } from '../../src';

const App = () => {
  const [state, setstate] = useState(false);
  return (
    <>
      <GlobalStyle />
      <Alert open={state} setOpen={setstate} />
    </>
  );
};

export default App;
