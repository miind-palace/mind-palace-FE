import YouTubePlayerButton from '../button/YouTubePlayerButton'
import { useRef, useState } from 'react'
import styled from '@emotion/styled'

import { CameraIcon, TrashIcon, XMarkIcon } from '../Icons'
import downloadILmage from '@/lib/utils/downloadImage'
import { useRouter } from 'next/router'
import Image from 'next/image'
import usePickImageColor from '@/hooks/usePickImageColor'
import CubeLoader from '../CubeLoader'

interface MemoryProps {
  backgroundImage: string
  videoId?: string
  createdAt: string
  text: string
  onClickCloseModal: () => void
  onClickRemoveMemory: () => void
}

const MemoryDetail = ({
  backgroundImage,
  videoId,
  text,
  createdAt,
  onClickCloseModal,
  onClickRemoveMemory,
}: MemoryProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const downloadImageRef = useRef<HTMLDivElement>(null)
  const [isDownloadImageLoading, setIsDownloadImageLoading] = useState(false)

  const handleCapture = async () => {
    if (isImageLoaded) {
      setIsDownloadImageLoading(true)
      await downloadILmage(downloadImageRef)
      setIsDownloadImageLoading(false)
    } else {
      window.alert('이미지가 로드되지 않았습니다.')
    }
  }
  const router = useRouter()

  const handleRemoveMemory = () => {
    if (window.confirm('추억을 삭제하시겠습니까?')) {
      onClickRemoveMemory()
      onClickCloseModal()
      router.reload()
    } else {
      onClickCloseModal()
    }
  }
  const pickColor = usePickImageColor(backgroundImage)

  return (
    <Container pickColor={pickColor}>
      <Header>
        <RemoveMemoryButton onClick={handleRemoveMemory}>
          <TrashIcon width={18} height={20} />
        </RemoveMemoryButton>
        <DateSpan>{createdAt}</DateSpan>
        <BackButton onClick={onClickCloseModal}>
          <XMarkIcon width={18} />
        </BackButton>
      </Header>

      <Main ref={downloadImageRef}>
        <ImageWrapper>
          <Image
            alt={text}
            src={backgroundImage}
            fill
            sizes="100vw"
            style={{
              objectFit: 'contain',
            }}
            onLoadingComplete={() => setIsImageLoaded(true)}
          />
        </ImageWrapper>
        <Text>{text}</Text>
      </Main>
      <DownloadButton onClick={handleCapture} disabled={!isImageLoaded}>
        <CameraIcon fill={isImageLoaded ? 'black' : 'LightGray'} width={50} />
      </DownloadButton>
      {!!videoId && (
        <PlayerButton>
          <YouTubePlayerButton videoId={videoId} isAutoPlay={true} />
        </PlayerButton>
      )}
      {isDownloadImageLoading && (
        <ImageLoaderOverlay>
          <CubeLoader />
        </ImageLoaderOverlay>
      )}
    </Container>
  )
}

export default MemoryDetail
const Button = styled.button`
  all: unset;
  cursor: pointer;
`

const Container = styled.div<{ pickColor: string }>`
  display: flex;
  flex-direction: column;
  justify-contents: space-around;
  padding: 20px 15px;
  position: relative;
  background: linear-gradient(${(props) => props.pickColor}, rgba(255, 255, 255, 0.9));
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  width: 100%;
  height: calc(100%);
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 20px;
  margin-bottom: 20px;
  height: 9%;
`

const PlayerButton = styled.div`
  position: absolute;
  z-index: 11;
  right: 12%;
  top: 18%;
`
const BackButton = styled(Button)``

const DownloadButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin: 20px;
  bottom: 32px;
`

const RemoveMemoryButton = styled(Button)``

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 100%;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  object-fit: contain;
`

const DateSpan = styled.span`
  font-family: 'Inter';
  font-size: 30px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.025em;
  text-align: left;
`
const Main = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding: 20px 15px 40px 25px;
`

const Text = styled.p`
  font-family: 'Yoonwoo';
  font-size: 30px;
  transform: rotate(0.98turn);
  max-width: 400px;
  margin-top: 20px;
`

const ImageLoaderOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`
