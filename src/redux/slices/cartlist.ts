import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICartList } from '../../interfaces/IcartList';
import { Cartlist, Product } from '../../interfaces/state';

const cartlist:Cartlist[]=[];
const initialState={
  cartlist
}

export const cartListSlice = createSlice({
  name: 'cartList',
  initialState,
  reducers: {
    setCartList: (state, action: PayloadAction<Product>) => {
      state.cartlist.push(action.payload);
    },
    removeItem:(state,action)=>{
    const updatedList=state.cartlist.filter((row:ICartList)=>{
      return row.id!==parseInt(action.payload)
     })
     state.cartlist=[...updatedList]
    }
  },
})

export const {setCartList, removeItem}=cartListSlice.actions;