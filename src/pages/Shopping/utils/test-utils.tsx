import React from "react";
import { render } from "@testing-library/react";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
// As a basic setup, import your same slice reducers
import { productsApi } from "../../../redux/api/productsapi";
import { cartListSlice } from "../../../redux/slices/cartlist";

export function renderWithProviders(
  ui:any,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store=configureStore({
      reducer:{
          cartlist:cartListSlice.reducer,
          [productsApi.reducerPath]:productsApi.reducer
  
      },
      middleware:(getdefaultMiddleware)=>
      getdefaultMiddleware().concat([
          productsApi.middleware
      ]),
  
  }),
    ...renderOptions
  } = {}
) 
{
  function Wrapper({ children }:any) {
    return <Provider store={store}>{children}</Provider>;
  }

  // Return an object with the store and all of RTL's query functions
  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
}