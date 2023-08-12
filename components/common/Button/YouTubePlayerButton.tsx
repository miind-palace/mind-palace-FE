import React, { useState } from 'react'
import YouTube from 'react-youtube'
import { PauseIcon, PauseIconInMemoryList, PlayIcon, PlayIconInMemoryList } from '../Icons'
import styled from '@emotion/styled'

interface YouTubePlayerButtonProps {
  videoId: string
  isAutoPlay: boolean
  isInMemoryList?: boolean
}

const YouTubePlayerButton: React.FC<YouTubePlayerButtonProps> = ({ videoId, isAutoPlay, isInMemoryList }) => {
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

  const PlayerControlButton = (
    <Button type="button" onClick={toggleVideoStatus}>
      {isPlaying ? <PauseIcon width={40} /> : <PlayIcon width={40} />}
    </Button>
  )

  const PlayerControlButtonInMemoryList = (
    <Button onClick={toggleVideoStatus}>
      {isPlaying ? <PauseIconInMemoryList width={40} /> : <PlayIconInMemoryList width={40} />}
    </Button>
  )

  return (
    <>
      <YouTube videoId={videoId} opts={opts} onReady={onPlayerReady} style={{ display: 'none' }} />
      {!isInMemoryList ? PlayerControlButton : PlayerControlButtonInMemoryList}
    </>
  )
}

export default YouTubePlayerButton

const Button = styled.button`
  all: unset;
  cursor: pointer;
`
