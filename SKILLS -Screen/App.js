import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Container,Image, Header, Content, Card, CardItem, Thumbnail, Left, Body , List , ListItem , CheckBox , activateLasers , onClick  , Checkbox} from 'native-base';
import { Constants } from 'expo';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import { createStackNavigator } from 'react-navigation';
import { AppRegistry , styles } from 'react-native';

export default class App extends React.Component {
  render() {
   

    return (
    
<Container>
  
  
      <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'center' }}>
   
        <Text Text style={{color: 'Black' , fontStyle:'Bold' , fontSize: '22'}} >Trainee's Skills</Text>      
</View>

                 <Content>
                
          <Card style={{flex: 1 , }}>
            <CardItem style={{flex: 1 , backgroundColor: "#e3f1f1" ,margin:15}}>
              <Left>
                <Thumbnail source={{uri: 'https://images.pexels.com/photos/6972/summer-office-student-work.jpg?cs=srgb&dl=adult-beard-concentrated-6972.jpg&fm=jpg'  }}  />
                <Body>
         <Text Text style={{color: 'Black' , fontSize: '20', marginTop:'15'}} >  Adel Ahmad</Text>      

        
                </Body>
              </Left>
            </CardItem>
          </Card>
                    <List style={{margin:15}}>
                        <ListItem>
   <CheckBox color="black" checked={true} />
                            <Text>  Leadership</Text>  
                        </ListItem>
                        <ListItem>
                            <CheckBox color="black" checked={true}  />
                            <Text>  Teamwork</Text>               
                        </ListItem>
                             <ListItem>
                            <CheckBox color="black" checked={false} />
                            <Text>  Serverless</Text>                           
                        </ListItem>
                             <ListItem>
                            <CheckBox color="black" checked={true} />
                             <Text>  Networking</Text>
                        </ListItem>
                             <ListItem>
                            <CheckBox color="black" checked={false} />
                            <Text>  Containerization</Text>
                            
                        </ListItem>
                    </List>

      <View style={{flexDirection: "row" }}> 

<Button   title="Save" color="Black"  fontSize='15' buttonStyle={{
    backgroundColor: "#e3f1f1",
    width: 150,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5 
  }}>
</Button>
<Button
title="Cancel" color="Black" fontSize='15'
   buttonStyle={{
    backgroundColor: "#e3f1f1",
    width: 150,
    height: 45,
    borderColor: "transparent",
    borderWidth: 0,
    borderRadius: 5 
  }}
/>
</View>



                </Content>
               
            </Container>


    );
  }
}


