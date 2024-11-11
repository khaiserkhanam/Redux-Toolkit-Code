import {createSlice} from '@reduxjs/toolkit';
import { pizza_order as pizzaOrdered} from '../pizza/pizzaSlice';
const initialState={
    burgerBuns:200
}
const burgerSlice=createSlice({
    name:'burger',
    initialState,
    reducers:{
        burger_order:(state)=>{
            state.burgerBuns--;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(pizzaOrdered,(state)=>{
            state.burgerBuns--;
        })
    }

})
export default burgerSlice.reducer;
export const {burger_order}=burgerSlice.actions