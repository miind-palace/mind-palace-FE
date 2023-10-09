import { LinkIcon } from '@/components/Icons'
import YouTubePlayerButton from '@/components/common/Button/YouTubePlayerButton'
import makeYouTubeVideoId from '@/lib/utils/makeYouTubeVideoId'
import { ChangeEvent, useRef, useState } from 'react'
import { UploadYouTubePlaceholderWrapper, UploadYouTubePlayerContainer } from './UploadYouTubePlayer.style'

interface UploadYoutubePlayerProps {
  youtubeUrl: string
  onChangeYoutubeUrl: (e: ChangeEvent<HTMLInputElement>) => void
}

const UploadYouTubePlayer = ({ youtubeUrl, onChangeYoutubeUrl }: UploadYoutubePlayerProps) => {
  const [hasFocus, setHasFocus] = useState(false)
  const inputRef = useRef<HTMLInputElement | null>(null)

  const onFocusTextareaHandler = () => {
    setHasFocus(true)
  }

  const onBlurTextareaHandler = () => {
    setHasFocus(false)
  }

  return (
    <UploadYouTubePlayerContainer value={youtubeUrl} hasFocus={hasFocus}>
      {!youtubeUrl && !hasFocus && (
        <UploadYouTubePlaceholderWrapper onClick={() => inputRef.current?.focus()}>
          <LinkIcon />
          <span>그날의 소리를 기록하세요</span>
        </UploadYouTubePlaceholderWrapper>
      )}
      <input
        type="text"
        className="form__youtubeUrl--input"
        value={youtubeUrl}
        onChange={onChangeYoutubeUrl}
        onBlur={onBlurTextareaHandler}
        onFocus={onFocusTextareaHandler}
        ref={inputRef}
      />
      {(youtubeUrl || hasFocus) && (
        <YouTubePlayerButton videoId={makeYouTubeVideoId(youtubeUrl) || ''} isAutoPlay={false} color="#171717" />
      )}
    </UploadYouTubePlayerContainer>
  )
}

export default UploadYouTubePlayer
