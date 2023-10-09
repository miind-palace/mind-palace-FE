import React, { useState } from 'react'
import YouTube from 'react-youtube'
import styled from '@emotion/styled'

import { PauseIcon, PlayIcon } from '@/components/Icons'

interface YouTubePlayerButtonProps {
  videoId: string
  isAutoPlay: boolean
  color?: string
}

const YouTubePlayerButton: React.FC<YouTubePlayerButtonProps> = ({ videoId, isAutoPlay, color }) => {
  const [player, setPlayer] = useState<YT.Player | undefined>(undefined)
  const [isPlaying, setIsPlaying] = useState(isAutoPlay)

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
      <Button onClick={toggleVideoStatus} type="button">
        {isPlaying ? <PauseIcon width={40} color={color} /> : <PlayIcon width={40} color={color} />}
      </Button>
    </>
  )
}

export default YouTubePlayerButton

const Button = styled.button`
  all: unset;
  cursor: pointer;
`
