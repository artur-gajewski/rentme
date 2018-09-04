/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';

import {
  Platform,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import Item from './Item';
import catalog from '../data/catalog';

type Props = {};

const { width, height } = Dimensions.get('window');

class ItemList extends Component {
  static navigationOptions = {
    title: 'Rentals'
  };

  render() {
    const { items, navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={catalog}
          renderItem={({ item }) => <Item navigation={navigation} key={item.id} item={item} />}
          keyExtractor={item => `${item.id}`}
        />
      </View >
    );
  }
}

export default ItemList;
