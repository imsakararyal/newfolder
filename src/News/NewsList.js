import React from "react";
import {
  AppRegistry,
  Alert,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Linking,AsyncStorage
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
      newsData: [],
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

      async news(params) {
        return (
          fetch("http://colapp.drcmp.org/api/news", {
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
               console.log("RESPONSE DATA" + JSON.stringify(responseData.news));
              //    return responseData;
              if (responseData) {
                storage.save({
                  key: "news",
                  //id,
                  data: responseData.news


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
        key: "news",
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
            newsData: res,
            //  acc: this.state.acc.concat( { title:  res[1].title, content: res[1].body})

            isReady: true
          },
          function() {
            console.log("DATA SET");
            // console.log(this.state.newsData);
            if (this.state.newsData && this.state.newsData.length > 0) {
              console.log("document data is here");
              this.state.newsData.map((key, index) => {
               console.log(this.state.newsData[index].id);

                this.setState(
                  prevState => ({
                    acc: [
                      ...prevState.acc,
                      {

                       // id: this.state.newsData[index].id,
                       
                  

                       
                       id: this.state.newsData[index].id,
                       title: this.state.newsData[index].title,
                       title_idn: this.state.newsData[index].title_idn,
                       description: this.state.newsData[index].description,
                       description_idn: this.state.newsData[index].description_idn,
                       image: this.state.newsData[index].image,
                       thumbnail: this.state.newsData[index].thumbnail
                      
                        
                      }
                    ]
                  }),

                  function() {
                    console.log("set");

                    // console.log(this.state.newsData);
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
          <Title>{t("news:title")}</Title>
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
                 // width={80}
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
                 // width={80}
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
                //  width={80}
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
                //  width={80}
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
                 // width={80}
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
                //  width={80}
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
                 
                
                  <TouchableWithoutFeedback
                  onPress={() => {
                    this.props.navigation.navigate("NewsDetail", {
             
                      title: item.title,
                      title_idn: item.title_idn,
                      description: item.description,
                      description_idn: item.description_idn,
                      image: item.image
                    });
                  }}
                >
                <Card transparent style={{flex:1}}>
                    <CardItem cardBody style={{
                      borderColor:'#eee',
                      borderWidth:1,
                    }}>
                      <Left style={{flex:1}}>
                        <Thumbnail
                          square
                        
                        source={{ uri: `http://colapp.drcmp.org/uploads/news_images/${item.image}` }}
                          style={{   borderColor:'#ddd',
                          borderWidth:1,width:100,height:120}}
                        />
                      </Left>
                      <Body
                        style={{ alignSelf: "flex-start", marginLeft: "-40%",padding:10 }}
                      >
                        <Text style={{ fontSize: 16, fontWeight: "bold",padding:5,marginLeft:5 }}>
                        
                          {
                          this.state.currentLanguage=='en'?item.title:item.title_idn
                          }
                        </Text>
                        <Text>
                        {
                          this.state.currentLanguage=='en'?item.description:item.description_idn
                          }

                        </Text>

                                             </Body>
                    </CardItem>
                  </Card>
                </TouchableWithoutFeedback>
                  
                )}
              />

          
            </View>
          )}
        </Content>
      </Container>
    );
  }
}
export default withNamespaces(['news', 'common'], { wait: true })(NewsList);