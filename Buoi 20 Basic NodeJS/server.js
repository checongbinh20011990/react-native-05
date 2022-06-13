// const,let,var, for, map => giống 100%
// import, export
// import abc from ''
// const { hello } = require('./data')

// console.log(hello)


const fs = require('fs')

// fs.writeFileSync('data.json','Hello File System')
// const buffer = fs.readFileSync('data.json')
// console.log(buffer.toString())

const yargs = require('yargs')
/* 
    node ten_file_js ten_command [ --key="value" ]  
*/

const getCategory = () => {
    const buffer = fs.readFileSync('category.json')
    const data = buffer.toString()
    const dataJson = JSON.parse(data)

    return dataJson
}


yargs.command({
    command: 'addUser', //ten function
    builder: { // quy dinh ten tham so truyen vao
        username: {
            type: "string"
        },
        password: {
            type: "string"
        }
    },
    handler: function(args){
        //Được thực hiện khi người dùng gọi command với tham số là addUser
        console.log(args.username)
        console.log(args.password)
    }
}).command({
    command: 'getUser',
    handler: function(args){
        //Get User
        console.log(`Hello User`)
    }
}).command({
    command: 'addCategory',
    builder: {
        category_name: {
            type: "string"
        },
        id: {
            type: "number"
        }
    },
    handler: function(args){
        const {category_name, id} = args
        const oldData = getCategory()
        const newData = [...oldData,{category_name: category_name, id: id}]
        fs.writeFileSync('category.json',JSON.stringify(newData))

    }
}).command({
    command: 'getCategory',
    handler: function(args){
        console.log(getCategory())
    }
}).argv





// "select * from product p where p.name ilike '%dk%' "
// 100.000
// id UUID
/* 
    Food, 1
    Drink, 2
    File category.json 
    [
        {
            category_name:"Food",
            id: 1
        },
        {
            category_name:"Drink",
            id: 2
        }
    ]
    1) Tạo ra command add category ( sẽ có 2 tham số : category_name, id)
    2) Trong command add category ( lấy 2 tham số và tạo ra file lưu trữ lại  )
    3) Tạo ra command lấy category đã lưu trữ
*/
