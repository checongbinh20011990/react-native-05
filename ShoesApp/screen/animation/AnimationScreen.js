import { View, Text, SafeAreaView, TouchableOpacity, StyleSheet, Animated, Easing } from 'react-native'
import React, { useEffect } from 'react'
import { types } from '@babel/core'

export default function AnimationScreen() {

    const animValue = new Animated.Value(0) //Buoc 1: Khởi tạo giá trị ban đầu của Animation
    const animScaleValue = new Animated.Value(0.3)
    const styleAnim = {opacity: animValue} //Buoc 2 Khai báo thuộc tính của css cần làm animation
    const styleScaleAnim = {transform : [{scale: animScaleValue}]}

    // Buoc 3 : Component can su dung animation (6 component can ban)
  
// useEffect(()=>{
//     Animated.timing(
//         animValue,
//         {
//             toValue: 1,
//             duration: 3000, // Milisecond 
//             useNativeDriver: true
//         }
//     ).start()
// })

onPressAnimButton = () => {
    Animated.parallel(
        [
            Animated.timing(
                animValue,
                {
                    toValue: 1,
                    // duration: 3000, // Milisecond
                    delay: 500,
                    easing: Easing.circle,
                    useNativeDriver: true
                }
            ),
            
            Animated.spring(
                animScaleValue,
                {
                    toValue: 1,
                    friction: 1, //Ma sát
                    tension: 10, //Sức căng
                    useNativeDriver: true 
                }
            )
        ],
        
    ).start()

}

return (
    <SafeAreaView style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View style={[styles.box, styleScaleAnim, styleAnim]}>
            
        </Animated.View>
        
        <TouchableOpacity
            onPress={()=>onPressAnimButton()}
        >
            <Text>Animation Screen</Text>
        </TouchableOpacity>
      
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    box:{
        width:100,
        height:100,
        backgroundColor: 'red',
    }
})

