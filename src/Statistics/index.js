import React, { Component } from "react";

import StatisticsList from "./Statistics.js";

import { createStackNavigator } from "react-navigation";
export default (StatisticsNavigator = createStackNavigator(
  {
    StatisticsList: { screen: StatisticsList }
  },
  {
    initialRouteName: "StatisticsList"
  }
));
