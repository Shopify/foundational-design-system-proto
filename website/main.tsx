import React, {Suspense, lazy} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import '@polaris/components/styles';
import './styles/index.css';

const Index = lazy(() => import('./pages'));
const About = lazy(() => import('./pages/about'));
const Guides = lazy(() => import('./pages/guides'));

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Suspense fallback={<div />}>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route path="/about" component={About} />
          <Route path="/guides" component={Guides} />
        </Switch>
      </Suspense>
    </Router>
  </React.StrictMode>,
  document.getElementById('root'),
);
