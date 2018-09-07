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
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import OfferItem from './OfferItem';

type Props = {};

const { width, height } = Dimensions.get('window');

class Offers extends Component {

  static navigationOptions = {
    title: 'New offers'
  };

  render() {
    const { items, navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => <OfferItem navigation={navigation} key={item.id} item={item} />}
          keyExtractor={item => `${item.id}`}
        />
      </View >
    );
  }
}

const mapStateToProps = state => {
  return {
    items: state.items
  };
};

const mapDispatchToProps = {
};

export default connect(mapStateToProps, mapDispatchToProps)(Offers);
