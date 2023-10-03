import styled from '@emotion/styled'
import ReactTextareaAutosize from 'react-textarea-autosize'

export const UploadTextareaContainer = styled.div<{ hasFocus: boolean; value: string }>`
  position: relative;
  width: 100%;
  height: 154px;
  margin-bottom: 16px;
  border-radius: 12px;
  background-color: ${({ theme }) => theme.colors.background.normal};
  display: flex;
  box-shadow: ${(props) => (props.value || props.hasFocus) && '1px 1px 2px 0px #00000026 inset'};
`

export const UploadTextArea = styled.textarea`
  width: 100%;
  height: 100%;
  display: flex;
  resize: none;
  border: none;
  border-radius: 12px;
  background-color: transparent;
  vertical-align: middle;
  text-align: center;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
    box-shadow: 1px 1px 2px 0px #00000026 inset;
  }
`

export const UploadTextareaPlaceholderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  p {
    margin-top: 8px;
    color: ${({ theme }) => theme.colors.text.alternative};
  }
`

export const CustomTextarea = styled(ReactTextareaAutosize)`
  width: 100%;
  max-height: 122px;
  padding: 0 16px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: transparent;
  border: none;
  resize: none;
  text-align: center;
  z-index: 10;
  &:focus {
    outline: none;

    & ~ div {
      display: none;
    }
  }
`
