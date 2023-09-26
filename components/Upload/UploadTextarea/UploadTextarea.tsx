import { PencelIcon } from '@/components/Icons'
import { ChangeEvent, useState } from 'react'
import { CustomTextarea, UploadTextareaContainer, UploadTextareaPlaceholderWrapper } from './UploadTextarea.style'

interface UploadTextareaProps {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const UploadTextarea = ({ value, onChange }: UploadTextareaProps) => {
  const [hasFocus, setHasFocus] = useState(false)

  const onFocusTextareaHandler = () => {
    setHasFocus(true)
  }

  const onBlurTextareaHandler = () => {
    setHasFocus(false)
  }

  return (
    <UploadTextareaContainer value={value} hasFocus={hasFocus}>
      <CustomTextarea
        onChange={onChange}
        value={value}
        onBlur={onBlurTextareaHandler}
        onFocus={onFocusTextareaHandler}
      />
      {!value && !hasFocus && (
        <UploadTextareaPlaceholderWrapper>
          <PencelIcon />
          <p>그날의 느낌을 기록하세요</p>
        </UploadTextareaPlaceholderWrapper>
      )}
    </UploadTextareaContainer>
  )
}

export default UploadTextarea
