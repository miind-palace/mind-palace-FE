import styled from '@emotion/styled'

export const UploadImageFieldContainer = styled.label<{ previewUrl: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  min-height: ${(props) => (props.previewUrl ? 'auto' : '264px')};
  margin-bottom: 16px;
  background-image: ${(props) => `url(${props.previewUrl})`};
  border-radius: 12px;
  padding: 10px 14px;
  aspect-ratio: 71 / 33;
  background-repeat: no-repeat;
  background-position: center center;
  background-color: ${({ theme }) => theme.colors.background.normal};
  background-size: ${(props) => (props.previewUrl === '/images/images-icon.svg' ? 'none' : 'cover')};
  cursor: pointer;

  > input {
    display: none;
  }
`

export const UploadImagePlaceholder = styled.span`
  margin-top: 8px;
  font-size: ${({ theme }) => theme.typography.size.text16};
  color: ${({ theme }) => theme.colors.text.alternative};
`
