

import LibraryAdd from "./LibraryAdd.js";


import { createStackNavigator } from "react-navigation";
export default (libraryNavigator = createStackNavigator(
  {

    LibraryAdd: { screen: LibraryAdd },
 /*   ClaimDetailScreen: { screen: ClaimDetailScreen }*/

  },
  {
    initialRouteName: "LibraryAdd"
  }
));
