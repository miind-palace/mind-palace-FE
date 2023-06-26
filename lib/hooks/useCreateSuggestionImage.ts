import axios from 'axios'
import { ChangeEvent, FormEvent, useState } from 'react'
import { useMutation } from 'react-query'

const createSuggestionImage = async (keyword: string) => {
  const response = await axios.post('api/suggestion-image', { keyword })

  return response.data
}

const useCreateSuggestionImage = () => {
  const [convertedKeyword, setConvertedKeyword] = useState<string>('')
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [images, setImages] = useState<string[]>([])

  const createSuggestionImageMutation = useMutation(createSuggestionImage, {
    onSuccess(resData) {
      const imageUrls = resData.images.map((el: any) => {
        const decodedData = atob(el.image)

        const byteArray = new Uint8Array(decodedData.length)

        for (let i = 0; i < decodedData.length; i++) {
          byteArray[i] = decodedData.charCodeAt(i)
        }

        const blob = new Blob([byteArray], { type: 'image/png' })
        const file = new File([blob], 'image.png', { type: 'image/png' })

        const pngUrl = URL.createObjectURL(blob)

        return [file, pngUrl]
      })

      console.log(imageUrls)

      setIsError(false)
      setImages(imageUrls)
    },
    onError(error: any) {
      setIsError(true)
      setErrorMessage(error.response.data.message)

      console.log(error)
    },
  })

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConvertedKeyword(e.target.value)
  }

  const onSubmitHandler = () => {
    if (0 >= convertedKeyword.trim().length) return alert('키워드를 입력해주세요!')

    createSuggestionImageMutation.mutate(convertedKeyword.trim())
  }

  return {
    onChangeHandler,
    onSubmitHandler,
    convertedKeyword,
    images,
    isError,
    errorMessage,
  }
}

export default useCreateSuggestionImage
