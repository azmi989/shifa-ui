import React, { useState } from 'react';
import { Button, Alert, GlobalStyle } from '../../src';
import ALerts from '../../src/components/Alert/ALerts';

const App = () => {
  const [state, setstate] = useState(false);
  return (
    <>
      <GlobalStyle />
      <ALerts />
      {/* <Alert detailed>hihi</Alert> */}
    </>
  );
};

export default App;
