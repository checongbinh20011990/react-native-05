import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import styles from './styles/EmojiStyles'

const emojiData = [
    require("../../asset/emoji/angry.png"),
    require("../../asset/emoji/care.png"),
    require("../../asset/emoji/haha.png"),
    require("../../asset/emoji/like.png"),
    require("../../asset/emoji/love.png"),
    require("../../asset/emoji/sad.png"),
]

export default class EmojiScreen extends Component {

  state = {
      emojiSelected: null
  }
  
  onPressIcon = (index) => {
    this.setState({emojiSelected: emojiData[index]})
  }

  render() {
    return (
      <View style={styles.root}>
        <Text style={styles.root__text}>Bạn đang cảm thấy như thế nào ?</Text>
        <Image source={this.state.emojiSelected} />
        <View style={styles.row}>
            {
                emojiData.map((data,index)=>(
                    <TouchableOpacity 
                        key={index}
                        onPress={()=> this.onPressIcon(index) }
                    >
                        <Image style={styles.emoji_icon} source={data}/>
                    </TouchableOpacity>
                ))
            }
        </View>
      </View>
    )
  }
}