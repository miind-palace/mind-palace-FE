import { PencelIcon } from '@/components/Icons'
import { ChangeEvent, useRef, useState } from 'react'
import { CustomTextarea, UploadTextareaContainer, UploadTextareaPlaceholderWrapper } from './UploadTextarea.style'

interface UploadTextareaProps {
  value: string
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
}

const UploadTextarea = ({ value, onChange }: UploadTextareaProps) => {
  const [hasFocus, setHasFocus] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement | null>(null)

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
        ref={textareaRef}
      />
      {!value && !hasFocus && (
        <UploadTextareaPlaceholderWrapper onClick={() => textareaRef.current?.focus()}>
          <PencelIcon />
          <p>그날의 느낌을 기록하세요</p>
        </UploadTextareaPlaceholderWrapper>
      )}
    </UploadTextareaContainer>
  )
}

export default UploadTextarea
