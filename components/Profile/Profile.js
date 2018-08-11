import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Body, Input, Label, Text, Title, Button, Icon, View } from 'native-base';
import { Auth } from 'aws-amplify'

import { Image, StyleSheet, Alert } from 'react-native';
export default class FloatingLabelExample extends Component {
  render() {
    let pic = {
      uri: 'https://www.brabantadvies.com/wp-content/uploads/2017/01/avatar-1577909_1280.png'
    };

    return (

      <Container>
        <Header>
          <Body>
            <Title>Profile</Title>
          </Body>
        </Header >
        <Content  >
          <Image source={pic} style={{ width: 150, height: 150, flex: 2, marginLeft: 100, marginTop: 30 }} />

          <Button transparent info>
            <View style={{ flex: 1, alignItems: "center" }} >

              <Text style={styles.bigblue}>Edit photo</Text></View>
          </Button>

          <Form style={{ marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 20 }}>
            <Item inlineLabel>
              <Icon name="person" />
              <Label>Username</Label>
              <Input />
            </Item>

            <Item inlineLabel>
              <Icon name="mail" />
              <Label>Email</Label>

              <Input />
            </Item>

            <Item inlineLabel>
              <Icon name="md-key" />
              <Label>Password</Label>
              <Input />
            </Item>

          </Form>

          <View style={{ flexDirection: "row", flex: 1, alignItems: 'center', justifyContent: 'space-evenly' }}>
            <Button light iconRight style={{ width: 150, height: 45, marginTop: 30, marginLeft: 30, marginRight: 15, marginBottom: 30, backgroundColor: "#e3f1f1" }}>

              <Text>save</Text>
            </Button>


            <Button light disabled iconRight style={{ width: 150, height: 45, marginTop: 30, marginLeft: 40, marginRight: 30, marginBottom: 30, backgroundColor: "#e3f1f1" }} >

              <Text >cancel</Text>
            </Button>
          </View>
          <View>
            <Button danger full onPress={() => Auth.signOut().then(() => this.props.navigation.navigate('Auth')).catch(err => Alert.alert(err))}>
              <Text>Logout</Text>
            </Button>
          </View>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color: '#31BBEE',
    fontWeight: 'bold',
    fontSize: 22,

  },
});