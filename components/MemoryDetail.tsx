interface MemoryProps {
  backgroundImage: string
  youtubeUrl: string
  text: string
}

const MemoryDetail = ({ backgroundImage, youtubeUrl, text }: MemoryProps) => {
  return (
    <>
      <h1>Memory Detail Page</h1>
      <p>{text}</p>
    </>
  )
}

export default MemoryDetail
