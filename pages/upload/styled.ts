import { Props } from '@/lib/types/uploadPageProps'
import styled from '@emotion/styled'

export const FormContainer = styled.div<Props>`
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
      background-color: gray;
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
          background-color: gray;
        }
      }
    }

    .form__text--input {
      width: 100%;
      height: 160px;

      background-color: gray;
      border-radius: 1em;
      position: relative;
      text-align: center;

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

        background-color: gray;
        border-radius: 1em;
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
      background-color: gray;
      border-radius: 1em;
      color: white;
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
