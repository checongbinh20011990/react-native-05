import { Text, View, TouchableOpacity } from 'react-native'
import React,{useState, useEffect, useCallback, useMemo} from 'react'
import Count from './Login'

export default App = () => {
// Kiểu dữ liệu [tên state, tên hàm để gán giá trị cho state] 
// = useState('Giá trị mặc định')

// memo được sử dụng => luôn luôn bên child component
// useCallBack được sử dụng => Khi child component có nhận vào một hàm (funcion)
//[không có tham số trả về]
// useMemo Sẽ được dùng trong trường hợp => hàm có kết quả trả về và nó sẽ 
// cache [lưu tạm kết quả] để tránh rerender

  const [count, setCount] = useState(0)
  const [tong,setTong] = useState(0)

  useEffect(()=>{
    //componentDidMount, componentDidUpdate, componentWillUnmount
    console.log(`use Effect`)

    //Link API lấy danh sách giày Slider
    //Link API lấy danh sách giày theo category

  },[tong])

  tangBienCount = () => {
    setCount(count + 1)
    console.log(`kiểm tra tăng biến count`)
  }

  tinhTong = () => {
    setTong(tong + 1)
    
  }

  tinhTongI = () => {
    let i = 1;
    while(i < 100){
      i++
    }

    console.log(`Ham tinh tong`)
    return i
  }

  const callBackTinhTong = useCallback(tinhTong,[tong])
  const memoTinhTongI = useMemo(()=>tinhTongI(),[])

  console.log(`Giao dien App`)

  return(
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      {/* <Text>Tổng : {tong}</Text>
      <TouchableOpacity
        onPress={tinhTong}
        style={{backgroundColor: 'yellow' , padding:10}}
      >
        <Text>Tính tổng</Text>
      </TouchableOpacity> */}
      <Text>Tích : {memoTinhTongI}</Text>

      <Text>Count : {count}</Text>
      <TouchableOpacity
        onPress={tangBienCount}
        style={{backgroundColor: 'red' , padding:10}}
      >
        <Text>Tăng Biến Count</Text>
      </TouchableOpacity>
      {/* <Text>Đây là trang chủ</Text> */}


      <Count tinhTong={callBackTinhTong} />


    </View>
  )
}
