import React, { useEffect, useState } from 'react';
import {
  CheckBoxField,
  SelectField,
  TextInputField,
} from '../../src/components';
import { GlobalStyle, PhoneInputField } from '../../src/components';
import { generateUID } from '../../src/utils';

const App = () => {
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    console.log(checked);
  }, [checked]);
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyle />
      <CheckBoxField
        name="test"
        label="test"
        checked={checked}
        onChange={e => setchecked(e.target.checked)}
      />
    </div>
  );
};

export default App;
