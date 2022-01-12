import React from 'react';
import {
  Container,
  DateTimePickerField,
  GlobalStyle,
  IconButton,
  RangeField,
  TextInputField,
  Label,
  Button,
  NumberInputField,
} from '../../src';
import DateIcon from '../../src/icons/DateIcon';

const App = () => {
  return (
    <div style={{ padding: '2rem', display: 'grid' }}>
      <GlobalStyle />
      <DateTimePickerField
        name="test"
        label="date"
        initialDate={new Date()}
        onChange={e => console.log(e)}
        varient="contained"
        type="time"
        // forceFocus
      />
      <TextInputField
        name="test2"
        label="textField"
        varient="base"
        // disableFloat
      />
      <Label>hiiiiiiiiiiiii</Label>
      <IconButton icon={<DateIcon />} />
      <Button varient="contained" active>
        hiasdasdasdasdasd
      </Button>
      <Button varient="base" active>
        hiasdasdasdasdasd
      </Button>
      <Button varient="outlined" backgroundColor="success" active>
        hi
      </Button>
      <NumberInputField name="hi" label="hihi" onChange={e => console.log(e)} />
    </div>
  );
};

export default App;
