import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground } from 'react-native';
import {
  Container,
  Header,
  Content,
  Left,
  Title,
  Right,
  CheckBox,
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

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: undefined,
    };
  }
  onValueChange2(value: string) {
    this.setState({
      selected2: value,
    });
  }

  render() {
    return (
      <Container style={styles.container}>
      <ImageBackground
            source={require('./backgroung.png')}
            style={{ width: '100%', height: '100%' }}>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Sign Up</Title>
          </Body>
          <Right>
            <Button transparent>
              <Text>Cancel</Text>
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
           <CardItem>
            <Text style={styles.paragraph}>>Be part of FortyDays Team and Join us now</Text>
           </CardItem>
          </Card> 
            <Form>
              <Item floatingLabel>
                <Icon active name="contact" />
                <Label>Name:</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Icon active name="mail" />
                <Label>Email:</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Icon active name="lock" />
                <Label>Password:</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Icon active name="briefcase" />
                <Label>Education:</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Icon active name="clipboard" />
                <Label>Position:</Label>
                <Input />
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
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}>
                  <Picker.Item label="3-12 Months" value="key0" />
                  <Picker.Item label="1-3 Years" value="key1" />
                  <Picker.Item label="3-5 Years" value="key2" />
                  <Picker.Item label="5-10 Years" value="key3" />
                  <Picker.Item label="Up to 10 Years" value="key4" />
                </Picker>
              </Item>
            </Form>
            <ListItem>
              <CheckBox checked={true} color="blue" />
              <Body>
                <Text>Agree</Text>
              </Body>
            </ListItem>
            <Button bordered  >
              <Text>Create new account</Text>
            </Button>
          
        </Content>
        </ImageBackground>
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
