import { ImageIcon } from '@/components/Icons'
import { UploadImageFieldContainer, UploadImagePlaceholder } from './UploadImageField.style'
import { ChangeEvent } from 'react'

interface PreviewLabelProps {
  previewImageUrl: string
  onChangePreviewImage: (e: ChangeEvent<HTMLInputElement>) => void
}

const UploadImageField = ({ previewImageUrl, onChangePreviewImage }: PreviewLabelProps) => {
  return (
    <UploadImageFieldContainer htmlFor="bgImage" previewUrl={previewImageUrl}>
      {!previewImageUrl && <ImageIcon />}
      {!previewImageUrl && <UploadImagePlaceholder>그날의 장면을 기록하세요</UploadImagePlaceholder>}
      <input id="bgImage" type="file" accept="image/*" onChange={onChangePreviewImage} />
    </UploadImageFieldContainer>
  )
}

export default UploadImageField
