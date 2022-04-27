import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './screen/home/HomeScreen'
import DetailScreen from './screen/detail/DetailScreen'
import MapScreen from './screen/map/MapScreen'


const Stack = createNativeStackNavigator()

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName='home'
        >
          <Stack.Screen name='home' component={HomeScreen} />
          <Stack.Screen name='detail' component={DetailScreen} />
          <Stack.Screen name='map' component={MapScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
}