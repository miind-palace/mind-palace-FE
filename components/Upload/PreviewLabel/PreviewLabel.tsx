import { ImageIcon } from '@/components/Icons'
import { PreviewLabelContainer, PreviewLabelText } from './PreviewLabel.style'
import { ChangeEvent } from 'react'

interface PreviewLabelProps {
  previewImageUrl: string
  onChangeBackgroundImage: (e: ChangeEvent<HTMLInputElement>) => void
}

const PreviewLabel = ({ previewImageUrl, onChangeBackgroundImage }: PreviewLabelProps) => {
  return (
    <PreviewLabelContainer htmlFor="bgImage" previewUrl={previewImageUrl}>
      {!previewImageUrl && <ImageIcon />}
      {!previewImageUrl && (
        <PreviewLabelText className="preview__placeholder">그날의 장면을 기록하세요</PreviewLabelText>
      )}
      <input
        id="bgImage"
        type="file"
        accept="image/*"
        className="form__bgImage--input"
        onChange={onChangeBackgroundImage}
      />
    </PreviewLabelContainer>
  )
}

export default PreviewLabel
