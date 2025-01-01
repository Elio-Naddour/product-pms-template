import React from 'react';
import './App.css';

import Header from './components/molecules/header/Header';
import Routers from './utils/routers';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routers />
    </div>
  );
}

export default App;
