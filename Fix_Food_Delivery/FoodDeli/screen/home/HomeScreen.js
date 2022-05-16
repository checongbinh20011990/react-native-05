import { Text, View, SafeAreaView } from 'react-native'
import React, {useState} from 'react'
import AppBar from './component/AppBar'
import Categories from './component/Categories'
import Menu from './component/Menu'
import styles from './styles/styles'
import { menuData } from '../../common/Contant'

export default HomeScreen = () => {

  return(
    <SafeAreaView style={styles.container}>
      <AppBar />
      <Categories />
      <Menu />
    </SafeAreaView>
  )
}
