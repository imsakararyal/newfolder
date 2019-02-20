import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";

//import newsmediaStackNavigator from "../NewsMedia/index.js";


import CommunicationNavigator from "../Communications/index.js";

import FinancialNavigator from "../FinancialRecord/index.js";



import FaqNavigator from "../Faq/index.js";

import NewsNavigator from "../News/index.js";
import StatisticsNavigator from "../Statistics/index.js";
import RiskNavigator from "../InRisk/index.js";
import SafetyNavigator from "../SiteSafety/index.js";
import SettingNavigator from "../Setting/index.js";
import DocumentNavigator from "../News/index.js";
import LoginStackNavigator from "../Login/index.js";

import columbiaFormNavigator from "../ColumbiaForm/index.js";
import EmployeeList from '../Realm/containers/index';
import ConstructionLibrary from '../LibraryRealm/containers/index';

/*import libraryNavigator from "../Library/index.js";

import StatisticsNavigator from "../Statistics/index.js";
import RiskNavigator from "../InRisk/index.js";
import LoginStackNavigator from "../Login/index.js";

*/
import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator } from "react-navigation";

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
   SettingNavigator: { screen: SettingNavigator },
   EmployeeList: { screen: EmployeeList },

   ConstructionLibrary: { screen: ConstructionLibrary },
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
export default HomeScreenRouter;
