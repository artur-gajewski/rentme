/**
 * RentMe - React Native app
 * https://github.com/artur-gajewski/rentme
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../ducks/items';

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

  componentDidMount() {
    this.props.getItems();
  }

  render() {
    const { navigation, items, favorites } = this.props;

    const buttonTitle = `Check out ${items.length} apartments`;

    return (
      <View style={[styles.container, { height: height }]}>
        <LottieView
          style={{ alignSelf: 'center', marginBottom: 100, width: 220, height: 220 }}
          source={require('../assets/home_icon.json')}
          autoPlay loop
        />

        <Button onPress={() => navigation.navigate('Offers')}
          title={buttonTitle}
          color="tomato"
          accessibilityLabel="Search and rent apartments"
        />
      </View >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center'
  }
});

const mapStateToProps = state => {
  return {
    items: state.items,
    favorites: state.favorites
  };
};

const mapDispatchToProps = {
  getItems
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
