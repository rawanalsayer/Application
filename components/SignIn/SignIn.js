import React from 'react';
import {View, Alert} from 'react-native'
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
    Auth.signIn(username, password)
    .then(() => {
     this.props.navigation.navigate('App')
    })
    .catch(err => Alert.alert('error signing in!: '+ err))
  }

  render() {
    return (
      <Container>
        <Content contentContainerStyle={{ flex: 1, flexDirection: "column", justifyContent: "space-between", alignItems: "stretch" }}>
          <View>
            <Text style={{padding: 10}}>
              Welcome
            </Text>

            <Form>

              <Item floatingLabel>
                <Label>Username</Label>
                <Input onChangeText={value => this.onChangeText('username', value)}/>
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input onChangeText={value => this.onChangeText('password', value)}/>
              </Item>
              <Right style={{ padding: 50 }}>
                <Button rounded onPress={this.signIn.bind(this)}>
                  <Text>Login</Text>
                </Button>
              </Right>

            <Button transparent={true} onPress={()=> this.props.navigation.navigate("SignUp")}>
              <Text>Not a member? SignUp here</Text>
            </Button>
            </Form>
          </View>
        </Content>
      </Container>
    );
  }
}
