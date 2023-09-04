import React, { useState, useEffect } from 'react'
import { useDebounce } from './useDebounce'
import useFetch from './useFetch'

export const UseCountryInfo = () => {
  const [state, setState] = useState({
    response: [],
    error: false,
    errorMsg: '',
    loading: true,
    userInputTxt: '',
  })

  const debouncedValue = useDebounce(state.userInputTxt, 500)
  const { response, error, errorMsg, loading } = useFetch(debouncedValue)

  const getUserInputTxt = (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        userInputTxt: e.target.value,
      }
    })
  }

  const responseOkay = (state) => {
    return <>{state.userInputTxt && state.userInputTxt.length > 0}</>
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
