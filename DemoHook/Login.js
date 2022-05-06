import { Text, View, TouchableOpacity } from 'react-native'
import React, { useState, memo } from 'react'

Count = (props) => {
    
   
    console.log(`Child component Login`)
    
    return(
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <TouchableOpacity
                onPress={()=> props.tinhTong() }
                style={{backgroundColor: 'blue' , padding:10}}
            >
                <Text style={{color:'white'}}>Tính tổng </Text>
            </TouchableOpacity>
        </View>
    )
}

export default memo(Count)