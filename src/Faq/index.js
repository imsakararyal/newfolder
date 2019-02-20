import React, { Component } from "react";


import FaqList from "./Faq.js";

import FaqList2 from "./Faq2.js";

import { createStackNavigator } from "react-navigation";
export default (FaqNavigator = createStackNavigator(
  {

    FaqList: { screen: FaqList },
    FaqList2: { screen: FaqList2 },


  },
  {
    initialRouteName: "FaqList2",
  }

));
