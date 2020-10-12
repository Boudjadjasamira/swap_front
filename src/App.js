import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history.js';
import Routes from './routes.js';

function App() {
  return (
    <div className="App">
      <Router history={history} basename="/">
        <Routes />
      </Router>
    </div>
  );
}

export default App;
