import YouTubePlayer from './YouTubePlayer'
import downloadILmage from '@/lib/utils/downloadImage'
import { useRef, useState } from 'react'
import Image from 'next/image'

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
  return (
    <>
      <h1>Memory Detail Page</h1>
      <span>{createdAt}</span>
      <button onClick={handleRemoveMemory}>추억삭제하기</button>
      <div ref={downloadImageRef} id={downloadImageId}>
        <Image width={300} height={400} src={'/downloadTest.png'} alt={'test'} onLoad={handleImageLoad} />
        <p>{text}</p>
      </div>
      <button onClick={handleCapture} disabled={!isImageLoad}>
        추억내려받기
      </button>
      <button onClick={onClickCloseModal}>닫기</button>
      <YouTubePlayer videoId={videoId} isAutoPlay={true} />
    </>
  )
}

export default MemoryDetail
