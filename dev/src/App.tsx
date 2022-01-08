import React, { useEffect, useState } from 'react';
import {
  GlobalStyle,
  PhoneInputField,
  CheckBoxField,
  CheckBoxGroupField,
  RadioGroupField,
} from '../../src/components';
import { CheckBoxRadioOptionsType } from '../../src/components/Forms/FormFields.types';
import { generateUID } from '../../src/utils';

const App = () => {
  const [radioG, setRadioG] = useState<string>('12');
  const [checkedG, setcheckedG] = useState<string[]>([]);
  const [checked, setchecked] = useState(false);
  useEffect(() => {
    console.log(checkedG);
  }, [checkedG]);
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyle />
      <CheckBoxField
        name="test1"
        label="test2"
        checked={checked}
        onChange={e => setchecked(e.target.checked)}
      />
      <RadioGroupField
        name="test"
        label="tesasdast"
        value={radioG}
        onChange={e => setRadioG(String(e))}
        options={[
          { id: 'asd', value: 12 },
          // { id: generateUID(), value: 13, text: 'hi' },
          // { id: generateUID(), value: 14 },
          { id: generateUID(), value: 15 },
        ]}
      />
      <CheckBoxGroupField
        name="test"
        labelMargin="70"
        label="test"
        onChange={e => setcheckedG(e)}
        options={[
          { id: 'asd', value: 12 },
          // { id: generateUID(), value: 13, text: 'hi' },
          // { id: generateUID(), value: 14 },
          { id: generateUID(), value: 15 },
        ]}
      />
    </div>
  );
};

export default App;
