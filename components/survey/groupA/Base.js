import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';

import QuestionA from './QuestionA';

class Base extends Component {
  constructor() {
    super();

  }

  render() {
    let { height, width } = Dimensions.get('window');

    return(
      <View style={styles.container}>
        <View style={styles.top}>

        </View>
        <View style={[styles.questionBox,{padding: width*0.05}]}>
          
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  top: {
    flex: 2
  },
  questionBox: {
    backgroundColor: '#000080',
    flex: 1,
    alignItems: 'center',
  },
});

module.exports = Base;
