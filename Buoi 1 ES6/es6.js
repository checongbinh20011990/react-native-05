/* 
    const : Hằng số 
    , var, let
    Cú pháp khai báo biến : var, const, let - tên biến = giá trị
    Operation : + , - , * , /, +=, *=, /=
*/


// const hello = "Đây là hằng số";
// const PI = 3.14;
// console.log(hello);


// var helloVar = "Hello biến Var";
// helloVar = "Đây là biến Var đã được gán lại giá trị lần 1 !";
// helloVar = "Đây là biến Var đã được gán lại giá trị lần 2 !";
// var soA = 2;

// console.log(helloVar);


// let soB = 25;
// console.log(soB);

// console.log("Ket qua " + (PI + soB))

const soTuNhien = "5";
var soC = 18;
var ketQua =  Number(soTuNhien) + soC;

var so1 = 6;
var so2 = 7;
var ketQua = so1 + so2;

var so1 = 6;
var so2 = 7;
var ketQua = so1 + so2;

var so1 = 6;
var so2 = 7;
var ketQua = so1 + so2;

console.log("Kết quả tính tổng " + ketQua);


/* scope
    function tên_function(){

    } : 
*/

/* 
    function : function scope
    không phải là function : block scope
*/
//ES5
function getWeight() {
    var w = 71;
    console.log("Số kg " + w);
    
    /* 
        Câu điều kiện : if
        cú pháp : if(điều kiện so sánh){
                    //thoã điều kiện so sánh

                  }else{
                    //không thoã điều kiện so sánh

                  }
    */
         
    if(w > 70) {
        // kết quả là true
        var goiY = "Bạn nên giảm cân, bằng cách tạp GYM";

        console.log("Số kg của bạn là " + w + "kg. Người bạn hơi béo !" );
    }else{
        //kết quả là false
        console.log("Số kg của bạn là " + w + "kg. Người bạn hơi gầy");
    }

    console.log("Kiểm tra biến kiểu Var " + goiY);    
}

// getWeight();

let letGetWeight = () => {
    var w = 75;
    console.log("Số kg " + w);
    if(w > 70) {
        // kết quả là true
        var goiY = "Bạn nên giảm cân, bằng cách tạp GYM";
        console.log("Số kg của bạn là " + w + "kg. Người bạn hơi béo !" );
    }else{
        //kết quả là false
        console.log("Số kg của bạn là " + w + "kg. Người bạn hơi gầy");
    }

    console.log("Kiểm tra biến kiểu Var " + goiY); 
}

letGetWeight();

var getValue = (name,lop) => {
    console.log("Tên của bạn là " + name + " Lớp là : " + lop);
}

getValue("CyberSoft","React Native 05");

/* 
    Hàm không có kết quả trả về
*/

var varTinhTong = (soA,soB) => {
    let tinhTong = soA + soB
    
    console.log("Kết quả tính tổng " + tinhTong)
}


varTinhTong(7,9)
varTinhTong(1,9)



/* 
    Hàm có kết quả trả về
*/

var phepNhan = (soA, soB) => {
    let ketQua = soA * soB

    return ketQua;
}

let ketQuaPhepNhan = phepNhan(5,5);
let ketQuanPhepNhan1 = phepNhan(ketQuaPhepNhan,2)

console.log("Kiểm tra giá trị phép nhân " + ketQuanPhepNhan1 )


/* 
    inline function
*/

let hello = (soA,soB) => "Tính tổng " + (soA + soB);

console.log("Kết quả tính tổng " + hello(3,7))

/* Kiểu khai báo đúng */
// let kieuSo1 = () => {

// }

// let kieuSo2 = (
//     soB,
//     soB,
//     soB,
//     soB
// ) => {
    
// }

// let kieuSo3 = () =>
// {

// }

/* Viết một hàm nhận vào điểm trung bình 
    nếu như điểm trung bình lớn hơn bằng 9 và bé hoặc bằng 10 => xuất ra học sinh giỏi
    nếu như điểm trung bình lớn hơn bằng 7 và bé hoặc bằng 8 => xuất ra học sinh khá
    nếu như điểm trung bình lớn hơn bằng 5 và bé hoặc bằng 6 => xuất ra học sinh trung bình
    nếu như điểm trung bình bé hơn bằng 5  => xuất ra học sinh yếu
*/

const averageScore = (score) => {
    if (score >= 9 && score <= 10) {
        return "Học sinh giỏi";
    } else if (score >= 7 && score <=8) {
        return "Học sinh khá";
    } else if (score >=5 && score <=6) {
        return "Học sinh trung bình";
    } else if (score >= 0 && score < 5) {
        return "Học sinh yếu"
    } else return "Điểm không hợp lệ!";
}


/* 
    Mảng
    index => vị trí

    String literal

    loop : Vòng lặp 
    for
    while
    do while

    for(giá trị bắt đầu; điều kiện để tiếp tục chạy, tăng giá trị bắt đầu lên đơn vị)
*/

let mangA = [5,2,7,4,5]

console.log("kiemtra mang " + mangA.length)

for(let i=0; i<=mangA.length - 1; i++){
    console.log("Giá trị từng phần tử của mảng " + mangA[i])
}

// for(let i = 0; i<=10; i++ ){
//     //Thoả điều kiện
//     console.log(`Kiểm tra vòng lặp for ${i}`)
// }


/* 
    Khai báo một mảng [Mảng kiểu số]
    Viết một hàm tính tổng tất cả các phần tử trong mảng
    1,2,3,4,5 ( 1 + 2 + 3 + 4 + 5)
*/



/* 
    Rest Parameter
*/

let hamTinhTong = (...numbers) => {
    let ketQua = 0;
    for(let i=0; i<numbers.length; i++){
        
        ketQua += numbers[i]
        
    }
    console.log(ketQua);
}

hamTinhTong(2,4,6,8)

/* 
    spread operator
*/

let mangC = [2,5,7,9]
let mangE = [...mangC]

console.log("kiemtra mang C " + mangC)
console.log("kiemtra mang E " + mangE)

let str = "Hello world"
let ketQuaStr = [...str]

console.log(ketQuaStr)




/*
    Kiểu object
    cú pháp : let,var, const tenbien = {key:value, key:function}
*/

let nhanVien = {
    maNhanVien: "MS001",
    tenNhanVien: "Nguyen Van A",
    phongBan: "Phong IT",
    tuoi: 16,

    layThongTinNhanVien: function(){
        hienThiThongTinNhanVien = () => {
            console.log(`Ho ten ${this.tenNhanVien}`)
        }

        hienThiThongTinNhanVien();
    }
}


// nhanVien.layThongTinNhanVien()

/* 
    Destrucring ( Phân rã cấu trúc)
    Cú pháp : let,var, const { } => Đối với object
    
*/

let {tenNhanVien,maNhanVien,layThongTinNhanVien} = nhanVien;
layThongTinNhanVien();

// console.log(`Phân rã cấu trúc ${tenNhanVien} - mã nhân viên ${maNhanVien}`)


let topCodes = ["ReactJS","Fultter","IONIC","Java"]
let [a,sc] = topCodes;


/* 
    Cú pháp : for(let,var tenbien(vitri) in (mảng muốn sử lý) )
    Cú pháp : for(let,var tenbien(giá trị) of (mảng muốn sử lý) )
*/

// for(let index in topCodes){
//     let value = topCodes[index]
//     console.log(`Duyệt mảng for in ${value}`)
// }

for(let value of topCodes){
    console.log(`Duyệt mảng for of ${value}`)
}


/* 
    OOP (Đối tượng)
    class (tên đối tượng){

    }

    1. Điểm khác biệt giữa đối tượng hoặc class và object
    - Đối tượng phải có phương thức khởi tạo
    - Tính kế thừa

*/

class SinhVien{
    constructor(ma,hoTen,lop,tuoi){
        this.ma = ma;
        this.hoTen = hoTen;
        this.lop = lop;
        this.tuoi = tuoi
    }

    diHoc(){
        console.log("Đang đi học")
    }
}

class LopTruong extends SinhVien {
    constructor(ma,hoTen,lop,tuoi,chucVu){
        super(ma,hoTen,lop,tuoi)
        this.chucVu = chucVu
    }
}

class LopPho extends SinhVien {

}

let sinhVien = new LopTruong();
let lopTruongA = new LopTruong("MS005","Nguyễn Văn V","Lớp IT",16,"Lớp trưởng")
console.log(`Đối tượng lớp trưởng - ${lopTruongA.chucVu}`)

// let sinhVienA = new SinhVien("MS002","Nguyễn Văn A","Phòng IT",16);
// let sinhVienB = new SinhVien("MS002","Nguyễn Văn B","Phòng Nhân Sự",18);


// sinhVienA.diHoc()
// console.log(`Kiểm tra đối tượng sinh viên ${sinhVienA.phongBan}`);










