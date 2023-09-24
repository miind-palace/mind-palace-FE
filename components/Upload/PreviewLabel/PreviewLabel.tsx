import { ImageIcon } from '@/components/Icons'
import { PreviewLabelContainer, PreviewLabelText } from './PreviewLabel.style'

interface PreviewLabelProps {
  previewImageUrl: string
}

const PreviewLabel = ({ previewImageUrl }: PreviewLabelProps) => {
  return (
    <PreviewLabelContainer htmlFor="bgImage" previewUrl={previewImageUrl}>
      {!previewImageUrl && <ImageIcon />}
      {!previewImageUrl && (
        <PreviewLabelText className="preview__placeholder">그날의 장면을 기록하세요</PreviewLabelText>
      )}
    </PreviewLabelContainer>
  )
}

export default PreviewLabel
