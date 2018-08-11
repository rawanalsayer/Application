
import React, {Component} from 'react';
import { StyleSheet, TextInput, View,ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Body, Title, Tabs,TabHeading, Tab, Text,Card, CardItem } from 'native-base';
import Individual from './Individual.js';
import Groups from './Groups.js';
export default class Tasks extends React.Component {
  
    render() {
    return (
     
      <Container >
       
        <Header noLeft>
         <Body>
            <Title>Tasks</Title>
          </Body>
        </Header>
         <Tabs>
          <Tab heading={ <TabHeading> ><Text>Individual</Text></TabHeading>}>
          < Individual/ >
          </Tab>
          <Tab heading={ <TabHeading><Text>Groups</Text></TabHeading>}>
            < Groups/ >
          </Tab>
        </Tabs>
        
      </Container>
     
    );
  }
}


