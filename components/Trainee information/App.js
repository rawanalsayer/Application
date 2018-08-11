import React, { Component } from 'react';
import {
  Container,
  Header,
  Content,
  Text,
  Button,
  Icon,
  Right,
  Left,
  Body,
  Title,
  Spinner
} from 'native-base';
import Trainee from './Trainee';
export default class CardShowcaseExample extends Component {
  state = {
    trainees: [
      {
        thumbnailUri:
          'https://images.pexels.com/photos/6972/summer-office-student-work.jpg?cs=srgb&dl=adult-beard-concentrated-6972.jpg&fm=jpg',
        name: 'Adel Ahmad',
        bodyImageUri:
          'https://images.pexels.com/photos/34676/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        major: 'IT',
        university: 'AlQassim',
        age: '22',
      },
      {
        thumbnailUri:
          'https://images.pexels.com/photos/7079/people-woman-girl-writing.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: 'Sarah Mohammed',
        bodyImageUri:
          'https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        major: 'IT',
        university: 'AlQassim',
        age: '23',
      },
      {
        thumbnailUri:
          'https://images.pexels.com/photos/889096/pexels-photo-889096.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: 'Ghadeer Ail',
        bodyImageUri:
          'https://images.pexels.com/photos/96858/pexels-photo-96858.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        major: 'Computer Science',
        university: 'AlQassim',
        age: '22',
      },
      {
        thumbnailUri:
          'https://images.pexels.com/photos/247899/pexels-photo-247899.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: 'Yousif Adel',
                bodyImageUri:
          'https://images.pexels.com/photos/132650/pexels-photo-132650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        major: 'Software Engineering',
        university: 'Al-Yamamah',
        age: '22',
      },
      {
        thumbnailUri:
          'https://images.pexels.com/photos/340152/pexels-photo-340152.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        name: 'Abdullah Mohammed',
        bodyImageUri:
          'https://images.pexels.com/photos/247791/pexels-photo-247791.png?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        major: 'Network',
        university: 'King Saud',
        age: '22',
      },
    ],
  };

  render() {
    const trainees = this.state.trainees.map((trainee, i) => {
      return (
        <Trainee
          key={i}
          thumbnailUri={trainee.thumbnailUri}
          name={trainee.name}
          bodyImageUri={trainee.bodyImageUri}
          major={trainee.major}
          university={trainee.university}
          age={trainee.age}
        />
      );
    });
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body >
            <Title>Trainees</Title>
          </Body>
          <Right />
        </Header>
        <Content>{trainees ? trainees : <Spinner color="blue" />}</Content>
      </Container>
    );
  }
}
