import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import CountScreen from './screen/count/CountScreen'
import { Provider } from 'react-redux'
import { store } from './stores'

export default class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
          <CountScreen />
        </View>
      </Provider>
    )
  }
}