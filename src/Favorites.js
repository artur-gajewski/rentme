/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';

import {
  Platform,
  StyleSheet,
  View,
  Dimensions,
  FlatList,
} from 'react-native';

import { getItems } from '../ducks/items';
import Item from './Item';

type Props = {};

const { width, height } = Dimensions.get('window');

class Favorites extends Component {

  static navigationOptions = {
    title: 'Favorites'
  };

  render() {
    const { favorites, navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={favorites}
          renderItem={({ item }) => <Item navigation={navigation} key={item.id} item={item} />}
          keyExtractor={item => `${item.id}`}
        />
      </View >
    );
  }
}

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};

export default connect(mapStateToProps)(Favorites);
