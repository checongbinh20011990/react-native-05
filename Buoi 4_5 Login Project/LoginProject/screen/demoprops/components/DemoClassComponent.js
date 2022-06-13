import { Text, View } from 'react-native'
import React, { Component } from 'react'

export default class DemoClassComponent extends Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    )
  }
}