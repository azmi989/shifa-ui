import React from 'react';
import { PhoneInputField, SelectField } from '../../src/components';
import { GlobalStyle } from '../../src/components';
import { generateUID } from '../../src/utils';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyle />
      <PhoneInputField
        name="test"
        label="test"
        varient="standard"
        isError
        errorMessage="an error"
      />
      <PhoneInputField
        name="test1"
        label="test1"
        varient="filled"
        min={10}
        max={15}
        // isError
        // errorMessage="an error"
      />
      <PhoneInputField name="test2" label="test2" varient="outlined" />
      <SelectField
        name="test4"
        label="test4"
        defaultValue="Select a value"
        onChange={e => console.log(e)}
        options={[
          { id: `${generateUID()}-1`, value: 'hi' },
          { id: `${generateUID()}-2`, value: 'hihi' },
          { id: `${generateUID()}-3`, value: 'hihi' },
          { id: `${generateUID()}-4`, value: 'hihi' },
          { id: `${generateUID()}-5`, value: 'hihi' },
        ]}
      />
    </div>
  );
};

export default App;
