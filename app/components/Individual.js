
import React, {Component} from 'react';
import { StyleSheet, TextInput, View,ImageBackground } from 'react-native';
import { Container, Header, Content, Button, Body, Title, Tabs,TabHeading, Tab, Text,Card, CardItem, CheckBox} from 'native-base';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';


export default class Individual extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['Name',  'Content' , 'Acceptable'],
      tableData: [
        ['Sara', 'http://github.com', <TaskChecker />],
        ['Amirah', 'https://www.google.com/drive/' , <TaskChecker />],
        ['Latifah', 'https://www.youtube.com/?gl=SA' ,<TaskChecker />],
        ['Abdulrahman', 'http://github.com' ,<TaskChecker />],
      ]
    }
  }
  render() {
    const state = this.state;
    return (
      <Container  >
         <Card>
          <CardItem header>
              <Text>Serverless</Text>
            </CardItem>
            
          <Table borderStyle={{borderWidth: 0}} >
           <Row data={state.tableHead}  style={styles.head} textStyle=                       {styles.text}/>
             <Rows data={state.tableData} textStyle={styles.text}/>
             
        </Table>

        </Card>
        <View style={{flexDirection: "row"}}>
            <Button  light >
            <Text>Save </Text>
          </Button>
              <Button light>
            <Text>Cancel</Text>
          </Button>
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
   flexDirectin: 'row',
    justifyContent: 'space-between'
  },


  text:{
    color: 'blue',
     margin: 6,
    fontSize: 14
  },
    forget:{
    fontSize: 14

  },
  head: { height: 40, backgroundColor: '#f1f8ff' },

});

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
      <CheckBox
        checked={state.checked}
        onPress={() => this.setState({ checked: !this.state.checked })}
      />
    );
  }
}
