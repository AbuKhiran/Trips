import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { Trip } from './components/Trip/Trip';
import { Create } from './components/Trip/Create';
import { Update } from './components/Trip/Update';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/Trip' component={Trip} />
        <Route path='/Create' component={Create} />
        <Route path='/update/:id' component={Update} />


      </Layout>
    );
  }
}
