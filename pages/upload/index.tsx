import { useState } from 'react'
import { useChangePreviewImage } from '@/hooks/useChangePreviewImage'
import useInput from '@/hooks/useInput'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { useDebounce } from '@/hooks/useDebounce'

import Link from 'next/link'
import styled from '@emotion/styled'
import { Props } from '@/lib/types/uploadPageProps'

import { Props as UploadProps } from '@/lib/types/uploadPageProps'

import makeYouTubeVideoId from '@/lib/utils/makeYouTubeVideoId'
import KeywordFiled from '@/components/KeywordFiled'
import useCreateSuggestionImage from '@/lib/hooks/useCreateSuggestionImage'
import axios from 'axios'
import YouTubePlayer from '@/components/button/YouTubePlayerButton'
import { SubmitHandler } from 'react-hook-form'
import { UploadFormProps } from '@/lib/types/uploadFormProps'
import Image from 'next/image'

const FormContainer = styled.div<Props>`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .form__wrapper {
    width: 550px;
    height: 90%;
    padding: 1em;
    border: 1px solid black;
    border-radius: 1em;

    display: flex;
    flex-direction: column;
    gap: 1em;

    cursor: pointer;

    .form__bgImage--label {
      width: 100%;
      height: 20vh;

      background: no-repeat url(${({ url }) => url});
      background-size: 100% 100%;
      background-color: #d9d9d9;
      border-radius: 1em;

      display: flex;
      justify-content: center;
      align-items: center;

      font-size: 1.2em;
      color: white;
    }

    .form__bgImage--input {
      display: none;
    }

    .requestImage__group {
      height: 170px;

      overflow-x: scroll;
      scroll-behavior: smooth;
      overflow: hidden;
      white-space: nowrap;

      /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
      ::-webkit-scrollbar {
        display: none;
      }
      -ms-overflow-style: none; /* 인터넷 익스플로러 */
      scrollbar-width: none; /* 파이어폭스 */

      .requestImage__box {
        gap: 8px;
        position: relative;

        .requestImage__item {
          border-radius: 1em;
          width: 9.5em;
          height: 9.5em;
          margin: 10px;
          background-color: #d9d9d9;
        }
      }
    }

    .form__text--input {
      width: 100%;
      height: 160px;

      background-color: #d9d9d9;
      border-radius: 1em;
      position: relative;
      text-align: center;
      border: none;

      ::placeholder {
        color: white;
        text-align: center;
        position: absolute;
        top: 15px;
        left: 15px;
      }
    }

    .youtube__box {
      width: 100%;
      position: relative;

      .form__youtubeUrl--input {
        width: 100%;
        height: 100px;

        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;

        background-color: #d9d9d9;
        border-radius: 1em;
        border: none;
        position: relative;

        ::placeholder {
          color: white;
          text-align: center;
          position: absolute;
          top: 15px;
          left: 15px;
        }
      }

      .youtube__play,
      .youtube__pause {
        position: absolute;
        right: 0.8em;
        bottom: 1.8em;
      }
    }

    .form__submit--btn {
      height: 50px;
      background-color: #d9d9d9;
      border-radius: 1em;
      color: white;
      border: none;
    }

    .upload__footer {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .upload__footer--btn {
        margin: 10px 20px;
        background: none;
        border: none;

        :hover {
          opacity: 0.5;
        }
      }
    }
  }
`

export default function Upload({ url }: UploadProps) {
  const { onChangeYoutubeUrl, onChangeText, handleSubmit, register, youtubeUrl } = useInput()
  const { preview, setPreview, onChangeBackgroundImage, hasImage, setImgFile, imgFile } = useChangePreviewImage()
  const requestImageContainerRef = useHorizontalScroll()
  const debouncedValue = useDebounce(youtubeUrl)
  const [youtubePlayToggle, setYoutubePlayToggle] = useState(false)
  const { onChangeHandler, onSubmitHandler, convertedKeyword, images, isError, errorMessage } =
    useCreateSuggestionImage()

  const [changeBg, setChangeBg] = useState(true)
  // const memberId = localStorage.getItem('memberId')

  const postFormDataToApi = async () => {
    const formData = new FormData()
    const memberId = await axios.post(
      'http://mind-palace-server-env.eba-mnzkhpyr.us-east-1.elasticbeanstalk.com/member/login'
    )

    formData.append('videoId', debouncedValue)
  }

  const onValid: SubmitHandler<UploadFormProps> = async (data) => {
    const formData = new FormData()
    // if(images)
    if (imgFile && convertedKeyword && data.text && data.videoId) {
      formData.append('file', imgFile)
      formData.append('keyword', convertedKeyword)
      formData.append('text', data.text)
      formData.append('videoId', makeYouTubeVideoId(data.videoId) || '')
      formData.append('memberId', '14')
    }

    try {
      const response = await axios.post('/post/save', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      console.log(response)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <FormContainer url={preview as string} hasImage={hasImage}>
      <form onSubmit={handleSubmit(onValid)} className="form__wrapper">
        <KeywordFiled onChange={onChangeHandler} onSubmit={onSubmitHandler} keywordValue={convertedKeyword} />

        <label className="form__bgImage--label" htmlFor="bgImage">
          {images && changeBg && <img className="form__bgImage--label" src={images[0]?.[1] as string} />}
        </label>
        <input
          id="bgImage"
          type="file"
          accept="image/*"
          className="form__bgImage--input"
          onChange={onChangeBackgroundImage}
        />

        <div ref={requestImageContainerRef} className="requestImage__group">
          <div className="requestImage__box">
            {images &&
              images.map((el) => (
                <Image
                  key={el?.[1] as string}
                  src={el?.[1] as string}
                  alt="추천이미지 아이템"
                  className="requestImage__item"
                  width={300}
                  height={300}
                  onClick={() => {
                    setPreview(el?.[1] as string)
                    setChangeBg(false)
                    setImgFile(el?.[0] as File)
                  }}
                />
              ))}
          </div>
          <div className="requestImage__box">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => (
              <img key={el} className="requestImage__item" />
            ))}
          </div>
        </div>

        <input
          //TODO: maxLength 기준 적용
          {...register('text')}
          type="textarea"
          onChange={onChangeText}
          placeholder="Text Area"
          className="form__text--input"
        />

        <div className="youtube__box">
          <input
            {...register('videoId')}
            type="text"
            onChange={onChangeYoutubeUrl}
            className="form__youtubeUrl--input"
            placeholder="Youtube URL"
          />

          {debouncedValue && <YouTubePlayer videoId={makeYouTubeVideoId(debouncedValue) || ''} isAutoPlay={true} />}
        </div>

        <footer className="upload__footer">
          <Link href="/memory-list" className="upload__footer--btn">
            <svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="39" height="39" fill="white" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.875 4.875V17.875H17.875V4.875H4.875ZM14.625 14.625H8.125V8.125H14.625V14.625ZM4.875 21.125V34.125H17.875V21.125H4.875ZM14.625 30.875H8.125V24.375H14.625V30.875ZM21.125 4.875V17.875H34.125V4.875H21.125ZM30.875 14.625H24.375V8.125H30.875V14.625ZM21.125 21.125V34.125H34.125V21.125H21.125ZM30.875 30.875H24.375V24.375H30.875V30.875Z"
                fill="black"
              />
            </svg>
          </Link>
          <button className="upload__footer--btn">
            <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.8989 35.8202L43.987 1.67295L0.416795 0.474207L6.80967 14.2277L33.8882 6.38212L10.4724 22.0824L16.8989 35.8202Z"
                fill="black"
                fillOpacity="0.7"
              />
              <input type="submit" className="form__submit--btn" />
            </svg>
          </button>
        </footer>
      </form>
    </FormContainer>
  )
}
