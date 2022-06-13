import React, {Component} from "react";
import {View, Text, Image, TextInput, ScrollView} from "react-native";

/* stateful component */
// export default class App extends Component {
//   render(){
//     return (
//       <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
//         <Text>Hello react native 05</Text>
//       </View>
//     );
//   }
// }

/* 
  stateless component
*/

export default function App() {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color:'red'}}>Stateless component</Text>
      <Image
        style={{width:150, height:150}}
        source={{uri:'https://jes.edu.vn/wp-content/uploads/2017/10/h%C3%ACnh-%E1%BA%A3nh.jpg'}} 
        />

      <Image 
        style={{width:150, height:150}}
        source={require('./assets/hinh1.jpeg')}/>

      <TextInput multiline placeholder="Nhập họ tên" style={{width:200, height:42, backgroundColor:'red'}} />

      <ScrollView>
        <Text>
        Bệnh viện Hùng Vương, Từ Dũ, Nhân dân 115, Viện Y Dược học Dân tộc... được Sở Y tế chấm điểm chất lượng nhất trong 103 cơ sở y tế thành phố.

Kết quả đánh giá chất lượng bệnh viện năm 2021 được Sở Y tế TP HCM công bố ngày 8/4, theo thang điểm 5. Trong đó, 32 bệnh viện đạt điểm trung bình từ 4 điểm trở lên, 11 cơ sở y tế điểm trung bình dưới 3, còn lại đạt từ 3 đến dưới 4 điểm. Năm ngoái, chỉ 27 bệnh viện đạt điểm chất lượng tốt.

Số điểm trung bình về quản lý chất lượng bệnh viện trong năm qua của các bệnh viện khối công lập lẫn tư nhân đều tăng nhẹ. Cụ thể, điểm trung bình bệnh viện cấp thành phố năm 2021 đạt 4,03 điểm (năm 2020 là 3,94 điểm). Đây là kết quả Sở Y tế đánh giá chất lượng thường niên đối với tất cả bệnh viện trực thuộc, theo Bộ tiêu chí chất lượng bệnh viện Việt Nam do Bộ Y tế ban hành.

10 bệnh viện top đầu bao gồm: Hùng Vương, Từ Dũ, Nhân dân 115, Viện Y dược học cổ truyền, Hoàn Mỹ Sài Gòn, Nhi đồng 1, Nhân dân Gia Định, Bình Dân, Vimec, Tâm Anh.

11 bệnh viện, trung tâm y tế đạt điểm trung bình thấp nhất là: Trung tâm Y tế quận 3, quận 5; Bệnh viện Phẫu thuật Tạo hình Thẩm mỹ Hiệp Lợi, Quốc tế Columbia Asia Gia Định, Mắt Sài Gòn 2, chuyên khoa Phẫu thuật Thẩm mỹ Quốc tế Thảo Điền, STO Phương Đông, Mắt Việt Hàn, Răng Hàm Mặt Mỹ Thiện, Mắt Cao Thắng, Răng Hàm Mặt Sài Gòn.

Ba vấn đề nhiều cơ sở còn hạn chế là kiểm soát nhiễm khuẩn trong bệnh viện, an toàn phẫu thuật và hồ sơ bệnh án điện tử. Sở có kế hoạch tăng cường công tác kiểm soát nhiễm khuẩn, tập huấn xử lý dụng cụ nội soi, kiểm tra các hoạt động nội soi can thiệp.

"Bệnh viện nào không tuân thủ sẽ tạm ngưng dịch vụ nội soi cho đến khi khắc phục xong", đại diện Sở Y tế cho biết.

Về tình hình khám chữa bệnh, 3 tháng đầu năm thành phố ghi nhận hơn 6,8 triệu lượt khám chữa bệnh ngoại trú tại các cơ sở y tế, tăng hơn 1,25 triệu lượt so với 3 tháng trước đó nhưng so với cùng kỳ năm ngoái thì giảm hơn 2,5 triệu lượt, chủ yếu do ảnh hưởng của Covid-19.

Trong quý I, các cơ sở y tế điều trị nội trú gần 322.000 bệnh nhân thông thường và hơn 35.500 trường hợp mắc Covid-19. So với cùng kỳ năm ngoái, số lượt bệnh nhân thông thường điều trị nội trú giảm khoảng 170.000.
        </Text>
      </ScrollView>

    </View>
  )
}

