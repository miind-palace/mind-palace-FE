import { fakeGeneratedImageSrcArr } from '@/pages/upload'
import { useState, useEffect } from 'react'

export const useChangePreviewImage = () => {
  const [imgFile, setImgFile] = useState<File | null>()
  const [preview, setPreview] = useState<string | null>('')
  const [hasImage, setHasImage] = useState(false)
  const backgroundImageSrc = fakeGeneratedImageSrcArr[0]

  const onChangeBackgroundImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files !== null) {
      const file = event.target.files[0]
      if (file && file.type.substring(0, 5) === 'image') {
        setImgFile(file)
        setHasImage(true)
      } else {
        setImgFile(null)
        setHasImage(false)
      }
    }
  }

  useEffect(() => {
    if (imgFile) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPreview(reader.result as string)
      }
      reader.readAsDataURL(imgFile)
    } else {
      setPreview(backgroundImageSrc)
    }
  }, [imgFile, backgroundImageSrc])

  return {
    preview,
    onChangeBackgroundImage,
    setPreview,
    setHasImage,
    hasImage,
  }
}
