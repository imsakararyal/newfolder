import React, { Component } from "react";

import BasicForm from "./basicForm";

import BasicFormPart2 from "./backFormPart2";

import { createStackNavigator } from "react-navigation";
export default (columbiaFormNavigator = createStackNavigator(
  {
    //  AboutUs: { screen: AboutUs },
    //Branches: { screen: Branches },
  
    BasicFormPart2: { screen: BasicFormPart2 },
    BasicForm: { screen: BasicForm }


    //Faq: { screen: Faq },
  },
  {
    initialRouteName: "BasicForm"
  }
));
