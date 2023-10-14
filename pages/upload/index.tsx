import { useChangePreviewImage } from '@/hooks/useChangePreviewImage'
import useInput from '@/hooks/useInput'
import styled from '@emotion/styled'
import { ChangeEvent, FormEvent, useEffect, useState } from 'react'
import KeywordInput from '@/components/Upload/KeywordInput/KeywordInput'
import UploadImageField from '@/components/Upload/PreviewLabel/UploadImageField'
import SuggestionImageList from '@/components/Upload/SuggestionImageList/SuggestionImageList'
import UploadTextarea from '@/components/Upload/UploadTextarea/UploadTextarea'

import useCreateMemoryPost from '@/hooks/useCreateMemoryPost'
import useCreateSuggestionImage from '@/hooks/useCreateSuggestionImage'
import makeYouTubeVideoId from '@/lib/utils/makeYouTubeVideoId'
import LargeButton from '@/components/common/Button/LargeButton'
import UploadYouTubePlayer from '@/components/Upload/UploadYouTubePlayer/UploadYouTubePlayer'

export default function Upload() {
  const [textAreaValue, setTextareaValue] = useState('')
  const [youtubeUrl, , onChangeYoutubeUrl] = useInput('')
  const { previewImageUrl, setPreviewImageUrl, onChangePreviewImage, onClickSuggestionImage, setImgFile, imgFile } =
    useChangePreviewImage()
  const { onChangeKeywordHandler, onClickKeywordButtonHandler, convertedKeyword, images, hasError, isLoading } =
    useCreateSuggestionImage()
  const { createMemoryMutation } = useCreateMemoryPost()

  const onSubmitUploadHandler = async (e: FormEvent) => {
    e.preventDefault()

    const isRequiredValue = imgFile && convertedKeyword
    const formData = new FormData()

    if (!isRequiredValue) return alert('키워드와 이미지를 입력 해주세요.')

    formData.append('file', imgFile)
    formData.append('keyword', convertedKeyword)
    formData.append('text', textAreaValue)
    formData.append('videoId', makeYouTubeVideoId(youtubeUrl) || '')
    formData.append('memberId', '14')

    createMemoryMutation.mutate(formData)
  }

  const onChangeTextareaHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTextareaValue(e.target.value)
  }

  useEffect(() => {
    if (images[0] && !previewImageUrl) {
      setImgFile(images[0][0])
      setPreviewImageUrl(images[0][1])
    }
  }, [images, previewImageUrl, setImgFile, setPreviewImageUrl])

  return (
    <Container>
      <FormWrapper onSubmit={onSubmitUploadHandler}>
        <KeywordInput
          value={convertedKeyword}
          hasError={hasError}
          onChange={onChangeKeywordHandler}
          onClickButton={onClickKeywordButtonHandler}
          placeholder="그날의 키워드를 입력하세요"
        />
        <SuggestionImageList images={images} isLoading={isLoading} onClickSuggestionImage={onClickSuggestionImage} />
        <UploadImageField previewImageUrl={previewImageUrl} onChangePreviewImage={onChangePreviewImage} />
        <UploadTextarea value={textAreaValue} onChange={onChangeTextareaHandler} />
        <UploadYouTubePlayer youtubeUrl={youtubeUrl} onChangeYoutubeUrl={onChangeYoutubeUrl} />
        <LargeButton type="submit">추억을 보관하세요</LargeButton>
      </FormWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 25px 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;
`

const FormWrapper = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;

  > button {
    margin: 32px 0 26px 0;
  }
`
