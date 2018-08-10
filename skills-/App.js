import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container,Image, Header, Content, Card, CardItem, Thumbnail, Left, Body , List , ListItem , CheckBox , activateLasers , onClick } from 'native-base';
import { Constants } from 'expo';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Checkbox from './components/Checkbox';




export default class App extends React.Component {
  render() {
    return (
      

       <Container>


                  <Header>
                  <Text>Trainee's skills </Text>
                  </Header>

                 <Content>
                 

          <Card style={{flex: 1}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/6972/summer-office-student-work.jpg?cs=srgb&dl=adult-beard-concentrated-6972.jpg&fm=jpg'}} />
                <Body>
                  <Text>Adel Ahmad </Text>
                  <Text note>April 15, 2018</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
                    <List>
                        <ListItem>
 
                        </ListItem>
                        <ListItem>
                            <CheckBox checked={true} />
                            <Text>Teamwork</Text>               
                        </ListItem>
                             <ListItem>
                            <CheckBox checked={false} />
                            <Text>Serverless</Text>                           
                        </ListItem>
                             <ListItem>
                            <CheckBox checked={true} />
                             <Text>Networking</Text>
                        </ListItem>
                             <ListItem>
                            <CheckBox checked={true} />
                            <Text>Containerization</Text>
                            
                        </ListItem>
                    </List>
                

<Button
title="Save"
   buttonStyle={{
    backgroundColor: "#3d9ad1",
    width: 150,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5
  }}
/>




                </Content>
               
            </Container>


    );
  }
}

