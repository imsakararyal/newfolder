// @flow
import { createStackNavigator } from "react-navigation";

import {
  Menu,
  TvShow,
  BasicUsage,
  ColorsPage,
  Avignon,
  PullToRefresh
} from "./Pages";

export const App = createStackNavigator(
  {
    menu: {
      screen: Menu
    },
    tvShow: {
      screen: TvShow
    },
    basicUsage: {
      screen: BasicUsage
    },
    colors: {
      screen: ColorsPage
    },
    avignon: {
      screen: Avignon
    },
    pullrefresh: {
      screen: PullToRefresh
    }
  },
  {

    navigationOptions: {
      headerTintColor: "white",
      headerTransparent: true
    }
  }
);

export default App;
