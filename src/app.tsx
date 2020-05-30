import * as React from 'react';
import { render } from 'react-dom';

import { Router, Redirect } from '@reach/router';

import Home from './components/home/home';

import './assets/main.generated.css';

const App: React.FC = () => {
  return (
    <React.StrictMode>
      <Router>
        <Home path='/home' />
        <Redirect from='*' to='/home' noThrow />
      </Router>
    </React.StrictMode>
  );
};

render(<App />, document.getElementById('root'));
