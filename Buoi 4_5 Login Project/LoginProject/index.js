/**
 * @format
 */

import {AppRegistry} from 'react-native';
import LoginScreen from './screen/login/LoginScreen';
import DataBidingScreen from './screen/databiding/DataBidingScreen';
import EmojiScreen from './screen/emoji/EmojiScreen';
import DataBiding from './screen/newfeed/NewFeedScreen';
import DemoProps from './screen/demoprops/DemoProps';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => DataBiding);
