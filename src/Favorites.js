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
  FlatList,
} from 'react-native';

import FavoriteItem from './FavoriteItem';

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
          renderItem={({ item }) => <FavoriteItem navigation={navigation} key={item.id} item={item} />}
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
