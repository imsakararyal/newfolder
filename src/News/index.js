import React, { Component } from "react";


import NewsList from "./NewsList.js";
import NewsDetail from "./NewsDetail.js";
import App from "./App.js";
import { createStackNavigator } from "react-navigation";
export default (NewsNavigator = createStackNavigator(
  {

    NewsList: { screen: NewsList },
    NewsDetail: { screen: NewsDetail },
    App: { screen: App },

  },
  {
    initialRouteName: "NewsList",
    navigationOptions: {
      headerTintColor: "white",
      headerTransparent: true
    }
  },
  
    

));
