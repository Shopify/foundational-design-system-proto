import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './styles/index.css';

import Index from './pages';
import About from './pages/about';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
