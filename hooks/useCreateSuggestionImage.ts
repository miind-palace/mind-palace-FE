import axios from 'axios'
import { ChangeEvent, useState } from 'react'
import { useMutation } from 'react-query'

export type ImagesTypes = [File, string]

const createSuggestionImage = async (keyword: string) => {
  const response = await axios.post('api/suggestion-image', { keyword })

  return response.data
}

const useCreateSuggestionImage = () => {
  const [convertedKeyword, setConvertedKeyword] = useState<string>('')
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [images, setImages] = useState<ImagesTypes[]>([])
  const [isSendKeyword, setIsSendKeyword] = useState<boolean>(false)

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

      setIsError(false)
      setImages(imageUrls)
    },
    onError(error: any) {
      setIsError(true)
      setErrorMessage('키워드 생성에 실패했습니다!')

      console.log(error)
    },
  })

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConvertedKeyword(e.target.value)
  }

  const onSubmitHandler = () => {
    if (0 >= convertedKeyword.trim().length) return alert('키워드를 입력해주세요!')

    createSuggestionImageMutation.mutate(convertedKeyword.trim())
    setIsSendKeyword(true)
  }

  return {
    onChangeHandler,
    onSubmitHandler,
    convertedKeyword,
    images,
    isError,
    errorMessage,
    isSendKeyword,
  }
}

export default useCreateSuggestionImage
