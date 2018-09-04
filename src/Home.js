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
  TouchableOpacity,
  Button
} from 'react-native';

type Props = {};

const { width, height } = Dimensions.get('window');

class Home extends Component {
  static navigationOptions = {
    title: 'Home'
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{ height, flex: 1 }}>
        <Text>Welcome!</Text>
        <Button onPress={() => navigation.navigate('ItemList')}
          title="Find your new home"
          color="#ff7f50"
          accessibilityLabel="Search and rent apartments"
        />
      </View >
    );
  }
}

export default Home;

const styles = StyleSheet.create({
});
