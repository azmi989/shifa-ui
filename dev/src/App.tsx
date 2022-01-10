import React from 'react';
import {
  Container,
  DateTimePickerField,
  GlobalStyle,
  IconButton,
  RangeField,
  TextInputField,
  Label,
} from '../../src';
import DateIcon from '../../src/icons/DateIcon';

const App = () => {
  return (
    <div style={{ padding: '2rem', display: 'grid' }}>
      <GlobalStyle />
      <Container>
        <DateTimePickerField
          name="test"
          label="date"
          initialDate={new Date()}
          onChange={e => console.log(e)}
          varient="contained"
          // forceFocus
        />
      </Container>
      <TextInputField
        name="test2"
        label="textField"
        varient="base"
        // disableFloat
        forceFocus
      />
      <Label>hiiiiiiiiiiiii</Label>
      <IconButton icon={<DateIcon />} />
    </div>
  );
};

export default App;
