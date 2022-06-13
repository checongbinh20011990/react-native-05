import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export const RenderHeader = (props) => {
    
    const onPress = () => {
        console.log(`Gia tri cua props ${props.title}`)
    }

    return (
        <View>
            <Text>{props.title}</Text>
            <Text>{props.content}</Text>
            {props.data.map((value,index)=>(
                <Text>{value}</Text>
            ))}
            <TouchableOpacity
                onPress={()=> onPress() }
            >
                <Text>Button</Text>
            </TouchableOpacity>
        </View>
    )
}
