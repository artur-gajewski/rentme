/**
 * RentMe - React Native app
 * https://github.com/artur-gajewski/rentme
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
  FlatList
} from 'react-native';

import FavoriteItem from './FavoriteItem';
import { removeItem } from '../ducks/items';

type Props = {};

const { width, height } = Dimensions.get('window');

class Favorites extends Component {

  static navigationOptions = {
    title: 'Favorites'
  };

  render() {
    const { favorites, navigation, removeItem } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={favorites}
          renderItem={({ item }) => <FavoriteItem onRemove={removeItem} navigation={navigation} key={item.id} item={item} />}
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

const mapDispatchToProps = {
  removeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);