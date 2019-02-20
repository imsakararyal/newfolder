import React from "react";
import {
  AppRegistry,
  Alert,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  AsyncStorage,
  Linking
} from "react-native";

import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Accordion,
  Icon,
  Title,
  Card,
  CardItem
} from "native-base";


import { storage } from "../../App";
import Placeholder from "rn-placeholder";
import { NavigationActions } from "react-navigation";
import { withNamespaces } from "react-i18next";
export class NewsList extends React.Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {
      documentData: [],
      acc: [],
      isReady: true,
      currentLanguage:'',
    };
    this.getData2();
  }
  static navigationOptions = ({ navigation }) => ({
    header: null

  });
  getData2(){
    console.log('from get data 2');
    storage.sync = {
      // The name of the sync method must be the same as the data's key name
      // And the passed params will be an all-in-one object.
      // You can return a value or a promise here

      async document(params) {
        return (
          fetch("http://colapp.drcmp.org/api/documents", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json"
            }
          })
            .then(response => {
              console.log("response from sync");
              return response.json();
            })
            .then(responseData => {
               console.log("RESPONSE DATA" + JSON.stringify(responseData.documents));
              //    return responseData;
              if (responseData) {
                storage.save({
                  key: "document",
                  //id,
                  data: responseData.documents


              /*    data: {
                    from: 'some other site',
                    userid: 'some userid',
                    token: 'some token'
                  },  */                
                }
                  
                  
                  );
                  
              }
            })
            // .then(data =>
            // console.log("data"+data.documentId),
            //  data.forEach(data2 => {
            //  console.log(data2.title);
            //  })
            // )

            .catch(err => {
              console.log("fetch error" + err);
            })
        );
      }
    };
  }
  getData() {
    console.log("Get Data");
    console.log("into getData1");
    storage
      .load({
        key: "document",
        autoSync: true,
        syncInBackground: true
      })
      .then(res => {
        console.log("res data");
        console.log("Resdata" + JSON.stringify(res));
        //    if (this._isMounted) {
        //   console.log("is mounted"+ this._isMounted);

        this.setState(
          {
            documentData: res,
            //  acc: this.state.acc.concat( { title:  res[1].title, content: res[1].body})

            isReady: true
          },
          function() {
            console.log("DATA SET");
            // console.log(this.state.documentData);
            if (this.state.documentData && this.state.documentData.length > 0) {
              console.log("document data is here");
              this.state.documentData.map((key, index) => {
               console.log(this.state.documentData[index].id);

                this.setState(
                  prevState => ({
                    acc: [
                      ...prevState.acc,
                      {

                       // id: this.state.documentData[index].id,
                       
                  

                       
                       id: this.state.documentData[index].id,
                       title: this.state.documentData[index].title,
                       title_idn: this.state.documentData[index].title_idn,
                       url: this.state.documentData[index].url

                      
                        
                      }
                    ]
                  }),

                  function() {
                    console.log("set");

                    // console.log(this.state.documentData);
                  }
                );
              });
            }
          }
        );
        // }
      })
      .catch(err => {
        switch (err.name) {
          case "NotFoundError":
            console.log("not found");
            alert("没有找到token");
            break;
          case "ExpiredError":
            alert("token失效");
            break;
        }
      });

  }
  componentDidMount() {
    this._isMounted = true;
    if (this._isMounted == true) {
      this.getData();
    }
  }

  componentWillUnmount() {
    this._isMounted = false;
  }
  componentWillMount(){
    AsyncStorage.getItem("language").then((value) => {
      console.log("Value"+value);
      this.setState({currentLanguage: value});
  })
  .then(res => {
      //do something else
  });
  }
  makeDowload(){
    this.props.navigation.navigate("download");
  
  }
  render() {
    const { t, i18n, navigation } = this.props;
    const { navigate } = navigation;
    return (
      <Container>
              <Header> 
      <Left>
      <Button transparent onPress={() => navigation.dispatch(NavigationActions.back())}>
          <Icon name="arrow-back" />
        </Button>
      </Left>
      <Body>
        <Title>{t("documents:title")}</Title>
      </Body>
      <Right />
    </Header>
        <Content>
          {!this.state.isReady ? (
            <View>
              <Card  transparent style={{marginLeft:5,marginRight:5}}>
                <Placeholder.ImageContent
                  style={{ color: "red", backgroundColor: "blue" }}
                  size={120}
                 // width="80"
                  animate="shine"
                  lineNumber={4}
                  lineSpacing={5}
                  lastLineWidth="30%"
                  onReady={this.state.isReady}
                >
               
                  <Text>Placeholder has finished :D</Text>
                </Placeholder.ImageContent>
              </Card>

              <Card  transparent style={{marginLeft:5,marginRight:5}}>
                <Placeholder.ImageContent
                  style={{ color: "red", backgroundColor: "blue" }}
                  size={120}
                //  width="80"
                  animate="shine"
                  lineNumber={4}
                  lineSpacing={5}
                  lastLineWidth="30%"
                  onReady={this.state.isReady}
                >
               
                  <Text>Placeholder has finished :D</Text>
                </Placeholder.ImageContent>
              </Card>
              <Card  transparent style={{marginLeft:5,marginRight:5}}>
                <Placeholder.ImageContent
                  style={{ color: "red", backgroundColor: "blue" }}
                  size={120}
                 // width="80"
                  animate="shine"
                  lineNumber={4}
                  lineSpacing={5}
                  lastLineWidth="30%"
                  onReady={this.state.isReady}
                >
               
                  <Text>Placeholder has finished :D</Text>
                </Placeholder.ImageContent>
              </Card>
              <Card  transparent style={{marginLeft:5,marginRight:5}}>
                <Placeholder.ImageContent
                  style={{ color: "red", backgroundColor: "blue" }}
                  size={120}
                //  width="80"
                  animate="shine"
                  lineNumber={4}
                  lineSpacing={5}
                  lastLineWidth="30%"
                  onReady={this.state.isReady}
                >
               
                  <Text>Placeholder has finished :D</Text>
                </Placeholder.ImageContent>
              </Card>
              <Card  transparent style={{marginLeft:5,marginRight:5}}>
                <Placeholder.ImageContent
                  style={{ color: "red", backgroundColor: "blue" }}
                  size={120}
                //  width="80"
                  animate="shine"
                  lineNumber={4}
                  lineSpacing={5}
                  lastLineWidth="30%"
                  onReady={this.state.isReady}
                >
               
                  <Text>Placeholder has finished :D</Text>
                </Placeholder.ImageContent>
              </Card>
              <Card  transparent style={{marginLeft:5,marginRight:5}}>
                <Placeholder.ImageContent
                  style={{ color: "red", backgroundColor: "blue" }}
                  size={120}
                //  width="80"
                  animate="shine"
                  lineNumber={4}
                  lineSpacing={5}
                  lastLineWidth="30%"
                  onReady={this.state.isReady}
                >
               
                  <Text>Placeholder has finished :D</Text>
                </Placeholder.ImageContent>
              </Card>
            </View>
          ) : (
            <View >
          <List style={{marginLeft:5,marginRight:5}}
                dataArray={this.state.acc}
                renderRow={item => (
                  <ListItem
                  thumbnail
                  onPress={() => {
                    Linking.openURL(
                      "http://gahp.net/wp-content/uploads/2017/09/sample.pdf"
                    );
                  }}
                >
                  <Thumbnail
                    source={require("../../assets/icons/document.png")}
                  />
  
                  <Body>
             
             
                    <Text note numberOfLines={3}>
                   {
this.state.currentLanguage=='en'?item.title:item.title_idn

                   } 
                 
                    </Text>
                  </Body>
                  <Button
                    transparent
                    onPress={() => {
                      this.makeDowload();
                    }}
                  >
                    <Text>{t("documents:download")}</Text>
                  </Button>
                </ListItem>

              
                  
                )}
              />


          

          
            </View>
          )}
        </Content>
      </Container>
    );
  }
}
export default withNamespaces(['documents', 'common'], { wait: true })(NewsList);