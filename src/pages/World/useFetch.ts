import { useState, useEffect } from 'react'

const useFetch = (country: string) => {
  const [state, setState] = useState({
    response: [],
    error: false,
    errorMsg: '',
    loading: true,
  })

  const fetchAPI = async () => {
    if (!country) {
      setState((prevState) => {
        return {
          ...prevState,
          loading: false,
          response: [],
        }
      })
      return false
    }
    try {
      const header = await fetch(
        `https://restcountries.com/v3.1/name/${country}`,
      )
      if (!header?.ok) {
        throw new Error('header.status')
      }
      const response = await header.json()
      setState((prevState) => {
        return {
          ...prevState,
          response,
          loading: false,
        }
      })
    } catch ({ name, message }:any) {
      setState((prevState:any) => {
        return {
          ...prevState,
          response: [],
          error: true,
          errorMsg: message,
          loading: false,
        }
      })
    }
  }

  useEffect(() => {
    fetchAPI()
    return () => {
      setState((prevState) => {
        return {
          ...prevState,
          response: [],
          error: false,
          errorMsg: '',
          loading: false,
        }
      })
    }
  }, [country])

  return {
    fetchAPI,
    response: state.response,
    loading: state.loading,
    error: state.error,
    errorMsg: state.errorMsg,
  }
}

export default useFetch
