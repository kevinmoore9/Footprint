import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';



class QuestionA extends Component {
  constructor() {
    super();

  }

  render() {
    let { height, width } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <Text style={styles.prompt}>
          Where do you live?
        </Text>
        <TextInput
          keyboardType='numeric'
          style={styles.zipInput}
          maxLength={5}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  prompt: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  zipInput: {
    height: 40,
    borderColor: 'black',
    borderWidth: 1,
    textAlign: 'center'
  },
});

module.exports = QuestionA;
