import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body , Title , Right } from 'native-base';
export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
<Header>
          <Left/>
          <Body>
            <Title>Courses</Title>
          </Body>
          <Right />
        </Header>           <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://pluralsight2.imgix.net/paths/images/docker-copy-3135ce60d0.png'}} />
                <Body>
                  <Text> Docker Course</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
Docker is a computer program that performs operating-system-level virtualization also known as containerization. It was first released in 2013 and is developed by Docker, Inc. Docker is used to run software packages called "containers".

                </Text>
              </Body>
            </CardItem>
          </Card>
           <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://www.python.org/static/opengraph-icon-200x200.png'}} />
                <Body>
                  <Text>Phython Course</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance.
                </Text>
              </Body>
            </CardItem>
          </Card>
           <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://sdtimes.com/wp-content/uploads/2015/10/1026.sdt-javaone.png'}} />
                <Body>
                  <Text>Java</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>Java is a general-purpose computer-programming language that is concurrent, class-based, object-oriented, and specifically designed to have as few implementation dependencies as possible.
                </Text>
              </Body>
            </CardItem>
          </Card>
           <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCtYN4Aan9IEeJ8N8eO7x2E2C_ukNQ6f9WRi2NzuyLt_tJXNUE'}} />
                <Body>
                  <Text>Ubuntu Course</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                 Ubuntu is an open source software operating system that runs from the desktop, to the cloud, to all your internet connected things.
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}