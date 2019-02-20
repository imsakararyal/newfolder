const globalState={};

import React, { Component } from "react";
import {View ,ActivityIndicator,StyleSheet,AppState} from "react-native";
import { Container, Content, Picker, Button, Text,StyleProvider,Root } from "native-base";


import HomeScreen from "./src/HomeScreen/index.js";


import getTheme from './src/theme/components';
import commonColor from './src/theme/variables/commonColor';


import Storage from 'react-native-storage';
import { AsyncStorage } from 'react-native';

import SplashScreen from 'react-native-splash-screen'


import RNLanguages from 'react-native-languages';

import RNRestart from "react-native-restart";
import AppIntroSlider from 'react-native-app-intro-slider';
import { MenuProvider } from 'react-native-popup-menu';




//import newsmediaStackNavigator from "./src/NewsMedia/index.js";


import CommunicationNavigator from "./src/Communications/index.js";

import FinancialNavigator from "./src/FinancialRecord/index.js";



import FaqNavigator from "./src/Faq/index.js";

import NewsNavigator from "./src/News/index.js";
import StatisticsNavigator from "./src/Statistics/index.js";
import RiskNavigator from "./src/InRisk/index.js";
import SafetyNavigator from "./src/SiteSafety/index.js";
import SettingNavigator from "./src/Setting/index.js";
import DocumentNavigator from "./src/News/index.js";
import LoginStackNavigator from "./src/Login/index.js";

import columbiaFormNavigator from "./src/ColumbiaForm/index.js";
/*import libraryNavigator from "../Library/index.js";

import StatisticsNavigator from "../Statistics/index.js";
import RiskNavigator from "../InRisk/index.js";
import LoginStackNavigator from "../Login/index.js";

*/
import {translate} from 'react-i18next';
import i18n from './src/i18n/index.js';
import SideBar from "./src/SideBar/SideBar.js";
import { createDrawerNavigator,createStackNavigator } from "react-navigation";

//import codePush from "react-native-code-push";
//import firebase from 'react-native-firebase';


import codePush from "react-native-code-push";
import OfflineNotice from './src/Component/OfflineNotice'
var PushNotification = require('react-native-push-notification');

const codePushOptions = { 
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME, 
  installMode: codePush.InstallMode.ON_NEXT_RESUME 
}

export const storage = new Storage({


  size: 1000,

  storageBackend: AsyncStorage, 

 
  //defaultExpires: 1000 * 3600 * 24,
  defaultExpires: 1 * 1 * 1,
  enableCache: true,

  
  sync: {
   
  }

});
const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen,navigationOptions: { gesturesEnabled: false } },
 
   
    CommunicationNavigator: { screen: CommunicationNavigator },
  //  newsmediaStackNavigator: { screen: newsmediaStackNavigator,navigationOptions: { gesturesEnabled: false } },
   
    FinancialNavigator: { screen: FinancialNavigator },
   FaqNavigator: { screen: FaqNavigator },
   NewsNavigator: { screen: NewsNavigator },
   RiskNavigator: { screen: RiskNavigator },
   SafetyNavigator: { screen: SafetyNavigator },
   DocumentNavigator: { screen: DocumentNavigator },
   LoginStackNavigator: { screen: LoginStackNavigator },
   StatisticsNavigator: { screen: StatisticsNavigator },
   columbiaFormNavigator: { screen: columbiaFormNavigator },
   SettingNavigator: { screen: SettingNavigator }
  /*  FaqNavigator: { screen: FaqNavigator },
    NewsNavigator: { screen: NewsNavigator },
    DocumentNavigator: { screen: DocumentNavigator },
    SafetyNavigator: { screen: SafetyNavigator },
    StatisticsNavigator: { screen: StatisticsNavigator },
    RiskNavigator: { screen: RiskNavigator },
    LoginStackNavigator: { screen: LoginStackNavigator },
    columbiaFormNavigator: { screen: columbiaFormNavigator },*/
    
  },

  {
    initialRouteName: "Home",
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
      Drawer: {screen: HomeScreenRouter},
  },
  {
      initialRouteName: "Drawer",
      headerMode: "none"
  }
);

const WrappedStack = () => {
  return (
      <Root>
          <AppNavigator screenProps={{t: i18n.getFixedT()}}/>
      </Root>
  )
};



PushNotification.configure({

  // (optional) Called when Token is generated (iOS and Android)
  onRegister: function(token) {
      console.log( 'TOKEN:', token );
  },

  // (required) Called when a remote or local notification is opened or received
  onNotification: function(notification) {
      console.log( 'NOTIFICATION:', notification );

      // process the notification
      PushNotification.localNotification({
        foreground: true,
        title: "Construction app ",
        message:  "ddddd", // (required)
        vibrate: true,
        vibration: 300,
        ongoing: false,
        autoCancel: true,
      //  soundName: 'sampleaudio.mp3',
        date: new Date(Date.now() + (5 * 1000)), // in 5 secs
        RepeatType: 'week' | 'day' | 'hour' | 'minute' | 'time',
       // payload: noti_data,
        });
      // required on iOS only (see fetchCompletionHandler docs: https://facebook.github.io/react-native/docs/pushnotificationios.html)
      notification.finish(PushNotificationIOS.FetchResult.NoData);
  },

  // ANDROID ONLY: GCM or FCM Sender ID (product_number) (optional - not required for local notifications, but is need to receive remote push notifications)
  senderID: "478640901801",

  // IOS ONLY (optional): default: all - Permissions to register.
  permissions: {
      alert: true,
      badge: true,
      sound: true
  },

  // Should the initial notification be popped automatically
  // default: true
  popInitialNotification: true,

  /**
    * (optional) default: true
    * - Specified if permissions (ios) and token (android and ios) will requested or not,
    * - if not, you must call PushNotificationsHandler.requestPermissions() later
    */
  requestPermissions: true,
});

const localNotification = () => {
  PushNotification.localNotification({
    autoCancel: true,
    largeIcon: "ic_launcher",
  //  smallIcon: "ic_notification",
    bigText: "My big text that will be shown when notification is expanded",
    subText: "This is a subText",
    color: "green",
    vibrate: true,
    vibration: 300,
    title: "Notification Title",
    message: "Notification Message",
    playSound: true,
    soundName: 'default',
    actions: '["Accept", "Reject"]',
  });
 };

const ReloadAppOnLanguageChange = translate('common', {
  bindI18n: 'languageChanged',
  bindStore: false
})(WrappedStack);
 class App extends Component {

  constructor() {
    super();
    this.state = {
      isReady: false,
     
        currentLanguage: RNLanguages.language,
    
          showRealApp: '',
          appState: AppState.currentState,
          //To show the main page of the app
        
  
    };
    
  }
  _onDone = () => {
    // After user finished the intro slides. Show real app through
    // navigation or simply by controlling state
    this.setState({ showRealApp: true });
    try {
       AsyncStorage.setItem('walkthrough', JSON.stringify('value'));
    } catch (error) {
      // Error retrieving data
      console.log(error.message);
    }
   
  };
  _onSkip = () => {
    // After user skip the intro slides. Show real app through
    // navigation or simply by controlling state
    console.log("INTO THE SKIP");
    this.setState({ showRealApp: true });
    try {
       AsyncStorage.setItem('walkthrough', JSON.stringify('value'));
       console.log("INTO THE SKIP SET DATE");
    } catch (error) {
      // Error retrieving data'
      console.log("INTO THE SKIP ERROR");
      console.log(error.message);
    }
  };
  
 componentDidMount() {
    // do stuff while splash screen is shown
      // After having done stuff (such as async tasks) hide the splash screen
      //AppState.addEventListener('change', this._handleAppStateChange);
      setTimeout(() => {
        SplashScreen.hide()
      }, 200)
     this.setState({ isReady: true });
  //  AppState.addEventListener('change', this._handleAppStateChange);

    // this.checkPermission();
   //this.createNotificationListeners(); //add this line
  }
  
  async componentWillMount() {
    console.log("INTO THE COMPONENT WILL MOUNT");

    try {
    var app_intro = await AsyncStorage.getItem('walkthrough');
      if (app_intro=!null) {
        console.log("INTO THE COMPONENT WILL MOUNT NOT NULL");
        this.setState({
          showRealApp:true
        });
      } else {
        console.log("INTO THE COMPONENT WILL MOUNT YES NULL");
        this.setState({
          showRealApp:false
        });
      }
    } catch (error) {
      console.log("INTO THE COMPONENT WILL MOUNT ERROR NULL");
      // Error retrieving data
      console.log(error.message);
      this.setState({
        showRealApp:false
      });
    }

   RNLanguages.addEventListener('change', this._onLanguagesChange);
   SplashScreen.hide()
  }
  _handleAppStateChange = (nextAppState) => {

    if (this.state.appState.match(/inactive|background/) && nextAppState === 'active') {
    
    codePush.sync({
    
    installMode: codePush.InstallMode.IMMEDIATE
    
    })
    
    }
    
    this.setState({ appState: nextAppState });
    
    }
  
  componentWillUnmount() {
    this.notificationListener;
    this.notificationOpenedListener;
   // RNLanguages.removeEventListener('change', this._onLanguagesChange);
 //AppState.removeEventListener('change', this._handleAppStateChange);
   // RNLanguages.removeEventListener('change', this._onLanguagesChange);
  }



  _onLanguagesChange = ({ language }) => {
    i18n.locale = language;
    this.setState({ currentLanguage: language });
  };
  render() {
   // i18n.locale = this.state.currentLanguage;
    //i18n.fallbacks = true;

    if (this.state.showRealApp==true) {
      //Real Application
      if (!this.state.isReady) {
        return (
          <View style={[styles.container, styles.horizontal]}>
  
          <ActivityIndicator size="large" color="orange" />
         
        </View>
        );
      }
      return(
  <Root>
  <StyleProvider style={getTheme(commonColor)}>
    <MenuProvider>
    <ReloadAppOnLanguageChange />
    </MenuProvider>

      </StyleProvider>

  </Root>

  
  
  
  
      );
    } else {
      //Intro slides
      return (
        <AppIntroSlider
          slides={slides}
          //comming from the JsonArray below
          onDone={this._onDone}
          //Handler for the done On last slide
          showSkipButton={true}
          onSkip={this._onSkip}
        />
      );
    }




    

  }
}
export default codePush(codePushOptions)(App);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  },
  /**App Intro */
  image: {
    width: 200,
    height: 200,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center',
    marginTop: 16,
  },
});
const slides = [
  {
    key: 's1',
    text: 'Form Survey vai App',
    title: 'Form Survey',
    titleStyle: styles.title,
    textStyle: styles.text,
    image: {
    //  source=require('./assets/icons/white/survey.png')
      uri:
        'http://aboutreact.com/wp-content/uploads/2018/08/mobile_recharge.png',
    },
    imageStyle: styles.image,
    backgroundColor: 'orange',
  },
  {
    key: 's2',
    title: 'House Construction Awareness',
    titleStyle: styles.title,
    text: 'This App also provides awareness related to House Construction',
    image: {
     // source=require('../../assets/icon.png')
     uri:
     'http://aboutreact.com/wp-content/uploads/2018/08/mobile_recharge.png',
    },
    imageStyle: styles.image,
    backgroundColor: '#febe29',
  }
];