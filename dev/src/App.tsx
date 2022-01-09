import React from 'react';
import {
  ImageField,
  TextInputField,
  TextAreaField,
  Container,
  GlobalStyle,
} from '../../src';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyle />
      <Container>
        <TextAreaField name="test1" label="tes1t" varient="outlined" disabled />
        <TextAreaField name="test" label="test" varient="filled" disabled />
        <TextAreaField name="test" label="test" varient="standard" disabled />
        <TextInputField
          name="test3"
          label="test3"
          varient="outlined"
          disabled
        />
        <TextInputField name="test4" label="test4" varient="filled" disabled />
        <TextInputField
          name="test4"
          label="test4"
          varient="standard"
          disabled
        />
      </Container>
    </div>
  );
};

export default App;
