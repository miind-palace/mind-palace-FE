import axios from 'axios'
import { useMutation } from 'react-query'

const createMemoryPost = async (formData: FormData) => {
  const response = await axios.post('/post/save', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  })

  return response.data
}

const useCreateMemoryPost = () => {
  const createMemoryMutation = useMutation(createMemoryPost, {
    onSuccess(resData) {
      alert(resData)
    },
    onError(error) {
      console.log(error)
    },
  })

  return { createMemoryMutation }
}

export default useCreateMemoryPost
