import React, { useState } from 'react'
import { useDebounce } from './useDebounce'
import useFetch from './useFetch'
import { ResponseType } from './types'

export const UseCountryInfo = () => {
  const [state, setState] = useState({
    response: [],
    error: false,
    errorMsg: '',
    loading: true,
    userInputTxt: '',
  })

  const debouncedValue = useDebounce(state.userInputTxt, 500); //Debounce feature is incorporated in this Custom Hook

  const { response, error, errorMsg, loading } = useFetch(debouncedValue); //Fetch API feature is encapsulted in this Custom Hook

  const getUserInputTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
      setState((prevState) => {
        return {
          ...prevState,
          userInputTxt: e.target.value,
        }
      })
  }

  function responseOkay(state: ResponseType) { //ResponseType spcified the type for the State
    return state.userInputTxt && state.userInputTxt.length > 0
  }

  return {
    state,
    setState,
    getUserInputTxt,
    debouncedValue,
    response,
    error,
    errorMsg,
    loading,
    responseOkay,
  }
}
