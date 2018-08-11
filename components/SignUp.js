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
  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }

  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>Sign Up</Title>
          </Body>
        </Header>
        <Content>
          <Card style={{  margin: 15}}>
           <CardItem bordered style={{ backgroundColor: "#e3f1f1" }}>
            <Text style={styles.paragraph}>Be part of FortyDays Team and Join us now </Text>
           </CardItem>
          </Card> 
            <Form style={{  margin: 15}}>
              <Item floatingLabel>
                <Icon active name="contact" style={styles.icon} />
                <Label style={styles.label}>Name:</Label>
                <Input />
              </Item>
              <Item floatingLabel>
                <Icon active name="mail" style={styles.icon}  />
                <Label style={styles.label}>Email:</Label>
                <Input />
              </Item>
              <Item floatingLabel last >
                <Icon  active name="lock"  style={styles.icon} />
                <Label style={styles.label}>Password:</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Icon active name="briefcase" style={styles.icon} />
                <Label style={styles.label}>Education:</Label>
                <Input />
              </Item>
              <Item floatingLabel last>
                <Icon active name="clipboard"  style={styles.icon} />
                <Label style={styles.label}>Position:</Label>
                <Input />
              </Item>
              <Item style={{marginTop:20}}>
                <Icon active name="create" style={styles.icon} />
                <Label style={{marginLeft:13}}>Experience:</Label>
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

             <ListItem >
             
              <CheckBox style={{  marginLeft: 15}} checked={true} color="black" />
              <Body>
               <Text>Please read the Terms of Use carefully before entering or participating. Agree</Text>
                
              </Body>
            </ListItem>
              <Button light disabled iconRight style={{width: 150, height: 45, margin: 30 , backgroundColor: "#e3f1f1"  }} >
              <Text>Sign Up </Text>
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
    color: 'black',
  },

  icon:{
   fontSize: 35

  },
    label:{
   fontSize: 18,
   marginLeft: 20

  }
});
