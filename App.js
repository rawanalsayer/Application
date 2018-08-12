import React from 'react';
import { StyleSheet, View, Text, TextInput, Button, Alert } from 'react-native';

import Amplify, { Auth } from 'aws-amplify'
import AWSConfig from './aws-exports'
Amplify.configure(AWSConfig)

import { createSwitchNavigator, createStackNavigator } from 'react-navigation';
import { Spinner } from 'native-base'



import SignUp from './components/SignUp/SignUp'
import SignIn from './components/SignIn/SignIn'
import Main  from './components/Main'

class ConSignUp extends React.Component {

  constructor(props) {
    super();
    this.state = {
      confirmationCode: null
    }
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={value => this.onChangeText('confirmationCode', value)}
          style={styles.input}
          placeholder='confirmation Code'
        />
        <Button title="Confirm Sign Up" onPress={() => {
          Auth.confirmSignUp(this.props.navigation.getParam('username'), this.state.confirmationCode)
            .then(() => this.props.navigation.navigate('SignIn'))
            .catch(err => Alert.alert('error confirming signing up!: ' + err))
        }} />
      </View>
    )
  }
}

const AuthStack = createStackNavigator({
  SignIn: SignIn,
  SignUp: SignUp,
  ConfirmSignUp: ConSignUp,
});


class Authenticator1 extends React.Component {

  constructor() {
    super();
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    // This will switch to the App screen or Auth screen and this loading
    // screen will be unmounted and thrown away.
    const state = await Auth.currentSession()
      .then(res => res)
      .catch(err => console.log(err))

    this.props.navigation.navigate(state == undefined ? 'Auth' : 'App');
  };



  render() {

    return (
      <View style={styles.container}>
        <Spinner />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 50,
    borderBottomWidth: 2,
    borderBottomColor: '#2196F3',
    margin: 10
  }
});

export default createSwitchNavigator(
  {
    IsLoggedIn: Authenticator1,
    App: Main,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'IsLoggedIn',
  }
);


