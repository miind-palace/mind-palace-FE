import { useChangePreviewImage } from '@/hooks/useChangePreviewImage'
import useInput from '@/hooks/useInput'
import styled from '@emotion/styled'
import Link from 'next/link'
import LinkIcon from 'public/images/link-icon.svg'
import MemoryListIcon from 'public/images/memory-list-icon.svg'
import UploadIcon from 'public/images/upload-icon.svg'
import { FormEvent, useEffect } from 'react'

import KeywordFiled from '@/components/KeywordFiled'
import YouTubePlayer from '@/components/YouTubePlayer'
import useCreateMemoryPost from '@/hooks/useCreateMemoryPost'
import useCreateSuggestionImage from '@/hooks/useCreateSuggestionImage'
import useHorizontalWheel from '@/hooks/useHorizontalWheel'
import { DUMMY_SUGGESTION_IMAGE } from '@/lib/constant/constant'
import makeYouTubeVideoId from '@/lib/utils/makeYouTubeVideoId'
import Image from 'next/image'

export default function Upload() {
  const [textArea, , onChangeTextInput] = useInput('')
  const [youtubeUrl, , onChangeYoutubeUrl] = useInput('')
  const { wheelRef, onWheelHandler } = useHorizontalWheel()
  const { previewImageUrl, setPreviewImageUrl, onChangeBackgroundImage, onClickSuggestionImage, setImgFile, imgFile } =
    useChangePreviewImage()
  const { onChangeHandler, onSubmitHandler, convertedKeyword, images } = useCreateSuggestionImage()
  const { createMemoryMutation } = useCreateMemoryPost()

  const onSubmitUploadHandler = async (e: FormEvent) => {
    e.preventDefault()

    const isRequiredValue = imgFile && convertedKeyword
    const formData = new FormData()

    if (!isRequiredValue) return alert('키워드와 이미지를 입력 해주세요.')

    formData.append('file', imgFile)
    formData.append('keyword', convertedKeyword)
    formData.append('text', textArea)
    formData.append('videoId', makeYouTubeVideoId(youtubeUrl) || '')
    formData.append('memberId', '14')

    createMemoryMutation.mutate(formData)
  }

  useEffect(() => {
    if (images[0] && !previewImageUrl) {
      setImgFile(images[0][0])
      setPreviewImageUrl(images[0][1])
    }
  }, [images, previewImageUrl, setImgFile, setPreviewImageUrl])

  return (
    <Container>
      <FormWrapper onSubmit={onSubmitUploadHandler} className="form__wrapper">
        <KeywordFiled onChange={onChangeHandler} onSubmit={onSubmitHandler} keywordValue={convertedKeyword} />
        <PreviewLabel htmlFor="bgImage" previewUrl={previewImageUrl ? previewImageUrl : '/images/images-icon.svg'}>
          {!previewImageUrl && <span className="input__title">Upload Image</span>}
          {!previewImageUrl && <span className="preview__placeholder">그날의 추억을 기록하세요</span>}
        </PreviewLabel>
        <input
          id="bgImage"
          type="file"
          accept="image/*"
          className="form__bgImage--input"
          onChange={onChangeBackgroundImage}
        />
        <SuggestionImageWraaper ref={wheelRef} onWheel={onWheelHandler}>
          {images[0] ? (
            <div className="requestImage__box">
              {images.map((el) => (
                <Image
                  key={el[1]}
                  src={el[1]}
                  alt="추천이미지 아이템"
                  width={100}
                  height={100}
                  className="requestImage__item"
                  onClick={() => onClickSuggestionImage(el)}
                />
              ))}
            </div>
          ) : (
            <div className="requestImage__box">
              {DUMMY_SUGGESTION_IMAGE.map((el) => (
                <div key={el} className="requestImage__item" />
              ))}
            </div>
          )}
        </SuggestionImageWraaper>
        <TextAreaWrapper>
          <span className="input__title">Text Area</span>
          <input
            //TODO: maxLength 기준 적용
            value={textArea}
            type="textarea"
            onChange={onChangeTextInput}
            placeholder="그날의 느낌을 기록하세요"
            className="form__text--input"
          />
        </TextAreaWrapper>
        <YouTubeWrapper>
          <span className="input__title">
            Upload Sound
            <Image src={LinkIcon} alt="링크 아이콘" className="link__icon" />
          </span>
          <input
            type="text"
            className="form__youtubeUrl--input"
            placeholder="그날의 소리를 기록하세요 (Youtube 링크)"
            value={youtubeUrl}
            onChange={onChangeYoutubeUrl}
          />
          <YouTubePlayer videoId={makeYouTubeVideoId(youtubeUrl)} isAutoPlay={true} />
        </YouTubeWrapper>

        <MenuTabBarWrapper className="upload__bar">
          <Link href="/memory-list" className="bar--btn">
            <Image src={MemoryListIcon} alt="리스트 아이콘" />
          </Link>
          <button type="submit" className="bar--btn">
            <Image src={UploadIcon} alt="업로드 아이콘" />
          </button>
        </MenuTabBarWrapper>
      </FormWrapper>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  padding: 25px 35px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: auto;

  .input__title {
    position: absolute;
    color: #868686;
    top: 10px;
    left: 12px;
    font-size: 14px;
  }

  .link__icon {
    margin-left: 10px;
  }
`

const FormWrapper = styled.form`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;

  .form__bgImage--input {
    display: none;
  }
`

const TextAreaWrapper = styled.div`
  position: relative;
  background-color: rgba(217, 217, 217, 0.4);
  margin-bottom: 22px;
  border-radius: 10px;

  .form__text--input {
    width: 100%;
    height: 140px;
    background-color: transparent;
    position: relative;
    text-align: center;
    border: none;

    &::placeholder {
      color: rgba(134, 134, 134, 0.7);
      text-align: center;
      opacity: 0.7;
    }
  }
`

const YouTubeWrapper = styled.div`
  width: 100%;
  height: 70px;
  position: relative;
  margin-bottom: 12px;
  border-radius: 10px;
  background-color: rgba(217, 217, 217, 0.4);
  position: relative;

  > button {
    position: absolute;
    top: 14px;
    right: 14px;
    z-index: 10;
  }

  .form__youtubeUrl--input {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    position: relative;
    background-color: transparent;

    &::placeholder {
      color: rgba(134, 134, 134, 0.7);
      text-align: center;
      opacity: 0.7;
    }
  }

  .youtube__play,
  .youtube__pause {
    position: absolute;
    right: 0.8em;
    bottom: 1.8em;
  }
`

const SuggestionImageWraaper = styled.div`
  width: 100%;
  height: 100px;
  margin-bottom: 22px;
  overflow: auto;
  scroll-behavior: smooth;
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */

  .requestImage__box {
    width: 870px;
    height: 100%;
    display: flex;
    white-space: nowrap;
    gap: 10px;
    position: relative;
    cursor: pointer;

    .requestImage__item {
      width: 100px;
      height: 100px;
      border-radius: 15px;
      background-color: #d9d9d9;
    }
  }
`

const PreviewLabel = styled.label<{ previewUrl: string }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 275px;
  background-image: ${(props) => `url(${props.previewUrl})`};
  border-radius: 25px;
  font-size: 14px;
  padding: 10px 14px;
  margin: 23px 0px 12px;
  color: rgba(134, 134, 134, 0.7);
  background-repeat: no-repeat;
  background-position: center center;
  background-color: rgba(217, 217, 217, 0.4);
  background-size: ${(props) => (props.previewUrl === '/images/images-icon.svg' ? 'none' : 'contain')};
  cursor: pointer;

  .preview__placeholder {
    margin-top: 50px;
  }
`

const MenuTabBarWrapper = styled.article`
  width: 100%;
  margin-top: 12px;
  padding: 0 16px;
  display: flex;
  justify-content: space-between;

  .bar--btn {
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.5;
    }
  }
`
