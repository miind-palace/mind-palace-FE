import YouTubePlayer from './YouTubePlayer'

interface MemoryProps {
  backgroundImage: string
  videoId: string
  createdAt: string
  text: string
}

const MemoryDetail = ({ backgroundImage, videoId, text, createdAt }: MemoryProps) => {
  return (
    <>
      <h1>Memory Detail Page</h1>
      <p>{createdAt}</p>
      <p>{text}</p>
      <YouTubePlayer videoId={videoId} isAutoPlay={true} />
    </>
  )
}

export default MemoryDetail
