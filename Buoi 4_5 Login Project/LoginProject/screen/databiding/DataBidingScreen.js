import { Text, View, SafeAreaView, Button } from 'react-native'
import React, { Component } from 'react'
import { styles } from './styles/DataBidingStyles'
/* 
    statefull => class có kết thừa component
    stateless => giao diện render bởi function 
*/

/* 
    Thread : 
       - Main Thread => Xử lý giao diện hiển thị giao diện
       - Woker Thread => Chuyển xử lý về code
*/

const data = [
    "Gia tri 1",
    "Gia tri 2",
    "Gia tri 3",
    "Gia tri 4"
]

export default class DataBidingScreen extends Component {
  name = "Nguyễn Văn A"
  soA = 2;
  soB = 4;
  state = { 
    tinhTong: 0,
    isRenderES7: false
  }

  renderArray = () => {
      return data.map((value,index)=>(
        <Text>{value}</Text>
      ));
  }

//   renderHello = () => {
//     if(this.state.isRenderHelloES7){
//         return this.renderHelloES7()
//     }
//     return this.renderHelloReact()
    
//   }

//   renderHelloReact = () => {
//       return <Text>Render Hello React</Text>
//   }

//   renderHelloES7 = () => {
//     return <Text>Render Hello ES7</Text>
//   }

onPressSignIn = () => {
    this.setState({isRenderES7: true})
}

  onPressTinhTong = () => {
     let kq = this.soA + this.soB
     this.setState({tinhTong: kq})
  }

  render() {
    return (
      <SafeAreaView>
        <Text>{this.name}</Text>
        <Text>{this.so}</Text>
        <Button 
            title="SIGN IN"
            color="#841584"
            onPress={this.onPressSignIn}
        />
        <Button 
            title="Tính Tổng"
            onPress={this.onPressTinhTong}
        />
        
        {this.state.isRenderES7 == true ? <Text>Ket qua la true</Text> : <Text>Ket qua la false</Text>}
      
        {/* {this.renderArray()} */}
        {
            data.map((value,index)=>(
                <Text>{value}</Text>
            ))
        }
      </SafeAreaView>
    )
  }
}