/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import BackgroundGeolocation from "react-native-background-geolocation";
global.BackgroundGeolocation = BackgroundGeolocation;



import HomeView from './components/HomeView';
import QuestionA from './components/survey/groupA/QuestionA';
import Survey from './components/survey/groupA/BaseView';

export default class Footprint extends Component {
  render() {
    return (
      // If uuil (not first login)
        <Survey/>

      // Else route to intro survey
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Footprint', () => Footprint);
