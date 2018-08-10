import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Body ,Input, Label , Left ,Text , Title ,Button , Icon ,View , Badge} from 'native-base';

import { AppRegistry, Image } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput } from 'react-native';
export default class FloatingLabelExample extends Component {
  render() {
    let pic = {
      uri: 'https://www.brabantadvies.com/wp-content/uploads/2017/01/avatar-1577909_1280.png'
    };
    
    
    return (
      
      <Container>
        <Header>
        <Left>
            <Button transparent>
              <Icon name='md-options'/>
            </Button>
            </Left>
            <Body>
            <Title>Profile         </Title>
          </Body>
        </Header >
        
        
        <Content>
        <Image source={pic} style={{width: 150, height: 150 , flex: 2 , marginLeft: 100, marginTop: 30}}/>
       
        <Button transparent info>
         <View style={{flex:1,justifyContent: "center",alignItems: "center"}}>
            
            <Text style={styles.bigblue}>Edit photo</Text></View>
          </Button>
        
          <Form>
            <Item fixedLabel>
            <Icon name="md-create" style={{fontSize: 20, color: '#92989B'}} />
              <Icon name="person" style={{fontSize: 20, color: '#92989B'}}/>
              
              <Label>Username</Label>
              <Input />
            </Item>

            <Item fixedLabel>
             <Icon name="md-create" style={{fontSize: 20, color: '#92989B'}} />
              <Icon name="mail" style={{fontSize: 20, color: '#92989B'}}/>
              <Label>Email</Label>
             
              <Input />
              </Item>
            
            <Item fixedLabel>
             <Icon name="md-create" style={{fontSize: 20, color: '#92989B'}} />
             <Icon name="md-key" style={{fontSize: 20, color: '#92989B'}}/>
              <Label>Password</Label>
              <Input />
            </Item>
<Button  disabled iconRight style={{width: 100, height: 50 , flex: 2 , marginLeft: 130, marginTop: 30}}>

              <Text>save</Text>
              <Icon name="ios-checkmark-circle" />
            </Button>

          </Form>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  bigblue: {
    color:'#31BBEE',
    fontWeight: 'bold',
    fontSize: 15,
  
  },
});