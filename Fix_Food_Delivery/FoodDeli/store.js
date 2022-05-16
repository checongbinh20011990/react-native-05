import { configureStore } from "@reduxjs/toolkit";
import homeReducer from "./screen/home/HomeSlice"

export default store = configureStore({
    reducer: {
        home: homeReducer
    }
})

//Bước 1 : Tạo Store.js khai báo reducer cần sử dụng
//Bước 2 : Tạo ra file Slice (nơi khai báo action và reducer)

