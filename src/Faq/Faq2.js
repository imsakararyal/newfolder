import React, { Component } from "react";
import {
  ListView,
  Platform,
  StyleSheet,
  View,
  Alert,
  AppRegistry,
  Image,
  TouchableHighlight,
  ScrollView,
  AsyncStorage,
  TextInput,
  DatePickerIOS,
  TouchableOpacity
} from "react-native";

// import MapView from "react-native-maps";

import {
  Container,
  Body,
  Header,
  Item,
  Input,
  Icon,
  Content,
  Footer,
  FooterTab,
  Button,
  Badge,
  StyleProvider,
  Text,
  Card,
  CardItem,
  Separator,
  Left,
  Right,
  Title,
  ListItem,Accordion
} from "native-base";
import Icons from "react-native-vector-icons/FontAwesome";
import { NavigationActions } from "react-navigation";
import { withNamespaces } from "react-i18next";
import Panel from './FaqComponent.js';
import { storage } from "../../App";
const dataArray = [
    { title: "First Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Second Element", content: "Lorem ipsum dolor sit amet" },
    { title: "Third Element", content: "Lorem ipsum dolor sit amet" }
  ];
export  class FAQ extends Component {
  static navigationOptions = {
    title: "FAQ",
    header: null,
   
  };

  constructor(props) {
    super(props);

    this.state = {
      faqsData: [],
      acc: [],
      isReady: true,
      currentLanguage:'',
    };
    this.getData2();
  }
  getData2(){
    console.log('from get data 2');
    storage.sync = {
      // The name of the sync method must be the same as the data's key name
      // And the passed params will be an all-in-one object.
      // You can return a value or a promise here

      async faqs(params) {
        return (
          fetch("http://colapp.drcmp.org/api/faqs", {
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
               console.log("RESPONSE DATA" + JSON.stringify(responseData.faqs));
              //    return responseData;
              if (responseData) {
                storage.save({
                  key: "faqs",
                  //id,
                  data: responseData.faqs


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
        key: "faqs",
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
            faqsData: res,
            //  acc: this.state.acc.concat( { title:  res[1].title, content: res[1].body})

            isReady: true
          },
          function() {
            console.log("DATA SET");
            // console.log(this.state.faqsData);
            if (this.state.faqsData && this.state.faqsData.length > 0) {
              console.log("document data is here");
              this.state.faqsData.map((key, index) => {
               console.log(this.state.faqsData[index].id);

                this.setState(
                  prevState => ({
                    acc: [
                      ...prevState.acc,
                      {

                       // id: this.state.faqsData[index].id,
                       
                
                       
                    
                       question: this.state.faqsData[index].question,
                       question_idn: this.state.faqsData[index].question_idn,
                       answer: this.state.faqsData[index].answer,
                       answer_idn: this.state.faqsData[index].answer_idn
                      
                        
                      }
                    ]
                  }),

                  function() {
                    console.log("set");

                    // console.log(this.state.faqsData);
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
        <Title>{t("faq:title")}</Title>
      </Body>
      <Right />
    </Header>
<Content  style={{ backgroundColor: "white" }}>
<View>


<View>
        <ScrollView>





          <View style={styles.form_Container}>
            <ListItem itemDivider>
              <Text style={styles.heading3}>{t("faq:title")}</Text>
            </ListItem>



{
  /*this.state.cards.map((item, index) => {
    return (
<Card style={[styles.card, styles.card1]}><Text style={styles.label}>{item.itemname}</Text></Card>
    )*/
    this.state.acc.map((item, index) => {
      console.log("accc datae"+index);
      return (
    
        <Panel style={styles.heading4} title={this.state.currentLanguage=='en'?item.question:item.question_idn}>
        <Text style={styles.normalText}>{this.state.currentLanguage=='en'?item.answer:item.answer_idn}</Text>
      </Panel>
  
  

      )
  })
}

        {
/*

            <View style={styles.contactView}>
              <Card>
                <CardItem header style={{flex:1}}>
                <Left style={{flex:9}}>
                <Text style={styles.heading4}>
                    Q: What is this app all about ?  
                  </Text>
                </Left>

                  <Right style={{flex:1}}>
                  <Icons
          name="angle-up"
          size={25}
          style={{
            color: "orange",
//marginLeft: 15,
            marginTop: -2,
           // paddingRight: 10,
           justifyContent:'flex-end',
            fontWeight: "600"
          }}
        />
                  </Right>
                </CardItem>
                <CardItem>
                  <Text style={styles.normalText}>
                    A: You can log in because you are CMUA student and we use
                    central authentication system. You account page is empty
                    because you might have never borrowed any books before. We
                    will create your records when you borrow books for the first
                    time.
                  </Text>
                </CardItem>
              </Card>
              <Card>
                <CardItem header>
                  <Text style={styles.heading4}>
                    Q: What is this app all about ? What is this app all about ?
                  </Text>
                  <Right>
                  <Icons
          name="angle-up"
          size={25}
          style={{
            color: "orange",
//marginLeft: 15,
            marginTop: -2,
           // paddingRight: 10,
           justifyContent:'flex-end',
            fontWeight: "600"
          }}
        />
                  </Right>
                </CardItem>
                <CardItem>
                  <Text style={styles.normalText}>
                    A: You can log in because you are CMUA student and we use
                    central authentication system. You account page is empty
                    because you might have never borrowed any books before. We
                    will create your records when you borrow books for the first
                    time.
                  </Text>
                </CardItem>
              </Card>
              <Card>
                <CardItem header>
                  <Text style={styles.heading4}>
                    Q: What is this app all about ?What is this app all about ?What is this app all about ?
                  </Text>
                  <Right>
                  <Icons
          name="angle-up"
          size={25}
          style={{
            color: "orange",
//marginLeft: 15,
            marginTop: -2,
           // paddingRight: 10,
           justifyContent:'flex-end',
            fontWeight: "600"
          }}
        />
                  </Right>
                </CardItem>
                <CardItem>
                  <Text style={styles.normalText}>
                    A: You can log in because you are CMUA student and we use
                    central authentication system. You account page is empty
                    because you might have never borrowed any books before. We
                    will create your records when you borrow books for the first
                    time.
                  </Text>
                </CardItem>
              </Card>

              <Card>
                <CardItem header>
                  <Text style={styles.heading4}>
                    Q: What is this app all about ?
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={styles.normalText}>
                    A: You can log in because you are CMUA student and we use
                    central authentication system. You account page is empty
                    because you might have never borrowed any books before. We
                    will create your records when you borrow books for the first
                    time.
                  </Text>
                </CardItem>
              </Card>

              <Card>
                <CardItem header>
                  <Text style={styles.heading4}>
                    Q: What is this app all about ?
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={styles.normalText}>
                    A: You can log in because you are CMUA student and we use
                    central authentication system. You account page is empty
                    because you might have never borrowed any books before. We
                    will create your records when you borrow books for the first
                    time.
                  </Text>
                </CardItem>
              </Card>

              <Card>
                <CardItem header>
                  <Text style={styles.heading4}>
                    Q: What is this app all about ?
                  </Text>
                </CardItem>
                <CardItem>
                  <Text style={styles.normalText}>
                    A: You can log in because you are CMUA student and we use
                    central authentication system. You account page is empty
                    because you might have never borrowed any books before. We
                    will create your records when you borrow books for the first
                    time.
                  </Text>
                </CardItem>
              </Card>
            </View>
          </View>

*/

        }
</View>
        </ScrollView>
      </View>

</View>
 
</Content>
</Container>
    );
  }
}
export default withNamespaces(['faq', 'common'], { wait: true })(FAQ);
const styles = StyleSheet.create({
  input_Instruction: {
    fontSize: 20,
    textAlign: "left",
    //color: '#FDFEFE',
    // fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 4
  },

  input_Instruction2: {
    fontSize: 24,
    textAlign: "left",
    color: "#990000",
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 4
  },

  input_Instruction3: {
    fontSize: 24,
    textAlign: "left",
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 4
  },

  contactView: {
    marginTop: 10,
    marginLeft: 0,
    marginRight: 0,
    marginBottom: 5,
    justifyContent: "center"
  },

  map: {
    flex: 1
  },
  pageContainer: {
    flex: 1,
    backgroundColor: "#FFFFFF"
  },

  contentContainer: {
    flex: 11
    /*       borderWidth: 1,
           borderColor: 'rgba(213,0,0,1)',*/
  },

  form_Container: {
    justifyContent: "center",
    //marginTop: 0,
    padding: 20
    //backgroundColor: '#ffffff',
  },

  form_Container2: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "flex-end",
    alignItems: "center"
  },

  heading1: {
    margin: 10,
    marginTop: 10,
    fontSize: 20,
    textAlign: "left",
    //color: '#FDFEFE',
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo",
    marginBottom: 4
  },

  heading2: {
    fontSize: 16,
    marginTop: 10,
    marginLeft: 10,
    textAlign: "left",
    //color: '#FDFEFE',
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo"
  },

  heading3: {
    fontSize: 20,
    textAlign: "left",
    color: "red",
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo"
  },

  heading4: {
    fontSize: 16,
    textAlign: "justify",
    color: 'green',
    fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo"
  },

  normalText: {
    fontSize: 15,
    textAlign: "justify",
    //color: '#FDFEFE',
    // fontWeight: "bold",
    fontFamily: "Apple SD Gothic Neo"
  },

  li: {
    flex: 1,
    justifyContent: "flex-start"
  },

  liNumber: {
    fontSize: 16
  },

  liIcon: {
    width: 80,
    height: 110
  },

  liIcon2: {
    marginTop: 12,
    width: 150,
    height: 180
  },

  liItemBody: {
    marginLeft: 10,
    width: 260
  },

  liTextHeading: {
    color: "#333",
    fontWeight: "bold",
    fontSize: 16
  },

  liText: {
    color: "#333",
    fontSize: 16
  },

  separator: {
    height: 1,
    backgroundColor: "#CCCCCC"
  },

  itemView: {
    justifyContent: "center",
    alignItems: "center"
  },

  table_Container: {
    marginLeft: 10,
    marginTop: 5
  },

  table_Head: {
    height: 25,
    backgroundColor: "#f1f8ff"
  },

  table_Row: {},

  table_Text: {
    fontSize: 16,
    //marginLeft: 5,
    textAlign: "left"
  }
});
