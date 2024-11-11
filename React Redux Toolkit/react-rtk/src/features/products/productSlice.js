import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';

const initialState={
    loading:false,
    products:[],
    error:""
}

export const fetchProducts=createAsyncThunk('product/fetchProducts',()=>{
    return axios.get('https://fakestoreapi.com/products')
    .then((res)=>res.data.map((productsData)=>productsData.title)
    )
})



const productSlice=createSlice({
    name:'product',
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading=true
        })
        builder.addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading=false,
            state.products=action.payload
        })
        builder.addCase(fetchProducts.rejected,(state,action)=>{
            state.loading=false,
            state.error=action.error.message
        })
    }

})

export default productSlice.reducer;