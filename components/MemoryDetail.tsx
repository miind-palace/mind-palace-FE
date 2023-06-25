import YouTubePlayer from './YouTubePlayer'
import downloadILmage from '@/lib/utils/downloadImage'
import { useRef, useState } from 'react'
import { CameraIcon, TrashIcon, XMarkIcon } from './Icons'
import styled from '@emotion/styled'
import usePickImageColor from '@/lib/hooks/usePickImageColor'

interface MemoryProps {
  backgroundImage: string
  videoId: string
  createdAt: string
  text: string
  onClickCloseModal: () => void
}

const MemoryDetail = ({ backgroundImage, videoId, text, createdAt, onClickCloseModal }: MemoryProps) => {
  const [isImageLoad, setIsImageLoad] = useState(false)
  const downloadImageRef = useRef<HTMLDivElement>(null)
  const downloadImageId = 'download-image'
  const handleCapture = async () => {
    if (isImageLoad && downloadImageRef.current) {
      downloadILmage(downloadImageRef.current)
    } else {
      window.alert('이미지가 로드되지 않았습니다.')
    }
  }
  const handleImageLoad = () => {
    setIsImageLoad(true)
  }
  const handleRemoveMemory = () => {
    //TODO:추억삭제하는 api연결
  }
  const pickColor = usePickImageColor(backgroundImage)

  return (
    <Container pickColor={pickColor}>
      <Header>
        <RemoveMemoryButton onClick={handleRemoveMemory}>
          <TrashIcon width={30} />
        </RemoveMemoryButton>
        <Date>{createdAt}</Date>
        <BackButton onClick={onClickCloseModal}>
          <XMarkIcon width={30} />
        </BackButton>
      </Header>
      <Main ref={downloadImageRef} id={downloadImageId}>
        <ImageWrapper>
          <MemoryImage src={'/cat.jpg'} alt={'test'} onLoad={handleImageLoad} />
        </ImageWrapper>
        <Text>{text}</Text>
      </Main>
      <DownloadButton onClick={handleCapture} disabled={!isImageLoad}>
        <CameraIcon width={50} />
      </DownloadButton>
      <PlayerButton>
        <YouTubePlayer videoId={videoId} isAutoPlay={true} />
      </PlayerButton>
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
  opacity: 0.9

  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 20px;
  min-height: 663px;
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
  top: 105px;
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
  height: 100%;
  border-radius: 5px;
  min-height: 435px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.1);
`

const MemoryImage = styled.img`
  width: 100%;
  height: 100%;
  max-height: 435px;
  object-fit: contain;
`

const Date = styled.span`
  font-size: 30px;
`
const Main = styled.div`
  display: flex;
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
