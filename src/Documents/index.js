import React, { Component } from "react";


import DocumentList from "./DocumentList.js";
import DocumentDetail from "./DocumentDetail.js";
import { createStackNavigator } from "react-navigation";
export default (DocumentNavigator = createStackNavigator(
  {

    DocumentList: { screen: DocumentList },
    DocumentDetail: { screen: DocumentDetail },

  },
  {
    initialRouteName: "DocumentList",
  }

));
