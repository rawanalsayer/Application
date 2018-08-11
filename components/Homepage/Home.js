import React, { Component } from "react";
import { Container, Header, Content, Card, CardItem, Title, Text, Body ,Right ,Thumbnail} from "native-base";
export default class CardItemBordered extends Component {
  render() {
        const uri = "http://a.up-00.com/2018/08/153396049515431.png";
    return (
      <Container>
        <Header>
         <Body>
            <Title>Home</Title>
          </Body>
        </Header>
        <Content padder style={{ flex: 1,
    width: '100%', 
    height: '100%',}}>
        <Right>
          <Thumbnail style={{width: 300, height: 300, borderRadius: 30/2, margin: 10}} source={{uri: uri}}  square  />
          </Right>
          <Card>
          
            <CardItem header bordered style={{ backgroundColor: "#e3f1f1"}}>
              <Text style={{fontSize: 22 ,color:"black"}}>Forty Days Academy</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={{
    fontSize: 19}}>
                Hello dear Supervisor, It’s a pleasure to having you between us. Is it your first time ? How about taking  a quick start?
                </Text>
              </Body>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
        
  