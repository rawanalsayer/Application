import * as React from 'react';
import { Text, View, Button } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Left, Body, List, ListItem } from 'native-base';
import CheckBox  from '../shared/CheckBox'

export default class App extends React.Component {
  render() {
    return (


      <Container>


        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

          <Text Text style={{ color: 'black', fontSize: 22 }} >Trainee's Skills</Text>
        </View>

        <Content>

          <Card style={{ flex: 1 }}>
            <CardItem style={{ flex: 1, backgroundColor: "#e3f1f1", margin: 15 }}>
              <Left>
                <Thumbnail source={{ uri: 'https://images.pexels.com/photos/6972/summer-office-student-work.jpg?cs=srgb&dl=adult-beard-concentrated-6972.jpg&fm=jpg' }} />
                <Body>
                  <Text Text style={{ color: 'black', marginTop: 15 }} >  Adel Ahmad</Text>


                </Body>
              </Left>
            </CardItem>
          </Card>
          <List style={{ margin: 15 }}>

            <ListItem>
              <CheckBox  />
              <Text>  Leadership</Text>
            </ListItem>

            <ListItem>
              <CheckBox />
              <Text>  Teamwork</Text>
            </ListItem>

            <ListItem>
              <CheckBox />
              <Text>  Serverless</Text>
            </ListItem>
            <ListItem>
              <CheckBox />
              <Text>  Networking</Text>
            </ListItem>
            <ListItem>
              <CheckBox />
              <Text>  Containerization</Text>

            </ListItem>
          </List>

          <View style={{ flexDirection: "row" }}>

            <Button title="Save" color="black" style={{
              backgroundColor: "#e3f1f1",
              width: 150,
              height: 45,
              borderColor: "transparent",
              borderWidth: 0,
              borderRadius: 5

            }}
              onPress={() => null}
            />
            <Button
              title="Cancel" color="black"
              style={{
                backgroundColor: "#e3f1f1",
                width: 150,
                height: 45,
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 5
              }}
              onPress={() => null}
            />
          </View>



        </Content>

      </Container>


    );
  }
}


