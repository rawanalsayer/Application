import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SignUp from './app/components/SignUp.js';
import Tasks from './app/components/Tasks.js';


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
         <Tasks / >
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
    alignItems: 'center',
    justifyContent: 'center',
    
  },
});
