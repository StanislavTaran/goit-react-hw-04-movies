import React, { Component } from 'react';
import Header from './components/Header/Header';
import PagesRoute from './Routes/PagesRoute';

export default class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Header />
        <PagesRoute />
      </>
    );
  }
}
