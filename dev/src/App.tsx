import React from 'react';
import { TextInputField } from '../../src/components/Forms';
import { GlobalStyle } from '../../src/components';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyle />
      <TextInputField name="test" label="test" varient="filled" isError />
    </div>
  );
};

export default App;
