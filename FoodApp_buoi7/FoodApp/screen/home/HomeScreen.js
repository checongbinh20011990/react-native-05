import { Text, View , TouchableOpacity, Image} from 'react-native'
import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import DetailScreen from '../detail/DetailScreen'
import MapScreen from '../map/MapScreen'
import { icons } from '../../assets/data/Constant'

// const Tab = createBottomTabNavigator()
const Drawer = createDrawerNavigator()

export default HomeScreen = ({navigation}) => {

    const onPressChuyenPageDetail = () => {
        navigation.navigate('detail',{
            hello: "Màn hình home gửi lời chào"
        })
    }

    return(

       <Image source={icons.back} /> 
        // <Drawer.Navigator>
        //     <Drawer.Screen name='detail_draw' component={DetailScreen} />
        //     <Drawer.Screen name='map_draw' component={MapScreen} />
        // </Drawer.Navigator>

        // <Tab.Navigator>
        //     <Tab.Screen name='detail_tab' component={DetailScreen}/>
        //     <Tab.Screen 
        //         name='map_tab' 
        //         component={MapScreen}
        //         options={{
        //             tabBarIcon: ({focused}) => (
        //                 <Text style={{
        //                     color: focused ? 'red' : 'black'
        //                 }}>Customer</Text>
        //             )
        //         }}
        //     />
        // </Tab.Navigator>
    )
}

/* 
 * Yêu Cầu màn hình home
- Khi click category thì phải được danh sách sản phẩm tương với category
- Khi vào từng Bottom Tab thì phải show được nội dung page tương ứng
- Khi click vào sản phẩm thì phải qua trang chi tiết sản phẩm và phải hiển
thị đúng nội dung của sản phẩm được chọn bên trang home.

 * Yêu cầu chi tiết
- Tăng giảm số lượng
- Load đúng nội dung bên trang home truyền qua
- Khi tăng số lượng sản phẩm thì tổng giá tiền phải được cộng theo số lượng
sản phẩm đã tăng.

* Yêu cầu map
- Load được google map, openmap ( nếu có thể )
- Direction ( API Google, OpenMap ) ( nếu có thể )
- GeoCoding ( API Google, OpenMap ) ( nếu có thể )
- Trình bày giao diện giống design
*/