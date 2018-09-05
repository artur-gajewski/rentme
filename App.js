/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { Image } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import { createStore, applyMiddleware } from 'redux';
import { Provider, connect } from 'react-redux';
import axios from 'axios';
import axiosMiddleware from 'redux-axios-middleware';

import reducer from './ducks/items';
import Home from './src/Home';
import ItemList from './src/ItemList';
import Favorites from './src/Favorites';
import Details from './src/Details';

type Props = {};

const client = axios.create({
  baseURL: 'https://api.github.com',
  responseType: 'json'
});

const store = createStore(reducer, applyMiddleware(axiosMiddleware(client)));

const TabNavigator = createBottomTabNavigator(
  {
    ItemList: ItemList,
    Favorites: Favorites
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;

        let icon;
        if (routeName === 'ItemList') {
          icon = require('./assets/houses.png');
        } else if (routeName === 'Favorites') {
          icon = require('./assets/heart.png');
        }

        if (icon) {
          return <Image source={icon} style={{ width: 25, height: 25 }} />;
        }

        return null;
      }
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray'
    }
  }
);

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home
  },
  Lists: {
    screen: TabNavigator,
    navigationOptions: { title: 'Offers' }
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
