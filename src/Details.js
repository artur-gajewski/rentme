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
  TouchableOpacity,
  ScrollView
} from 'react-native';

type Props = {};

const { width, height } = Dimensions.get('window');

class Details extends Component {
  static navigationOptions = {
    title: 'Offer details'
  };

  render() {
    const { navigation } = this.props;

    const item = this.props.navigation.getParam('item');

    return (
      <ScrollView style={{ height }}>
        <View style={styles.imageSection}>
          <Image style={{ width: '100%', height: 420 }} source={{ uri: item.image }} />
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
      </ScrollView >
    );
  }
}

export default Details;

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
    height: 180
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
  }
});
