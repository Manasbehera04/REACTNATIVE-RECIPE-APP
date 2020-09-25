# REACTNATIVE-RECIPE-APP
Installation Steps
-------------------
Run npm install --save react-navigation on your project directory.
Run expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view on your project directory.
https://reactnavigation.org/docs/4.x/getting-started

Navigators
------------
You need to install the different navigators which we'll use in this module (StackNavigator, DrawerNavigator, TabsNavigator) separately.
So when we use the StackNavigator, run npm install --save react-navigation-stack
before you start using it (with v3 and lower, it was part of react-navigation itself).

Also add this import in the file where you are using createStackNavigator:
	import { createStackNavigator } from 'react-navigation-stack';

Same for TabsNavigator (used a little bit later in this module):
	npm install --save react-navigation-tabs
	import { createBottomTabNavigator } from 'react-navigation-tabs';

And also for DrawerNavigator (also used later in this module):
	npm install --save react-navigation-drawer
	import { createDrawerNavigator } from 'react-navigation-drawer';
  
  App Planing:
  -------------
  
