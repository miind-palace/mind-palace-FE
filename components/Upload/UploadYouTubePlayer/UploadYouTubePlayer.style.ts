import styled from '@emotion/styled'

export const UploadYouTubePlayerContainer = styled.div<{ hasFocus: boolean; value: string }>`
  width: 100%;
  height: 54px;
  position: relative;
  display: flex;
  justify-content: center;
  gap: 16px;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.background.normal};
  box-shadow: ${(props) => (props.value || props.hasFocus) && '1px 1px 2px 0px #00000026 inset'};

  > button {
    /* position: absolute;
    top: 14px;
    right: 14px;
    z-index: 10; */
  }

  .form__youtubeUrl--input {
    width: 230px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    border: none;
    position: relative;
    background-color: transparent;
    border-radius: 10px;
    font-size: ${({ theme }) => theme.typography.size.text16};
    color: ${({ theme }) => theme.colors.text.medium};

    &:focus {
      outline: none;
    }
  }
`

export const UploadYouTubePlaceholderWrapper = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 16px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  color: ${({ theme }) => theme.colors.text.alternative};
`
