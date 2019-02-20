import React from "react";
import { AppRegistry, Alert, StyleSheet, View, TouchableOpacity,Linking } from "react-native";

import {
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
  H1,
  Image,List,ListItem, Thumbnail
} from "native-base";
import { Constants, FileSystem } from 'expo';

export default class DocumentList extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    header: (
      <Header>
        <Left>
          <Button transparent onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Financial Records</Title>
        </Body>
        <Right />
      </Header>
    )
  });
  makeDowload() {
    FileSystem.downloadAsync(
     'http://gahp.net/wp-content/uploads/2017/09/sample.pdf',
     FileSystem.documentDirectory + 'small.pdf'
   )
     .then(({ uri }) => {
       console.log('Finished downloading to ', uri);
     })
     .catch(error => {
       console.error(error);
     });

 }
  render() {
    return (
        <Container>
       
        <Content>
         {/*
        <Text>   {FileSystem.documentDirectory}</Text>
        
        
        */} 
          <List>
            <ListItem thumbnail>
              <Left>
            <View
            
   style={{
       borderWidth:10,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:70,
       height:70,
       backgroundColor:'#fff',
       borderRadius:100,
       fontSize:12
     }}
 >
<Text style={{fontSize:12}}>1st </Text>
<Text style={{fontSize:12}} numberOfLines={1}>Quater</Text>
            </View>
                   
            
              </Left>
              <Body>
                <Text>2073/2074</Text>
                <Text note numberOfLines={1}>2073/2074 Report</Text>
              </Body>
              <Right>
                <Button transparent onPress={() => {

this.props.navigation.navigate('FinancialRecordDetail', {


    url:"sssss",

});
}}>
                  <Text>View</Text>
                </Button>

                <Button transparent onPress={() => {
this.makeDowload();

}}>
                  <Text>Download</Text>
                </Button>
                <Button transparent onPress={() => {
Linking.openURL('http://gahp.net/wp-content/uploads/2017/09/sample.pdf');

}}>
                  <Text>View External</Text>
                </Button>
              </Right>
            </ListItem>

                        <ListItem thumbnail>
              <Left>
            <View
            
   style={{
       borderWidth:10,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:70,
       height:70,
       backgroundColor:'#fff',
       borderRadius:100,
       fontSize:12
     }}
 >
<Text style={{fontSize:12}}>1st </Text>
<Text style={{fontSize:12}} numberOfLines={1}>Quater</Text>
            </View>
                   
            
              </Left>
              <Body>
                <Text>2073/2074</Text>
                <Text note numberOfLines={1}>2073/2074 Report</Text>
              </Body>
              <Right>
                <Button transparent>
                  <Text>View</Text>
                </Button>
                <Button transparent>
                  <Text>Download</Text>
                </Button>
              </Right>
            </ListItem>
          </List>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

});
