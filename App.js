/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './ducks/items';
import Home from './src/Home';
import ItemList from './src/ItemList';
import Details from './src/Details';

type Props = {};

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  ItemList: {
    screen: ItemList
  },
  Details: {
    screen: Details
  }
});

export default class App extends Component<{}> {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator />
      </Provider>
    );
  }
}
