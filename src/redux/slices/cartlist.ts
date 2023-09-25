import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICartList } from '../../interfaces/IcartList';
import { Cartlist, Product } from '../../interfaces/state';
import { useGetProductsQuery } from '../api/productsapi';

const cartlist:Cartlist[]=[];
const initialState={
  cartlist
}


export const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    removeProduct:(state, action)=>{
         console.log('remove product payload ', action.payload);
    },
    setCartList: (state, action: PayloadAction<Product>) => {
      state.cartlist.push(action.payload);
    },
    removeItem:(state,action)=>{
     state.cartlist.splice(action.payload,1)
    }
  },
})

export const {setCartList, removeItem, removeProduct}=cartListSlice.actions;