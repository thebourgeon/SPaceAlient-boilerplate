// Root compoent wich contains site routing

// Depends
import React, { Component } from 'react';

// Provider - component provided by React Redux that lets
// you bind Redux to React
// https://redux.js.org/docs/advanced/UsageWithReactRouter.html
import { Provider } from 'react-redux';

import { Router, Route } from 'react-router';

// Modules
import Layout from 'containers/Layout';
import Greeting from 'containers/Greeting';

/**
 * Component for routing
 */
export default class Root extends Component {
  render () {
    const { store, history } = this.props;

    return (
      <Provider store={ store }>
        <Router history={ history }>
          <Layout component={ Layout }>
            <Route component={ Greeting } path='/'/>
          </Layout>
        </Router>
      </Provider>
    );
  }
}
