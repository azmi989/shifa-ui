import React from 'react';
import { FileField } from '../../src';

const App = () => {
  return <FileField onChange={e => console.log(e)} name="test" label="test" />;
};

export default App;
