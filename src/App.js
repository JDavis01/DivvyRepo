import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import PageDirector from './app-router/PageDirector';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <PageDirector/>
      </BrowserRouter>
    </div>
  );
}

export default App;
