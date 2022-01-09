import React from 'react';
import { Container, GlobalStyle, RangeField } from '../../src';

const App = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <GlobalStyle />
      <Container>
        <RangeField name="hi" label="alsd" />
      </Container>
    </div>
  );
};

export default App;
