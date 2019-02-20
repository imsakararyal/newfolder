/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//import bgMessaging from './src/bgMessaging.js';
console.disableYellowBox = true;
AppRegistry.registerComponent(appName, () => App);

//AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => bgMessaging); // <-- Add this line
