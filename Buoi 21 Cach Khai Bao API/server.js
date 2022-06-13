const { request, response } = require('express')
const express = require('express')
const app = express()
app.use(express.json()) // cho phép lấy tham số truyền ngầm dưới dạng json

/*
    http://localhost:3000/menu
    GET: Để lấy thông tin dữ liệu, hoặc thông tin chi tiết dữ liệu ( tham số sẽ được truyền trên trình duyệt)
    POST: Thêm dữ liệu vào database (XOÁ, SỬA, TÌM KIẾM) (tham số sẽ được truyền ngầm) 
    UPDATE: Cập nhật dữ liệu vào database (tham số sẽ được truyền ngầm)
    DELETE: Xoá dữ liệu ở database (tham số sẽ được truyền ngầm)
*/

/* 
    Tham số thứ 1 là tên đường dẫn
    Tham số thứ 2 nơi xử lý logic code khi người dùng gọi vào
    đường dẫn đã khai báo ở tham số thứ 1

    GET (Giới hạn ký tự) : 
    GET : ở PostMan thì qua tab params để định nghĩa tham số
        - urlencoded ( request.query ) : ?tenthamso=giatri&tenthamso=giatri&tenthamso=giatri 
        - pathparam ( request.param ) : /:giatrithamso
*/
app.get('/menu',(request,response)=>{
    const {soA, soB} = request.query
    console.log(soA)
    response.send(`Hello API`)
})

/* 
    truyền tham số dạng pathparam 
    - form-data : truyền tham số dạng key value và cho phép truyền file đính kèm
    - urlencode : truyền tham số dạng key value    
*/
app.get('/menu/:soA/:soB',(request,response)=>{
    console.log(request.params)
    console.log(request.query)
    response.send(`Hellp API Path Param`)
})

/*
    Để thực hiện tham số truyền ngầm ở postman chuyển qua tab body
    request.body
*/
app.post('/menu/create/:soA',(request,response)=>{
    console.log(request.params)
    console.log(request.body)
    response.send(`Hello API POST`)
})

app.post('/math/total',(request,response)=>{
    const {soA, soB} = request.body
    const total = soA + soB
    response.send(`total ${total}`)
})
/* raw body 
    docker, Mysql Server
    Mysql WorkBerch
*/
app.post('/math/total_array',(req,resp)=>{
    const arrayData = req.body
    let total = 0
    arrayData.forEach(element => {
        total = total + element
    })

    resp.send(`total array ${total}`)
})

/* 
    Định nghĩa một đường dẫn sau
    /math/total (POST)
    - nhận vào 2 tham số dưới dạng post json
    - thực hiện phép tính tổng và trả kết quả ra response

    Định nghĩa một đường dẫn
    /math/total_array (POST)
    - nhận tham số là một mảng dưới dạng json
    - thực hiện phép tính tổng và trả kết quả ra response
*/

/* Định nghĩa đường dẫn http://localhost:3000 */
app.listen(3000,()=>{
    console.log(`Listen ports 3000`)
})