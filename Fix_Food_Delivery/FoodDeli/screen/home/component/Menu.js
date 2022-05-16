import { View, Text , FlatList, TouchableOpacity, Image} from 'react-native'
import React from 'react'
import styles from '../styles/styles'
import { ICONS, IMAGES } from '../../../common/Images'
import { useSelector } from 'react-redux'

export default function Menu() {

    const menuData = useSelector((state) => state.home.menuData)

    renderItem = ({item}) => (
        <TouchableOpacity
            style={styles.menu}
        >
            <View style={{marginBottom: 10}}>
                <Image style={styles.menu__img} source={item.photo} />
                <View style={styles.menu__duration}>
                    <Text>{item.duration}</Text>
                </View>
            </View>

            <Text style={styles.menu__title}>{item.name}</Text>
            <View style={styles.menu_type}>
                <Image style={[styles.menu_type__icon, styles.marginRight8]} source={ICONS.star}/>
                <Text style={styles.marginRight8}>{item.star}</Text>
                <Text style={styles.marginRight8}>Category Selected</Text>
                <Text>${item.price}</Text>
            </View>

        </TouchableOpacity>
    )

  return (
    <FlatList 
        data={menuData}
        renderItem={renderItem}
    />
  )
}