import React from 'react';
import {
  Container,
  DateTimePickerField,
  GlobalStyle,
  IconButton,
  RangeField,
} from '../../src';
import DateIcon from '../../src/icons/DateIcon';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyle />
      <Container>
        <RangeField name="hi" label="alsd" />
        <DateTimePickerField
          name="test"
          label="hi"
          initialDate={new Date()}
          onChange={e => console.log(e)}
        />
      </Container>
      <IconButton icon={<DateIcon />} />
    </div>
  );
};

export default App;
