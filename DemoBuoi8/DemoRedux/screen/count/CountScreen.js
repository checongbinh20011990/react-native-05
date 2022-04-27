import { Text, View, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { tangCount,giamCount } from './actions/CountAction'

class CountScreen extends Component {

//   state = {
//     count: 0
//   }

//   onPressTang = () => {
//     this.setState({count: this.state.count + 1})
//   }

//   onPressGiam = () => {
//     this.setState({count: this.state.count - 1})
//   }

  render() {
    return (
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <Text>Count Number : {this.props.countNumber} </Text>
        <TouchableOpacity
          onPress={()=> this.props.tangCount()}
        >
          <Text>Tăng Number + </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={()=>this.props.giamCount()}
        >
          <Text>Giảm Number - </Text>
        </TouchableOpacity>
      </View>
    )
  }
}

/* 
    connect(state can su dung,action can duoc goi)(ten component can ket noi len Store)
    dispatch => Tạo ra một action để truyền vào reducers
*/

const mapStateToProps = state => {
    return {
        countNumber: state.count
    }
}

const mapDispatchToProp = dispatch => {
    return {
        tangCount: () => {
            dispatch(tangCount())
        },
        giamCount: () => {
            dispatch(giamCount())
        } 
    }
}

export default connect(mapStateToProps,mapDispatchToProp)(CountScreen)
// export default CountScreen