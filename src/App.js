import React, { useState } from 'react';
import './App.css';
import cat from './cat-dancing.gif';

const App = () => {
  const [val, setVal] = useState('Cet');

  return (
    <div>
      <h1>{val}</h1>
      <img src={cat} width={400} height={400} />
    </div>
  );
};

export default App;
