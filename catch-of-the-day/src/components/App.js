import React, { Component } from 'react';
import Header from './header';
import Order from './order';
import Inventory from './inventory';

export default class App extends Component {
  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}
