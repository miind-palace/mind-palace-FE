import { useState } from 'react'
import { ImagesTypes } from './useCreateSuggestionImage'

export const useChangePreviewImage = () => {
  const [imgFile, setImgFile] = useState<File | null>()
  const [previewImageUrl, setPreviewImageUrl] = useState('')

  const onChangeBackgroundImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      // 이전 생성한 프리뷰 URL 제거 (메모리 확보)
      if (imgFile) {
        URL.revokeObjectURL(previewImageUrl)
      }

      const file = event.target.files[0]

      setImgFile(file)
      setPreviewImageUrl(URL.createObjectURL(file))
    }
  }

  const onClickSuggestionImage = ([file, imageUrl]: ImagesTypes) => {
    setImgFile(file)
    setPreviewImageUrl(imageUrl)
  }

  return {
    previewImageUrl,
    onChangeBackgroundImage,
    onClickSuggestionImage,
    setPreviewImageUrl,
    setImgFile,
    imgFile,
  }
}
