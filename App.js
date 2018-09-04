/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation';

import ItemList from './src/ItemList';
import Details from './src/Details';

type Props = {};

const RootNavigator = createStackNavigator({
  ItemList: {
    screen: ItemList
  },
  Details: {
    screen: Details
  }
});

export default class App extends Component<{}> {
  render() {
    return <RootNavigator />;
  }
}
