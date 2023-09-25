import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from '../api/productsapi'
import { cartListSlice } from '../slices/cartlist'

export const store = configureStore({
  reducer: {
    cartlist: cartListSlice.reducer,
    [productsApi.reducerPath]: productsApi.reducer,
  },
  middleware: (getdefaultMiddleware) =>
    getdefaultMiddleware().concat([productsApi.middleware]),
})

setupListeners(store.dispatch)
