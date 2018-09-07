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
  TouchableOpacity,
  ScrollView,
  Button
} from 'react-native';

import { addItem, removeItem } from '../ducks/items';

type Props = {};

const { width, height } = Dimensions.get('window');

class Details extends Component {
  static navigationOptions = {
    title: 'Offer details'
  };

  render() {
    const { favorites, navigation, addItem, removeItem } = this.props;

    const item = this.props.navigation.getParam('item');

    const favoritesIndex = favorites.findIndex(f => f.id === item.id);

    let button;

    if (favoritesIndex < 0) {
      button = (
        <Button onPress={() => addItem(item)}
          title="Add to favorites"
          color="green"
          accessibilityLabel="Add this offer to your favorites list"
        />
      );
    } else {
      button = (
        <Button onPress={() => removeItem(item)}
          title="Remove from favorites"
          color="red"
          accessibilityLabel="Remove this offer from your favorites list"
        />
      );
    }

    return (
      <ScrollView style={{ height }}>
        <View style={styles.imageSection}>
          <Image style={{ width: '100%', height: 360 }} source={{ uri: item.image }} />
        </View>
        <View style={styles.detailsSection}>
          <View style={styles.leftColumn}>
            <Text style={styles.title}>{item.type}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
          <View style={styles.rightColumn}>
            <Text style={styles.description}>{item.location}</Text>
            <Text style={styles.rating}>{item.rating}/5</Text>
          </View>
        </View>
        <View style={styles.favoriteButton}>
          {button}
        </View>

      </ScrollView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageSection: {
    flexGrow: 2,
    backgroundColor: 'gray',
    width: '100%'
  },
  detailsSection: {
    flexGrow: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 110
  },
  leftColumn: {
    width: '50%'
  },
  rightColumn: {
    width: '50%'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    alignSelf: 'center'
  },
  rating: {
    fontSize: 16,
    fontStyle: 'italic',
    alignSelf: 'center'
  },
  favoriteButton: {
    marginBottom: 10
  }

});

const mapStateToProps = state => {
  return {
    favorites: state.favorites
  };
};

const mapDispatchToProps = {
  addItem,
  removeItem
};

export default connect(mapStateToProps, mapDispatchToProps)(Details);