import YouTubePlayer from '../button/YouTubePlayerButton'
import { useRef, useState } from 'react'
import styled from '@emotion/styled'

import { CameraIcon, TrashIcon, XMarkIcon } from '../Icons'
import downloadILmage from '@/lib/utils/downloadImage'
import usePickImageColor from '@/lib/hooks/usePickImageColor'
import { useRouter } from 'next/router'
import Image from 'next/image'

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
  const downloadImageId = 'download-image'
  const handleCapture = async () => {
    if (isImageLoaded && downloadImageRef.current) {
      downloadILmage(downloadImageRef.current)
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
        <Date>{createdAt}</Date>
        <BackButton onClick={onClickCloseModal}>
          <XMarkIcon width={18} />
        </BackButton>
      </Header>
      <Main ref={downloadImageRef} id={downloadImageId}>
        <ImageWrapper>
          <Image
            alt={text}
            src={backgroundImage}
            fill={true}
            style={{
              objectFit: 'contain',
            }}
            onLoad={() => setIsImageLoaded(true)}
          />
        </ImageWrapper>
        <Text>{text}</Text>
      </Main>
      <DownloadButton onClick={handleCapture} disabled={!isImageLoaded}>
        <CameraIcon fill={isImageLoaded ? 'black' : 'LightGray'} width={50} />
      </DownloadButton>
      {!!videoId && (
        <PlayerButton>
          <YouTubePlayer videoId={videoId} isAutoPlay={true} />
        </PlayerButton>
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
  padding: 20px 15px;
  position: relative;
  background: linear-gradient(${(props) => props.pickColor}, white);

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  min-height: 663px;
  min-width: 400px;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px 20px;
  margin-bottom: 20px;
`

const PlayerButton = styled.div`
  position: absolute;
  right: 45px;
  top: 110px;
`
const BackButton = styled(Button)``

const DownloadButton = styled(Button)`
  display: flex;
  justify-content: center;
  margin: 20px;
`

const RemoveMemoryButton = styled(Button)``

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  height: 435px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  object-fit: contain;
`
// const MemoryImage = styled.div<{ src: string }>`
//   background-image: url(${(props) => props.src});
//   width: 100%;
//   min-width: 307px;
//   height: 435px;
//   background-size: contain;
//   background-position: center center;
//   background-repeat: no-repeat;
// `

const Date = styled.span`
  font-family: 'Inter';
  font-size: 30px;
  font-weight: 800;
  line-height: 24px;
  letter-spacing: -0.025em;
  text-align: left;
`
const Main = styled.div`
  display: flex;
  max-width: 500px;
  min-height: 553px;
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
