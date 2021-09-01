import React from 'react';
import {Link, Switch, Route} from 'react-router-dom';

import {Layout, Heading} from '../../components';
import LayoutGuide from './layout';

const Guides = () => {
  return (
    <Layout>
      <Heading>Guides</Heading>
      <Link to="/">Home</Link>

      <Switch>
        <Route path="/layout" component={LayoutGuide} />
      </Switch>
    </Layout>
  );
};

export default Guides;
