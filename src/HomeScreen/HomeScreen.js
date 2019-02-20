import React from "react";
import {
  TouchableHighlight,
  StyleSheet,
  TouchableOpacity,TouchableWithoutFeedback,
  View,
  StatusBar,
  AsyncStorage,
  ScrollView,
  Image,Alert
} from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
 Icon,
  Right,
  Picker,
  Item,
  Label,ActionSheet, List, ListItem, Thumbnail
} from "native-base";
import { DrawerActions } from "react-navigation";


import { SuperGridSectionList } from "react-native-super-grid";

import AnimateNumber from "react-native-animate-number";
import {NavigationActions} from "react-navigation";
import Icons from 'react-native-vector-icons/FontAwesome';

import { withNamespaces } from "react-i18next";
// using the translation hoc to provie t function in props using home as default namespace
// https://react.i18next.com/components/translate-hoc.html
//@translate(['home', 'common'], { wait: true });

import i18n from '../i18n/index';
import RNRestart from "react-native-restart";

var BUTTONS = [
  {id:'en', text: "English", icon: "flag", iconColor: "#2c8ef4" },
 // {id:'malay', text: "Indonesia", icon: "flag", iconColor: "#2c8ef4" },
  {id:'es', text: "Spanish", icon: "flag", iconColor: "#f42ced" },
 // { id:'fil',text: "Philiphines", icon: "flag", iconColor: "#ea943b" },
   { id:'cancel',text: "Cancel", icon: "close", iconColor: "#25de5b" }
];
var DESTRUCTIVE_INDEX=3;
var CANCEL_INDEX = 2;
export  class HomeScreen extends React.Component {
 /* static navigationOptions = ({ navigation, screenProps }) => ({
   // title: screenProps.t('home:title'),
   title:'hhsdj'
  });
*/
  constructor(props) {
    super(props);
   // const { i18n } = this.props.screenProps;
    //this.styles = new Style();
   // i18n.changeLanguage('es');
  // i18n.changeLanguage('en')
   console.group("into homescreen");
    this.state = {
    //  pickerSelection: i18n.language,
      isLogin: "",
      role: "",
      selectedValue: "",
      position: 1,
      interval: null,
      dataSource: [
        {
          //  title: 'Title 1',
          //  caption: 'Caption 1',
          url: "https://placeimg.com/640/480/tech"
        },
        {
          //  title: 'Title 2',
          //  caption: 'Caption 2',
          url: "http://placeimg.com/640/480/any"
        },
        {
          //  title: 'Title 3',
          //  caption: 'Caption 3',
          url: "https://placeimg.com/640/360/nature"
        }
      ],
      languageType: [{ name: "en", id: 1 }, { name: "fr", id: 2 }],
gridSwitch:true,
    };
    this.loadApp();
    this.handleChangeOption = this.handleChangeOption.bind(this);
    this.changeLayout = this.changeLayout.bind(this);
    
    //  I18n.locale = 'hi';
  }
  navigateToScreen = (route) => () => {
    const navigateAction = NavigationActions.navigate({
      routeName: route,
    });
    this.props.navigation.dispatch(navigateAction);
  }
  loadApp = async () => {
    const userToken = await AsyncStorage.getItem("userToken");
    const role1 = await AsyncStorage.getItem("Role");
    console.log("role==" + role1);
    userToken
      ? this.setState({
          isLogin: "true",
          role: role1
        })
      : this.setState({
          isLogin: "false"
        });
  };
  handleChangeOption(val) {
    if (val !== 0) {
       this.setState({selectedValue: val});
if(val==1){
  AsyncStorage.setItem("lang", 'en')
  .then(data => {
    RNRestart.Restart();
  })
  .catch(err => {
    console.log("err");
  });
}
if(val==2){
  AsyncStorage.setItem("lang", 'fr')
  .then(data => {
    RNRestart.Restart();
  })
  .catch(err => {
    console.log("err");
  });
}
   
    }
  }
  Logout(key) {
    console.log("logged out1");
    try {
      AsyncStorage.removeItem("userToken");
      AsyncStorage.removeItem("Role");
      console.log("logged out2");
      this.setState({
        isLogin: false
      });
      console.log("logged out");
      return true;
    } catch (exception) {
      return false;
    }
  }
 async changeLanguage1(buttonId){
  //  const { i18n } = this.props.screenProps;
   // i18n.changeLanguage('en');
console.log('shds'+JSON.stringify(buttonId.id));
var id=buttonId.id;
if(id=='en'){
  console.log("into the english");
  i18n.changeLanguage('en');
//  await AsyncStorage.setItem('language', 'en');
 
}
else if(buttonId.id=='may'){
  i18n.changeLanguage('may');
  //await AsyncStorage.setItem('language', 'may');
 
}
else if(buttonId.id=='es'){
  i18n.changeLanguage('es');
  //await AsyncStorage.setItem('language', 'may');

}
else if(buttonId.id=='fil'){
  i18n.changeLanguage('fil');
  //await AsyncStorage.setItem('language', 'fil');

}
else{

}


}
changeLayout = (type) => {
  console.log("into the change layoiut");
  console.log("type="+type);
  if(type=='grid'){
    console.log("grid");
    this.setState({ gridSwitch: true })
  }
  else if(type=='list'){
    console.log("list");
    this.setState({ gridSwitch: false })
  }
  else{
  
  }

};


languagePicker = () => {
  console.log("into the language picker");
    return (


      <View>

      <Menu>
        <MenuTrigger text='Select action' />
        <MenuOptions>
          <MenuOption onSelect={() => alert(`Save`)} text='Save' />
          <MenuOption onSelect={() => alert(`Delete`)} >
            <Text style={{color: 'red'}}>Delete</Text>
          </MenuOption>
          <MenuOption onSelect={() => alert(`Not called`)} disabled={true} text='Disabled' />
        </MenuOptions>
      </Menu>
    </View>


      
    );
}
  
  checkLogin = () => {
    console.log("into checklogin");
    AsyncStorage.getItem("userToken").then(data => {
      console.log("data" + data);
      console.log(data);
      this.setState({
        isLogin: true
      });
    });
  };
  componentWillMount() {
    console.log("into theasdasd");
    //  I18n.initAsync();
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position:
            this.state.position === this.state.dataSource.length
              ? 0
              : this.state.position + 1
        });
      }, 2000)
    });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    const { t, i18n, navigation } = this.props;
    const { navigate } = navigation;
   
    return (
      <Container>


        <Header
       //   style={{ backgroundColor: "#dc4239" }}
         // androidStatusBarColor="#dc2015"
          iosBarStyle="light-content"
        >
          <Left>
            <Button transparent onPress={() => this.props.navigation.dispatch(DrawerActions.openDrawer())}>
              <Icon name="menu" style={{ color: "#FFF" }} />
            </Button>
          </Left>
          <Body>
            <Title style={{ color: "#FFF" }}>{t("home:title")}</Title>
          </Body>
          <Right>


            <Button transparent
            onPress={() =>
            ActionSheet.show(
              {
                options: BUTTONS,
                cancelButtonIndex: CANCEL_INDEX,
                destructiveButtonIndex: DESTRUCTIVE_INDEX,
                title: "Change Language"
              },
              buttonIndex => {
                this.setState({ clicked: BUTTONS[buttonIndex] },
                  console.log('index'+ BUTTONS[buttonIndex]),
              
                //  this.changeLanguage1(BUTTONS[buttonIndex])
              //    i18n.changeLanguage('es')
          /*    if(id=='en'){
                console.log("into the english");
                i18n.changeLanguage('en');
              //  await AsyncStorage.setItem('language', 'en');
              }*/
              i18n.changeLanguage(BUTTONS[buttonIndex].id),
              AsyncStorage.setItem('language', BUTTONS[buttonIndex].id)
                  );
                  
                //this.setState({ clicked: BUTTONS[buttonIndex] });
              }
            )}
          >
             <Icons name="globe" size={25} style={{ color: "#FFF" }} />
          </Button>

            </Right>
        </Header>
        <Content>
     

    

    {/*
      <Slideshow
            dataSource={this.state.dataSource}
            position={this.state.position}
            arrowLeft={
              <Icons name="chevron-left" size={15} style={{ marginTop: 0, color: "transparent" }} />

            }
            arrowRight={
              <Icons name="chevron-right" size={15} style={{ marginTop: 0, color: "transparent" }} />
            }
            onPositionChanged={position => this.setState({ position })}
          />
<View style={{padding: 10, paddingTop: 10,flexDirection:'row',justifyContent:"flex-end",backgroundColor:'white'}}>
<Button  onPress={() => this.changeLayout('list')}> 
            <Text> {t('home:list')}</Text>
            <Icons name='list' />
          </Button>
          <Button  onPress={() => this.changeLayout('grid')}>
            <Text>{t('home:grid')}</Text>
            <Icons name='th-large' />
          </Button>
    
    </View>
    
    */}             
        

   <View>
   <SuperGridSectionList style={{backgroundColor:'#fff'}}
            sections={[
              {
                data: [
               /*   {
                    id: "1",
                    screen: "ContactUs",
                    name: t('home:construction_library'),
                    code: "#0296FF",
                    icon: "sign-in",
                    image: "https://via.placeholder.com/350x150",
                    imageIcons: require("../../assets/icons/white/construction.png"),
                    detail:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  },*/
                  {
                    id: "2",
                    screen: "FinancialNavigator",
                   // name: t('home:documents'),
                   name:"After codepush",
                    code: "#0296FF", 
                    icon: "shield",
                    image: "https://via.placeholder.com/350x150",
                    imageIcons: require("../../assets/icons/white/doc.png"),
                    detail:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  },
                  {
                    id: "4",
                    screen: "SafetyNavigator",
                    name:  t('home:site_safety'),
                    code: "#3A3EBB",
                    icon: "calculator",
                    image: "https://via.placeholder.com/350x150",
                    imageIcons: require("../../assets/icons/white/safety.png"),
                    detail:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  },
               /*   {
                    id: "5",
                    screen: "RiskNavigator",
                    name:  t('home:in_risk'),
                    code: "#147144",
                    icon: "phone",
                    image: "https://via.placeholder.com/350x150",
                    imageIcons: require("../../assets/icons/white/inrisk.png"),
                    detail:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  },

                  */
                  {
                    id: "6",
                    screen: "StatisticsNavigator",
                    name: t('home:statistics'),
                    code: "#BD311B", 
                    icon: "bullhorn",
                    image: "https://via.placeholder.com/350x150",
                    imageIcons: require("../../assets/icons/white/statistics.png"),
                    detail:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  },
                  {
                    id: "7",
                    screen: "NewsNavigator",
                    name: t('home:news'),
                    code: "#336B87",  
                    icon: "bullhorn",
                    image: "https://via.placeholder.com/350x150",
                    imageIcons: require("../../assets/icons/white/news.png"),
                    detail:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  },
                  {
                    id: "8",
                    screen: "FaqNavigator",
                    name: t('home:faq'),
                    code: "#EB8A44", 
                    icon: "bullhorn",
                    image: "https://via.placeholder.com/350x150",

                    imageIcons: require("../../assets/icons/white/faq.png"),
                    detail:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  },
                  {
                    id: "9",
                    screen: "columbiaFormNavigator",
                    name: t('home:columbia_form'),
                    code: "#DE7822",
                    icon: "bullhorn",
                    image: "https://via.placeholder.com/350x150",

                    imageIcons: require("../../assets/icons/white/survey.png"),
                    detail:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }
                /*  {
                    id: "10",
                    screen: "EmployeeList",
                    name: t('home:construction_library'),
                    code: "#5D535E",
                    icon: "bullhorn",
                    image: "https://via.placeholder.com/350x150",

                    imageIcons: require("../../assets/icons/white/survey.png"),
                    detail:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  },
                  {
                    id: "11",
                    screen: "ConstructionLibrary",
                    name:'Realm ',
                    code: "#5D535E",
                    icon: "bullhorn",
                    image: "https://via.placeholder.com/350x150",

                    imageIcons: require("../../assets/icons/white/survey.png"),
                    detail:
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  }*/
             
                  
                ]
              }
            ]}
            
            style={[styles.gridView1, {borderColor:'transparent'}]}
            renderItem={({ item }) => (
              <TouchableWithoutFeedback
                onPress={() => {
           
                  this.props.navigation.navigate(item.screen, {
                    itemId: item.id,
                    itemName: item.name,
                    itemImage: item.image,
                    itemDetail: item.detail,
                    otherParam: "anything you want here"
                  });
                }}
              >
                <View style={[styles.itemContainer, {backgroundColor:item.code}]}>
                 
                 

                  <Image
                    style={{ alignSelf: "center" }}
                    source={item.imageIcons}
                  />

                  <Text style={{   fontSize: 16,
    color: "white",
    fontWeight: "600",
    fontFamily: 'Circular Std Medium',
    textAlign: "center"}}>{item.name}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            renderSectionHeader={({ section }) => (
              <Text style={{ color: "green" }}>{section.title}</Text>
            )}
          />
   
  </View>
     
   
     
     
    
     



         
      
      

         
         

          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
            >
              Total Statistics
            </Text>
            <SuperGridSectionList
              sections={[
                {
                  data: [
                    {
                      id: "1",
                      name: t('home:total_request'),
                 //   name:"Requested",
                      code: "#0296FF",
                      icon: "sign-in"

                    },
                    {
                      id: "2",
         
                      name: t('home:total_design'),
                      code: "#3A3EBB",
                      icon: "pencil"
                    },
                    {
                      id: "4",
               
                      name: t('home:sucess_stories'),
                      code: "#BD311B",
                      icon: "shield"
                               },
                    {
                      id: "5",
                  
                      name:  t('home:app_download'),
                      code: "#147144",
                      icon: "mobile"
                                    }

                    /* {id:'7',screen:'PracticeNavigator', name: 'News and Media', code: '#2ecc71',icon:'md-checkmark-circle',image:'https://via.placeholder.com/350x150',detail:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' },
                     */
                  ]
                }
              ]}
              style={styles.gridView}
              renderItem={({ item }) => (
            
                  <View style={{
                    flex: 1,
                    justifyContent: "flex-end",
                    borderRadius: 8,
                    padding: 10,
                    height: 140,
                    backgroundColor:item.code,
                   // borderColor: "gray",
                   // borderWidth: 1
                  }}>
           <View style={{flex: 2}}>
           <Text style={{ marginLeft: 15, paddingLeft: 15,color:"#fff" }}>
                        {item.name}
            </Text>
           </View>
          <View style = {{flex:3,flexDirection:'row', justifyContent:'space-around',alignContent:'center'}} 
    ><Icons name={item.icon} color="#fff" size={50}/>
    <AnimateNumber value={100} timing="easeIn" countBy={1} style={{color:"#fff",fontSize:40}}/>

    </View>
          
          
                  </View>
               
              )}
       
              
            />
          </View>
          {/**Stat */}

          <View style={{ flex: 1, backgroundColor: "white", paddingTop: 20 }}>
            <Text
              style={{ fontSize: 24, fontWeight: "700", paddingHorizontal: 20 }}
            >
              In Association with
            </Text>

            <View style={{ height: 150, marginTop: 20 }}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={true}
              >
                <View
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 30,
                 //   borderWidth: 2,
                   // borderColor: "black"
                  }}
                >
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../../assets/icons/org/buildchange.png")}
                      style={{
                        
                        width: 110,
                        flex: 1,
                        resizeMode: "cover",
                        overflow: "visible",
                      //  backgroundColor:'blue'
                      }}
                    />
                  </View>

                  {/*
<View style={{ flex: 1, paddingTop: 10, paddingLeft: 10 }}>
          <Text style={{ flex: 1, }}>Home</Text>
        </View>
         */}
                </View>
                <View
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 20,
                    //borderWidth: 0.5,
                  //  borderColor: "#dddddd"
                  }}
                >
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../../assets/icons/org/colombia.png")}
                      style={{
                        height: 130,
                        width: 100,
                        flex: 1,
                        resizeMode: "cover",
                        overflow: "visible"
                      }}
                    />
                  </View>

                  {/*
<View style={{ flex: 1, paddingTop: 10, paddingLeft: 10 }}>
          <Text style={{ flex: 1, }}>Home</Text>
        </View>
         */}
                </View>

                <View
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 20,
                    //borderWidth: 0.5,
                  //  borderColor: "#dddddd"
                  }}
                >
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../../assets/icons/org/philipines.png")}
                      style={{
                        height: 130,
                        width: 100,
                        flex: 1,
                        resizeMode: "cover",
                        overflow: "visible"
                      }}
                    />
                  </View>

                  {/*
<View style={{ flex: 1, paddingTop: 10, paddingLeft: 10 }}>
          <Text style={{ flex: 1, }}>Home</Text>
        </View>
         */}
                </View>

                <View
                  style={{
                    height: 100,
                    width: 100,
                    marginLeft: 20,
                    //borderWidth: 0.5,
                  //  borderColor: "#dddddd"
                  }}
                >
                  <View style={{ flex: 2 }}>
                    <Image
                      source={require("../../assets/icons/org/indonesia.png")}
                      style={{
                        height: 130,
                        width: 100,
                        flex: 1,
                        resizeMode: "cover",
                        overflow: "visible"
                      }}
                    />
                  </View>

                  {/*
<View style={{ flex: 1, paddingTop: 10, paddingLeft: 10 }}>
          <Text style={{ flex: 1, }}>Home</Text>
        </View>
         */}
                </View>                


           
              </ScrollView>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}
export default withNamespaces(['home', 'common'], { wait: true })(HomeScreen);
const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: "#C2185B"
  },
  header: {
    marginTop: StatusBar.currentHeight
  },
  gridView1: {
    paddingTop: 3,
    flex: 1,
  backgroundColor: 'white',
  },
  gridView: {
    paddingTop: 25,
    flex: 1,
  backgroundColor: 'white',
  },
  itemContainer: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 5,
    padding: 10,
    height: 160,
  //  borderColor: "gray",
   // borderWidth: 1
  },
  itemName: {
    fontSize: 16,
    color: "#037971",
    fontWeight: "600",
    textAlign: "center"
  },
  itemCode: {
    fontWeight: "600",
    fontSize: 12,
    color: "#C2185B"
  },
  PickerLabel: {
    borderColor: "transparent",
    height: 30
  },
  Picker: {
    marginTop: -5,
    marginLeft: 9,
    paddingBottom: 10,
    borderWidth: 1,
    borderBottomColor: "gray"
  },
  PickerLine: {
    borderBottomColor: "#aaa",
    borderBottomWidth: 0.5,
    marginLeft: 15
  },
//////////////////////// HOME


listitem_home:{

  borderBottomWidth: 0,
  backgroundColor: 'transparent',
  },
  
 
  
  
  note_home:{
  
    fontSize: 13,
  
  },
    
});
