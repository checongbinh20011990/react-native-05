import { configureStore } from "@reduxjs/toolkit"
import HomeReducer from "./screen/home/HomeSlice"
import LoginReducer from "./screen/login/LoginSlice"

export const store = configureStore({
    reducer:{
        home: HomeReducer,
        login: LoginReducer
    }
})