import { Text, View, TouchableOpacity} from 'react-native'
import React, { Component } from 'react'

export default class DetailScreen extends Component {
  
  onPresNavigaToMapScreen = () => {
    this.props.navigation.navigate('map',{
        hello: "Màn hình detail gửi lời chào"
    })
  }
  
  render() {
    return (
      <View>
          <TouchableOpacity
            onPress={this.onPresNavigaToMapScreen}
          >
            <Text>Chuyển tới page Map</Text>
          </TouchableOpacity>
        
      </View>
    )
  }
}