'use strict';

import React from 'react';
import {
  Animated,
  Platform,
  StyleSheet,
  View,
} from 'react-native';

import ViewPropTypes from './config/ViewPropTypes';
import Layout from './Layout';

export default class TabBar extends React.Component {
  static propTypes = {
    ...Animated.View.propTypes,
    shadowStyle: ViewPropTypes.style,
  };

  render() {
    return (
      <Animated.View {...this.props} style={[styles.container]}>
        <View style={[styles.bar_bg, this.props.style]}></View>
        {this.props.children}
        {/* <View style={[styles.shadow, this.props.shadowStyle]} /> */}
      </Animated.View>
    );
  }
}

let styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
   // height: Layout.tabBarHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  shadow: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    height: Layout.pixel,
    position: 'absolute',
    left: 0,
    right: 0,
    top: Platform.OS === 'android' ? 0 : -Layout.pixel,
  },
  bar_bg:{
    backgroundColor: '#f8f8f8',
    height: Layout.tabBarHeight,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopWidth:1,
    borderColor:'rgba(0, 0, 0, 0.2)'
  }
});
