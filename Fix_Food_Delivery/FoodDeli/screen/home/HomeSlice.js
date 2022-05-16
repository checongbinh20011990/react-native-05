import { createSlice } from "@reduxjs/toolkit";
import { categoryData, menuData } from "../../common/Contant";

const initialState = {
    categoryData: [],
    currentCategory: 0,
    menuData: []
}

export const homeSlice = createSlice({
    name: "home",
    initialState: initialState,
    reducers:{
        getCategories: (state,action)=>{
            state.categoryData = categoryData
        },
        onSelectedCategory: (state,action)=>{
            let categoryId = action.payload
            state.currentCategory = categoryId
            state.menuData = menuData.filter((value) => categoryId == value.categoryId)
        }
    }
})

export const { getCategories, onSelectedCategory } = homeSlice.actions
export default homeSlice.reducer