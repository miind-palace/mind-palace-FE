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
  const [hasError, setHasError] = useState(false)
  const [images, setImages] = useState<ImagesTypes[]>([])

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
      setHasError(false)
      setImages(imageUrls)
    },
    onError(error: any) {
      console.log(error)
      setHasError(true)
    },
  })

  const onChangeKeywordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setConvertedKeyword(e.target.value)
    setHasError(false)
  }

  const onClickKeywordButtonHandler = () => {
    if (0 >= convertedKeyword.trim().length) return alert('키워드를 입력해주세요!')

    createSuggestionImageMutation.mutate(convertedKeyword.trim())
  }

  return {
    onChangeKeywordHandler,
    onClickKeywordButtonHandler,
    convertedKeyword,
    hasError,
    isLoading: createSuggestionImageMutation.isLoading,
    images,
  }
}

export default useCreateSuggestionImage
