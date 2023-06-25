import React, { useState } from 'react'
import YouTube from 'react-youtube'
import { PauseIcon, PlayIcon } from './Icons'
import styled from '@emotion/styled'

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
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} style={{ display: 'none' }} />
      <Button onClick={toggleVideoStatus}>{isPlaying ? <PauseIcon width={30} /> : <PlayIcon width={30} />}</Button>
    </>
  )
}

export default YouTubePlayer

const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: white;
  border-radius: 50%;
  padding: 8px;
  opacity: 0.7;
`
