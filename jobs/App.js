
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';
import { Provider } from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import SettingsScreen from './screens/SettingsScreen';
import ReviewScreen from './screens/ReviewScreen'

export default class App extends React.Component {
  render() {
    const MainNavigator = TabNavigator({  //when this renders it instantly renders all the screens by default. 
      welcome: { screen: WelcomeScreen },
      auth: { screen: AuthScreen },
      main: { //second navigation, like item1, item2 >itemA itemB, item3
        screen: TabNavigator({
          map: { screen: MapScreen },
          deck: { screen: DeckScreen },
          review: {
            screen: StackNavigator({
              review: { screen: ReviewScreen },
              settings: { screen: SettingsScreen }
            })
          }
        })
      }
    }, {
      navigationOptions: {
        tabBarVisible: false //removing the tab bar at the bottom
      },
      lazyLoad: true //so the pages render only when you navigate to specific pages 
    });

    return (  //adding the middleware and adding styles
      <Provider store = {store}>  
        <View style = {styles.container}>
          <MainNavigator />
        </View>
      </Provider>
    );
  }
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    justifyContent: 'center',
  },
});
