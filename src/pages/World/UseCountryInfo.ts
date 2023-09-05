import React, { useState } from 'react'
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

  const getUserInputTxt = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.trim().length > 0) {
      setState((prevState) => {
        return {
          ...prevState,
          userInputTxt: e.target.value,
        }
      })
    }
  }

  type ResponseType = {
    response: Array<string>
    error: boolean
    errorMsg: string
    loading: boolean
    userInputTxt: string
  }

  function responseOkay(state: ResponseType) {
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
