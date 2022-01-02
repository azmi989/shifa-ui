import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Typography, Label } from 'shifa-ui';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Button onClick={() => setCount(count => count + 1)} varient="contained">
        count is: {count}
      </Button>
      <Typography as="h3" textColor="primary">
        hi
      </Typography>
      <Label htmlFor="hiiiii" children="hihihih" />
    </div>
  );
}

export default App;
