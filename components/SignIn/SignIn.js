import React from 'react';
import { View, Alert } from 'react-native'
import { Auth } from 'aws-amplify'
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Right,
} from 'native-base';
export default class SignIn extends React.Component {

  state = {
    username: '',
    password: ''
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }

  signIn() {
    const { username, password } = this.state
    if (! username || ! password) {
      Alert.alert('Both feilds must be filled')
      return
    }
    Auth.signIn(username, password)
      .then(() => {
        this.props.navigation.navigate('App')
      })
      .catch(err => Alert.alert('error signing in!: ' + err.message))
  }

  render() {
    return (
      <Container>
        <Content >
          <View style={{ flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "stretch" }}>

            <Form>

              <Item floatingLabel>
                <Label>Username</Label>
                <Input onChangeText={value => this.onChangeText('username', value)} />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input onChangeText={value => this.onChangeText('password', value)} />
              </Item>


            </Form>
          </View>
          <Button block style={{ margin: 20 }} onPress={this.signIn.bind(this)}>
            <Text>Login</Text>
          </Button>

          <Button full transparent={true} style={{margin: 20}} onPress={() => this.props.navigation.navigate("SignUp")}>
            <Text>Not a member? SignUp here</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
