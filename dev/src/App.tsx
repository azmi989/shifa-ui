import React from 'react';
import { NumberInputField } from '../../src/components';
import { GlobalStyle } from '../../src/components';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyle />
      <NumberInputField
        name="test"
        label="test"
        varient="standard"
        isError
        errorMessage="an error"
      />
      <NumberInputField
        name="test1"
        label="test1"
        varient="filled"
        min={10}
        max={15}
        // isError
        // errorMessage="an error"
      />
      <NumberInputField
        name="test2"
        label="test2"
        varient="outlined"
        isError
        errorMessage="an error"
      />
    </div>
  );
};

export default App;
