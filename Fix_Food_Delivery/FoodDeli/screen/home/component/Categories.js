import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect } from 'react'
import styles from '../styles/styles'
import { useSelector, useDispatch } from 'react-redux'
import { getCategories, onSelectedCategory } from '../HomeSlice'

export default function Categories() {
  return (
    <View style={styles.category}>
      <Text style={styles.category__text}>Main</Text>
      <Text style={styles.category__text}>Categories</Text>
      <CategoriesList />
    </View>
  )
  
}

export const CategoriesList = () => {
    //useSelector => Lấy state trên store
    const categoriesData = useSelector((state) => state.home.categoryData)
    const currentCategories = useSelector((state) => state.home.currentCategory)
    
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getCategories())
    },[categoriesData])


    renderItem = ({item}) => (
        <TouchableOpacity
            style={[styles.category_list, currentCategories == item.id ? styles.category_list__selected : ""]}
            onPress={()=> dispatch(onSelectedCategory(item.id))}
        >
            <View style={styles.category_list__circle}>
                <Image style={styles.category_list__circle__icon} source={item.icon}/>
            </View>

            <Text style={[styles.category_list__text, currentCategories == item.id ? styles.category_list__text__selected : ""]}>{item.name}</Text>
        </TouchableOpacity>
    )

    return(
        <FlatList
            horizontal
            showsHorizontalScrollIndicator={false}
            data={categoriesData}
            renderItem={renderItem}
        />
    )
}