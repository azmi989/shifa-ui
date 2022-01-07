import React, { useState } from 'react';
import {
  CheckBoxField,
  SelectField,
  TextInputField,
} from '../../src/components';
import { GlobalStyle, PhoneInputField } from '../../src/components';
import { generateUID } from '../../src/utils';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyle />
      <PhoneInputField
        name="test3"
        label="test"
        varient="outlined"
        onChange={e => console.log(e)}
      />
      <TextInputField isError name="test1" label="test" varient="filled" />
      <SelectField
        name="test"
        label="test"
        varient="filled"
        isError
        multiple
        onChange={() => {
          return;
        }}
        defaultValue=""
        options={[
          { id: generateUID(), value: 'asdasdasdasd' },
          { id: generateUID(), value: 'asdasd' },
          { id: generateUID(), value: '3asdadsasdasdasdasdadsasdasdas' },
          { id: generateUID(), value: '3asdadsasdasdasdasdadsasdasdas' },
          { id: generateUID(), value: '3asdadsasdasdasdasdadsasdasdas' },
          { id: generateUID(), value: '3asdadsasdasdasdasdadsasdasdas' },
          { id: generateUID(), value: '3asdadsasdasdasdasdadsasdasdas' },
          { id: generateUID(), value: '3asdadsasdasdasdasdadsasdasdas' },
          { id: generateUID(), value: '3asdadsasdasdasdasdadsasdasdas' },
          { id: generateUID(), value: '3asdadsasdasdasdasdadsasdasdas' },
        ]}
      />
    </div>
  );
};

export default App;
