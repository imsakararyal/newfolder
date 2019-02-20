import React, { Component } from "react";


import InRisk from "./inRisk.js";

import { createStackNavigator } from "react-navigation";
export default (RiskNavigator = createStackNavigator(
  {

    InRisk: { screen: InRisk },


  },
  {
    initialRouteName: "InRisk",
  }

));
