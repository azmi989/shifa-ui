import React from 'react';
import { PhoneInputField } from '../../src/components';
import { GlobalStyle } from '../../src/components';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyle />
      {/* <PhoneInputField name="test" label="test" varient="standard" />
      <PhoneInputField name="test1" label="test1" varient="filled" /> */}
      <PhoneInputField
        name="test2"
        label="test2"
        varient="outlined"
        onChange={e => console.log(e)}
      />
    </div>
  );
};

export default App;
