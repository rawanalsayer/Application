import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
} from 'native-base';
export default class Trainee extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
          <Card style={{ flex: 1 }}>
            <CardItem bordered style={{ backgroundColor: "#e3f1f1" ,  marginTop: 15}}>
              <Left>
                <Thumbnail
                  source={{
                    uri:
                      this.props.thumbnailUri,
                  }}
                />
                <Body>
                  <Text style={{fontSize: 22 ,color:"black"}}>{this.props.name}</Text>
                  <Text note>{this.props.date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem >
              <Body >
                <Image  source={{uri:
                      this.props.bodyImageUri,}}
                  style={{ height: 300, width: 350, flex: 1  }}/>

                <Text style={{ marginTop:15}}>Student at  {this.props.university}</Text>
                <Text>{this.props.age} Years old</Text>
                <Text style={{ marginBottom:15}}>{this.props.major} Major</Text>
              
              </Body>
            </CardItem>
          </Card>
     
    );
  }
}
