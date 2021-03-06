/**
 * RentMe - React Native app
 * https://github.com/artur-gajewski/rentme
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
  TouchableOpacity
} from 'react-native';


type Props = {};

const { width, height } = Dimensions.get('window');

class Item extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { item, navigation } = this.props;

    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details', { item: item })}>
        <View style={styles.row}>
          <View style={styles.itemDetails}>
            <View style={styles.leftColumn}>
              <Image style={styles.thumbnail} source={{ uri: item.image }} />
            </View>
            <View style={styles.centerColumn}>
              <Text style={styles.title}>{item.type}</Text>
              <Text style={styles.description}>{item.location}</Text>
            </View>
            <View style={styles.rightColumn}>
              <Text style={styles.price}>{item.price}</Text>
            </View>
          </View>
        </View >
      </TouchableOpacity >
    );
  }
}

export default Item;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    height: 80,
    backgroundColor: 'gray',
    marginBottom: 3
  },
  itemDetails: {
    flexGrow: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftColumn: {
    width: '30%'
  },
  centerColumn: {
    width: '40%',
  },
  rightColumn: {
    width: '30%'
  },
  thumbnail: {
    width: 75,
    height: 50,
    marginStart: 10
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  price: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'flex-start'
  },
  description: {
    fontSize: 16,
    fontStyle: 'italic',
    alignSelf: 'flex-start'
  }
});
