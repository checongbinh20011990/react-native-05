import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { ICONS } from '../../../common/Images'
import styles from '../styles/styles'
import { useNavigation } from '@react-navigation/native'
import { screens } from '../../../common/Contant'

export default function AppBar() {

  const navigation = useNavigation()

  navigationToMap = () => {
    navigation.push(screens.map)
  }

  return (
    <View style={styles.appbar}>
        <TouchableOpacity style={{justifyContent:'center'}}
          onPress={()=> navigationToMap()}
        >
            <Image style={styles.icon} source={ICONS.nearby} />
        </TouchableOpacity>

        <View style={styles.app_title}>
            <Text>745 Lincoln PL</Text>
        </View>

        <TouchableOpacity style={{justifyContent:'center'}}>
            <Image style={styles.icon} source={ICONS.shopping_basket} />
        </TouchableOpacity>
    </View>
  )
}