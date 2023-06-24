import React, { useState } from 'react'
import YouTube from 'react-youtube'

interface YouTubePlayerProps {
  videoId: string
  isAutoPlay: boolean
}

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({ videoId, isAutoPlay }) => {
  const [player, setPlayer] = useState<YT.Player | undefined>(undefined)
  const [isPlaying, setIsPlaying] = useState(true)

  const opts = {
    height: '0',
    width: '0',
    playerVars: {
      autoplay: isAutoPlay,
      start: 1,
    },
  }
  const onPlayerReady = (event: { target: YT.Player }) => {
    setPlayer(event.target)
  }

  const toggleVideoStatus = () => {
    if (isPlaying) {
      player?.pauseVideo()
      setIsPlaying(false)
    }
    if (!isPlaying) {
      player?.playVideo()
      setIsPlaying(true)
    }
  }

  return (
    <>
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} />
      <button onClick={toggleVideoStatus}>{isPlaying ? '일시정지' : '시작'}</button>
    </>
  )
}

export default YouTubePlayer
