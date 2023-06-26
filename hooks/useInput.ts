import { UploadFormProps } from '@/lib/types/uploadFormProps'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const useInput = () => {
  const { register, handleSubmit } = useForm<UploadFormProps>()
  const [youtubeUrl, setYoutubeUrl] = useState<string>('')

  console.log(youtubeUrl)

  const onChangeText = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('text 변하는중')
    //...
  }

  const onChangeYoutubeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.target.value)
  }

  const onValid: SubmitHandler<UploadFormProps> = (data) => {
    console.log(data)
  }

  return {
    onChangeYoutubeUrl,
    onChangeText,
    handleSubmit,
    onValid,
    register,
    youtubeUrl,
  }
}

export default useInput
