/**
 * RentMe - React Native app
 * https://github.com/artur-gajewski/rentme
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Item from './Item';
import { Alert } from 'react-native';
import Swipeout from 'react-native-swipeout';

type Props = {};

class FavoriteItem extends Component {
  deleteItem(item) {
    Alert.alert(
      'Remove',
      'Really want to remove this offer from your favorites?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: () => this.props.onRemove(item) },
      ],
      { cancelable: false }
    );
  }

  render() {
    const { item, navigation } = this.props;

    const deleteButton = [{
      text: 'Delete',
      backgroundColor: 'red',
      underlayColor: 'rgba(0, 0, 0, 1, 0.6)',
      onPress: () => { this.deleteItem(item) }
    }];

    return (
      <Swipeout right={deleteButton}
        autoClose={true}
        backgroundColor='transparent'>
        <Item navigation={navigation} key={item.id} item={item} />
      </Swipeout>
    );
  }
}

export default FavoriteItem;

