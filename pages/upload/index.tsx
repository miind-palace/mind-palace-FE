import { useState } from 'react'
import { useChangePreviewImage } from '@/hooks/useChangePreviewImage'
import useInput from '@/hooks/useInput'
import { useHorizontalScroll } from '@/hooks/useHorizontalScroll'
import { useDebounce } from '@/hooks/useDebounce'

import Link from 'next/link'
import styled from '@emotion/styled'
import { Props } from '@/lib/types/uploadPageProps'

import { Props as UploadProps } from '@/lib/types/uploadPageProps'

//useSuggestion return값 임시 대체
export const fakeGeneratedImageSrcArr = [
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
  'data:image/jpeg;base64,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',
]

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
      background-size: ${({ hasImage }) => (hasImage ? '100% 100%' : '0')};
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
      height: 190px;

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
          width: 10.3em;
          height: 10.3em;
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

        :hover {
          opacity: 0.5;
        }
      }
    }
  }
`

export default function Upload({ url }: UploadProps) {
  const { onChangeYoutubeUrl, onChangeText, handleSubmit, register, onValid, youtubeUrl } = useInput()
  const { preview, setPreview, onChangeBackgroundImage, hasImage } = useChangePreviewImage()
  const requestImageContainerRef = useHorizontalScroll()
  const debouncedValue = useDebounce(youtubeUrl)
  const [youtubePlayToggle, setYoutubePlayToggle] = useState(false)

  return (
    <FormContainer url={preview as string} hasImage={hasImage}>
      <form onSubmit={handleSubmit(onValid)} className="form__wrapper">
        {/* input Keyword */}

        <label className="form__bgImage--label" htmlFor="bgImage">
          {hasImage ? (
            ''
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M20 17.7778V2.22222C20 1 19 0 17.7778 0H2.22222C1 0 0 1 0 2.22222V17.7778C0 19 1 20 2.22222 20H17.7778C19 20 20 19 20 17.7778ZM6.11111 11.6667L8.88889 15.0111L12.7778 10L17.7778 16.6667H2.22222L6.11111 11.6667Z"
                fill="black"
                fillOpacity="0.5"
              />
            </svg>
          )}
        </label>
        <input
          id="bgImage"
          type="file"
          accept="image/*"
          className="form__bgImage--input"
          onChange={onChangeBackgroundImage}
        />

        <div ref={requestImageContainerRef} className="requestImage__group">
          {hasImage ? (
            <div className="requestImage__box">
              {fakeGeneratedImageSrcArr.map((generatedImgSrc) => (
                <img
                  key={Date.now() + Math.random()}
                  src={generatedImgSrc}
                  alt="requestImage"
                  className="requestImage__item"
                  onClick={() => setPreview(generatedImgSrc)}
                />
              ))}
            </div>
          ) : (
            <div className="requestImage__box">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((el) => (
                <img key={el} className="requestImage__item" />
              ))}
            </div>
          )}
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
            {...register('youtubeUrl')}
            type="text"
            onChange={onChangeYoutubeUrl}
            className="form__youtubeUrl--input"
            placeholder="Youtube URL"
          />

          {debouncedValue ? (
            youtubePlayToggle ? (
              <svg
                className="youtube__pause"
                //담의 플레이어와 연결
                onClick={() => setYoutubePlayToggle((prev) => !prev)}
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10C0 4.47715 4.47715 0 10 0H32C37.5228 0 42 4.47715 42 10V32C42 37.5228 37.5228 42 32 42H10C4.47715 42 0 37.5228 0 32V10Z"
                  fill="white"
                  fillOpacity="0.7"
                />
                <path d="M14 31H19.6667V11H14V31ZM25.3333 11V31H31V11H25.3333Z" fill="black" fillOpacity="0.5" />
              </svg>
            ) : (
              <svg
                className="youtube__play"
                //담의 플레이어와 연결
                onClick={() => setYoutubePlayToggle((prev) => !prev)}
                width="42"
                height="42"
                viewBox="0 0 42 42"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10C0 4.47715 4.47715 0 10 0H32C37.5228 0 42 4.47715 42 10V32C42 37.5228 37.5228 42 32 42H10C4.47715 42 0 37.5228 0 32V10Z"
                  fill="white"
                  fillOpacity="0.7"
                />
                <path d="M15.5 11V31L32.5 21L15.5 11Z" fill="black" fillOpacity="0.5" />
              </svg>
            )
          ) : (
            ''
          )}
        </div>

        <input type="submit" className="form__submit--btn" />

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
          <Link href="/memory-list" className="upload__footer--btn">
            <svg width="44" height="36" viewBox="0 0 44 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M16.8989 35.8202L43.987 1.67295L0.416795 0.474207L6.80967 14.2277L33.8882 6.38212L10.4724 22.0824L16.8989 35.8202Z"
                fill="black"
                fillOpacity="0.7"
              />
            </svg>
          </Link>
        </footer>
      </form>
    </FormContainer>
  )
}
