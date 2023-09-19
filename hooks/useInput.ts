import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'

type InputReturnTypes<T> = [T, Dispatch<SetStateAction<T>>, (e: ChangeEvent<HTMLInputElement>) => void]

const useInput = <T>(initialValue: T): InputReturnTypes<T> => {
  const [value, setValue] = useState(initialValue)

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value as T)
  }

  return [value, setValue, onChangeHandler]
}

export default useInput
