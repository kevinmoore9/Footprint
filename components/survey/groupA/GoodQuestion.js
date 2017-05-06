import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
} from 'react-native';



class QuestionB extends Component {
  constructor() {
    super();

  }

  render() {
    let { height, width } = Dimensions.get('window');

    return (
      <View style={styles.container}>
        <View style={styles.top}>

        </View>
        <View style={[styles.questionBox,{padding: width*0.05}]}>

            <Text style={styles.prompt}>
              Where do you live?
            </Text>
            <TextInput
              keyboardType='numeric'
              style={styles.zipInput}
              maxLength={5}
              />
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
  prompt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    margin: 20
  },
  zipInput: {
    height: 40,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
});

module.exports = QuestionB;
