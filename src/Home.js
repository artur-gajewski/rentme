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
  TouchableOpacity,
  Button
} from 'react-native';

import LottieView from 'lottie-react-native';

type Props = {};

const { width, height } = Dimensions.get('window');

class Home extends Component {
  static navigationOptions = {
    title: 'RentMe'
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={[styles.container, { height: height }]}>
        <LottieView
          style={{ alignSelf: 'center', marginBottom: 100, width: 220, height: 220 }}
          source={require('../assets/home_icon.json')}
          autoPlay loop
        />
        <Button onPress={() => navigation.navigate('Offers')}
          title="Find your new home"
          color="tomato"
          accessibilityLabel="Search and rent apartments"
        />
      </View >
    );
  }
}


export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});


