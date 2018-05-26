import React, { Component } from 'react';
import { Provider } from 'react-redux';
import PageOne from './Components/PageOne';
import logo from './logo.svg';
import store from './Reducers/store';
import './App.css';

export default () => (
  <Provider store={store}>
    <PageOne name="Players:" />
  </Provider>
);
