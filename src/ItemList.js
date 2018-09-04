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
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native';

import { getItems } from '../ducks/items';
import Item from './Item';

type Props = {};

const { width, height } = Dimensions.get('window');

class ItemList extends Component {

  componentDidMount() {
    this.props.getItems();
  }

  static navigationOptions = {
    title: 'Rentals'
  };

  render() {
    const { items, navigation } = this.props;

    console.log("------------------->");
    console.log(this.props);

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={items}
          renderItem={({ item }) => <Item navigation={navigation} key={item.id} item={item} />}
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
  getItems
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
