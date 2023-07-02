import axios from 'axios'
import { useMutation } from 'react-query'

const createMemory = async (formData: FormData) => {
  const response = await axios.post('/post/save', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

const useCreateMemory = () => {
  const createMemoryMutation = useMutation(createMemory, {
    onSuccess(resData) {
      alert(resData)
    },
    onError(error) {
      console.log(error)
    },
  })

  return { createMemoryMutation }
}

export default useCreateMemory
