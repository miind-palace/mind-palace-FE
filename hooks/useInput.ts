import { UploadFormProps } from '@/lib/types/uploadFormProps'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

const useInput = () => {
  const { register, handleSubmit } = useForm<UploadFormProps>()
  const [youtubeUrl, setYoutubeUrl] = useState<string>('')

  const onChangeText = (event: React.SyntheticEvent<HTMLInputElement>) => {
    console.log('text 변하는중')
    //...
  }

  const onChangeYoutubeUrl = (event: React.SyntheticEvent<HTMLInputElement>) => {
    setYoutubeUrl(event.currentTarget.value)
  }

  const onValid: SubmitHandler<UploadFormProps> = (data) => console.log(data)

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
