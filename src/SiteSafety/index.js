import React, { Component } from "react";

import SafetyList from "./safety.js";

import { createStackNavigator } from "react-navigation";
export default (SafetyNavigator = createStackNavigator(
  {
    SafetyList: { screen: SafetyList }
  },
  {
    initialRouteName: "SafetyList"
  }
));
