import { createSlice } from "@reduxjs/toolkit";
import { saveLocalStorage, getLocalStorage } from "../../common/LocalStorage";
import { checkLogin } from "./LoginThunk";
import { KEY_ACCESS_TOKEN } from "../../common/Constant";

const initialState = {
    isLoading: false,
    accessToken: ""
}

const loginSlice = createSlice({
    name:'loginSlice',
    initialState: initialState,
    reducers:{
        getAccessToken: (state,action)=>{
           let token = getLocalStorage(KEY_ACCESS_TOKEN).then((data)=>{
                console.log(state)
                // state.accessToken = data
            })
        }
    },
    extraReducers: (builder) => {
        builder.addCase(checkLogin.fulfilled, (state,action)=>{
            state.accessToken = action.payload
            //lưu offline
            saveLocalStorage(KEY_ACCESS_TOKEN,action.payload)
        })
    }
})

export const {getAccessToken} = loginSlice.actions
export default loginSlice.reducer