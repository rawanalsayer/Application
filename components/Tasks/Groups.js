
import React, {Component} from 'react';
import { StyleSheet, TextInput, View,ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Body, Title, Tabs,TabHeading, Tab, Text,Card, CardItem, CheckBox} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


export default class Groups extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Group Name' ,'Leader',  'Content' , 'Acceptable'],
      tableData: [
        ['Group-a', 'Sara','http://github.com', <TaskChecker />],
        ['Group-b','Ahmed', 'https://www.google.com/drive/' , <TaskChecker />],
        ['Group-c','Fala', 'https://www.youtube.com/?gl=SA' ,<TaskChecker />],
        ['Group-d','Rawan', 'http://github.com' ,<TaskChecker />],
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <Container style={{margin: 15}} >
         <Card>
          <CardItem header bordered style={styles.carditem}>
              <Text style={{ color:'black', fontWeight: 'bold'}}>Application</Text>
            </CardItem>
            
          <Table borderStyle={{borderWidth: 0}} >
           <Row data={state.tableHead}  textStyle={styles.headtext} />
             <Rows data={state.tableData} textStyle={styles.text}/>
             
        </Table>

        </Card>
        <View style={{flexDirection: "row" , justifyContent: "center" }}>
            <Button light style={styles.utton}>
              <Text>Save </Text>
            </Button>
            <Button light style={styles.utton}>
              <Text>Cancel</Text>
            </Button >
        </View>
      </Container>

     
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  
    justifyContent: 'center',
  },
  content:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  
    headtext:{
   color: 'black',
     margin: 10,
    fontSize: 16,
    fontWeight: 'bold',
    
  },

  text:{
     color: 'black',
     margin: 10,
    fontSize: 14
    
  },
    forget:{
    fontSize: 14

  },
  head: { height: 40, backgroundColor:'#e3f1f1' },


carditem: {
 backgroundColor:'#e3f1f1',
 
},
utton:{
  backgroundColor: "#e3f1f1" , margin:15 , width: 120,
    height: 45, borderWidth: 0,
    borderRadius: 5 
}
},


);

class TaskChecker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }

  render() {
    const state = this.state;
    return (
      <CheckBox color="black"
        checked={state.checked}
        onPress={() => this.setState({ checked: !this.state.checked })}
      />
    );
  }
}
