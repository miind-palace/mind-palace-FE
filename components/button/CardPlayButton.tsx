import { useRef, useState } from 'react'
import styled from '@emotion/styled'

import { MemoryType } from '@/pages/memory-list'
import YouTube, { YouTubeProps, YouTubeEvent } from 'react-youtube'

/** svg: card play start button */
const CardPlayStartButton = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M3 6H0V27C0 28.65 1.35 30 3 30H24V27H3V6ZM27 0H9C7.35 0 6 1.35 6 3V21C6 22.65 7.35 24 9 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM15 18.75V5.25L24 12L15 18.75Z"
        fill="white"
        fill-opacity="0.7"
      />
    </svg>
  )
}

/** svg: card play stop button */
const CardPlayStopButton = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
      <path
        d="M3 6H0V27C0 28.65 1.35 30 3 30H24V27H3V6ZM27 0H9C7.35 0 6 1.35 6 3V21C6 22.65 7.35 24 9 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM14.25 17.25V7.5H17.25L18 12L19.5 17.25V7.5H22.5V17.25H19.5L18 12L17.25 7.5V17.25H14.25Z"
        fill="white"
        fill-opacity="0.4"
      />
      <path
        d="M3 6H0V27C0 28.65 1.35 30 3 30H24V27H3V6ZM27 0H9C7.35 0 6 1.35 6 3V21C6 22.65 7.35 24 9 24H27C28.65 24 30 22.65 30 21V3C30 1.35 28.65 0 27 0ZM14.25 17.25V7.5H17.25L18 12L19.5 17.25V7.5H22.5V17.25H19.5L18 12L17.25 7.5V17.25H14.25Z"
        fill="white"
        fill-opacity="0.4"
      />
    </svg>
  )
}

const switchCardPlayButton = (isPlayed: boolean) => {
  if (isPlayed) return <CardPlayStopButton />
  else return <CardPlayStartButton />
}

type CardPlayButtonProps = Pick<MemoryType, 'videoId'>

const CardPlayButton = ({ videoId }: CardPlayButtonProps) => {
  const [playerStatus, setPlayerStatus] = useState({ isPlayed: false })
  const playerRef = useRef<YouTubeEvent['target']>(null)

  /** Video를 play or pause하고, playerStatus를 변경합니다. */
  const handleCardPlayButton = () => {
    if (playerStatus.isPlayed) playerRef?.current.pauseVideo()
    else playerRef?.current.playVideo()
    setPlayerStatus((prev) => {
      return { ...prev, isPlayed: !prev.isPlayed }
    })
  }

  const handlePlayerRef: YouTubeProps['onReady'] = (e) => {
    playerRef.current = e.target
  }

  return (
    <>
      <YouTube
        videoId={videoId}
        opts={{
          width: '0',
          height: '0',
          playerVars: {
            autoplay: 0, //자동재생 X
          },
        }}
        onReady={handlePlayerRef}
        style={{ display: 'none' }}
      />
      <S.Wrapper onClick={handleCardPlayButton}>{switchCardPlayButton(playerStatus.isPlayed)}</S.Wrapper>
    </>
  )
}

export default CardPlayButton

const S = {
  Wrapper: styled.button`
    all: unset;
    width: 30px;
    height: 30px;
    cursor: pointer;

    /* 음악 재생 버튼 hover시 약간의 확대 애니메이션 */
    &:hover {
      transform: scale(1.1);
    }
    transition-duration: 150ms;
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  `,
}
