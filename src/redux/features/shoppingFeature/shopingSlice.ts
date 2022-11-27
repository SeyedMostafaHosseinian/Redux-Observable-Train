import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orders:0,
    pay:false,
    sended:false
}
const slice = createSlice({
    name:"shopping",
    initialState,
    reducers:  {
        payProduct: (state,action:{type:string}) => {
            state.pay = true
            state.sended = false
            
        },
        sendProduct: (state,action:{type:string}) => {
            state.pay = false
            state.sended = true
            state.orders = state.orders + 1
        }
    }
})
export const shoppingFeature = {
    actions:slice.actions,
    reducer:slice.reducer
}