import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './StorePicker';
import App from './App';
import NotFound from './notFound';

const Router = props => (
  <BrowserRouter>
    <switch>
      <Route exact path="/" component={StorePicker} />>
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </switch>
  </BrowserRouter>
);
export default Router;
