import { useState } from 'react'
import { ImagesTypes } from './useCreateSuggestionImage'

export const useChangePreviewImage = () => {
  const [imgFile, setImgFile] = useState<File | null>()
  const [previewImageUrl, setPreviewImageUrl] = useState('')

  const onChangeBackgroundImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (previewImageUrl) {
      // 이전 생성한 프리뷰 URL 제거 (메모리 확보)
      URL.revokeObjectURL(previewImageUrl)
    }

    if (event.target.files?.length) {
      const file = event.target.files[0]
      const url = URL.createObjectURL(file)
      const image = new Image()

      image.src = url

      image.onload = () => {
        if (image.width < 568 || image.height < 264) {
          return alert('이미지는 너비 568px 이상 높이 264이상의 이미지로 넣어주세요.')
        }

        setImgFile(file)
        setPreviewImageUrl(url)
      }
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
