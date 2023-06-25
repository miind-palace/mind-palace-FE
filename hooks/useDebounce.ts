import { useEffect, useState } from 'react'

export const useDebounce = (value: string) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedValue(value)
    }, 1500)

    return () => {
      clearTimeout(timer)
    }
  }, [value])

  return debouncedValue
}
