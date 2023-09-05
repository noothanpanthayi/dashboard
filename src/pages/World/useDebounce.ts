import { useState, useEffect } from 'react'

export const useDebounce = (inputValue:string, delay = 600) => {
  const [debouncedValue, setDebouncedValue] = useState(inputValue)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(inputValue)
    }, delay)

    return () => {
      clearTimeout(timer);
      setDebouncedValue('');
    }
  }, [inputValue, delay]);

  return debouncedValue;
}
