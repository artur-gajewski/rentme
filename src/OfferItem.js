/**
 * RentMe - React Native app
 * https://github.com/artur-gajewski/rentme
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import Item from './Item';

type Props = {};

class OfferItem extends Component {
  render() {
    const { item, navigation } = this.props;

    return (
      <Item navigation={navigation} key={item.id} item={item} />
    );
  }
}

export default OfferItem;

