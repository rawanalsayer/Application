
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Button, Text,Card, CardItem} from 'native-base';
import { Table, Row, Rows } from 'react-native-table-component';
import TaskChecker from '../shared/CheckBox'


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
      <Container style={{margin: 15}} >
         <Card>
          <CardItem header bordered style={styles.carditem} >
              <Text style={{ color:'black', fontWeight: 'bold'}}>Serverless</Text>
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


