import React from 'react';
import { ImageField } from '../../src';

const App = () => {
  return <ImageField onChange={e => console.log(e)} name="test" label="test" />;
};

export default App;
