import { createSlice } from '@reduxjs/toolkit'

export const cartListSlice = createSlice({
  name: 'cartList',
  initialState: {
    cartlist: []
  },
  reducers: {
    setCartList: (state, action) => {
      state.cartlist.push(action.payload)
    },
    removeItem:(state,action)=>{
    const updatedList=state.cartlist.filter(row=>{
      return row.id!==parseInt(action.payload)
     })
     state.cartlist=[...updatedList]
    //  state.cartlist.splice(parseInt(action.payload),1)
    }
  },
})

export const {setCartList, removeItem}=cartListSlice.actions;