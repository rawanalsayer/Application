import React, { Component } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import { Auth } from 'aws-amplify'
import {
  Container,
  Header,
  Content,
  Left,
  Title,
  Right,
  Button,
  Form,
  Item,
  Icon,
  Label,
  Input,
  Image,
  Body,
  ListItem,
  Badge,
  Text,
  Picker,
  Card,
  CardItem
} from 'native-base';

import CheckBox from '../shared/CheckBox'

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      fullName: '',
      password: '',
      education: '',
      email: '',
      position: '',
      experience: ''

    };
  }

  onChangeText(key, value) {
    this.setState({
      [key]: value
    })
  }

  signUp() {
    const {
      email,
      password,
      education,
      position,
      experience,
      checked
    } = this.state

    let fullName = this.state.fullName

    fullName = fullName.split(" ")
    console.log(fullName.length)
    if (!(fullName.length > 2)) {
      Alert.alert('Name should be at least three words long')
      return
    }
    if (!checked) {
      Alert.alert('You should agree to our terms.')
      return
    }
    const areFeildsFilled = email && password && education && position && experience
    if (!areFeildsFilled) {
      Alert.alert('All feilds should be filled')
      return
    }
    console.log(this.state, fullName)
    Auth.signUp({
      username: email,
      password,
      attributes: {
        "email": email,
        "name": fullName[0],
        "middle_name": fullName[1],
        "family_name": fullName[2],
        "custom:education": education,
        "custom:position": position,
        "custom:experience": experience

      }
    })
      .then(() => this.props.navigation.navigate('ConfirmSignUp', {
        username: email
      }))
      .catch(err => Alert.alert('Error signing up!: ' + err))
  }

  onChanged = (checked) => this.setState({ checked })

  render() {
    return (
      <Container style={styles.container}>

        <Content>

          <Card>
            <CardItem>
              <Text style={styles.paragraph}>Be part of FortyDays Team and Join us now</Text>
            </CardItem>
          </Card>
          <Form>
            <Item floatingLabel>
              <Icon active name="contact" />
              <Label>Name:</Label>
              <Input onChangeText={value => this.onChangeText('fullName', value)} />
            </Item>
            <Item floatingLabel>
              <Icon active name="mail" />
              <Label>Email:</Label>
              <Input onChangeText={value => this.onChangeText('email', value)} />
            </Item>
            <Item floatingLabel last>
              <Icon active name="lock" />
              <Label>Password:</Label>
              <Input onChangeText={value => this.onChangeText('password', value)} />
            </Item>
            <Item floatingLabel last>
              <Icon active name="briefcase" />
              <Label>Education:</Label>
              <Input onChangeText={value => this.onChangeText('education', value)} />
            </Item>
            <Item floatingLabel last>
              <Icon active name="clipboard" />
              <Label>Position:</Label>
              <Input onChangeText={value => this.onChangeText('position', value)} />
            </Item>
            <Item>
              <Icon active name="create" />
              <Label>Experience:</Label>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Exp: 3-12 Months"
                placeholderStyle={{ color: '#bfc6ea' }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.experience}
                onValueChange={value => this.onChangeText('experience', value)}>
                <Picker.Item label="3-12 Months" value="3-12 Months" />
                <Picker.Item label="1-3 Years" value="1-3 Years" />
                <Picker.Item label="3-5 Years" value="3-5 Years" />
                <Picker.Item label="5-10 Years" value="5-10 Years" />
                <Picker.Item label="Up to 10 Years" value="Up to 10 Years" />
              </Picker>
            </Item>
          </Form>
          <ListItem>
            <CheckBox onChanged={this.onChanged.bind(this)} />
            <Body>
              <Text>Agree</Text>
            </Body>
          </ListItem>
          <Button bordered onPress={() => this.signUp()} >
            <Text>Create new account</Text>
          </Button>


        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',


  },
  paragraph: {

    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
