import { forwardRef } from 'react'
import styled from '@emotion/styled'

import { MemoryType } from '@/pages/memory-list'
import CardPlayButton from './common/Button/CardPlayButton'

import makeYouTubeVideoId from '@/lib/utils/makeYouTubeVideoId'
import createdAtToTitleDate from '@/lib/utils/createdAtToTitleDate'

type CardProps = {
  memory: MemoryType
} & React.ComponentProps<'div'>

const Card = forwardRef<HTMLDivElement, CardProps>(({ memory }, ref) => {
  return (
    <>
      <S.CardComponentContainer ref={ref} backgroundImage={memory.backgroundImage}>
        {!!memory.videoId && (
          <S.CardComponentPlayerWrapper>
            <CardPlayButton videoId={makeYouTubeVideoId(memory.videoId) || memory.videoId} />
          </S.CardComponentPlayerWrapper>
        )}
        <S.CardComponentWrapper>
          <S.CardComponentTitle>{createdAtToTitleDate(memory.createdAt)}</S.CardComponentTitle>
          <S.CardComponentDesc>{memory.text}</S.CardComponentDesc>
        </S.CardComponentWrapper>
      </S.CardComponentContainer>
    </>
  )
})
Card.displayName = 'Card'

export default Card

const S = {
  CardComponentContainer: styled.div<{ backgroundImage: MemoryType['backgroundImage'] }>`
    box-sizing: border-box;
    position: relative;

    height: 185px;
    margin: 11px 35px;

    border-radius: 16px;
    color: #fff;
    opacity: 1;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    object-fit: cover;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};
  `,
  CardComponentWrapper: styled.div`
    height: 100%;
    width: 100%;
    padding: 22px;
  `,
  CardComponentTitle: styled.h2`
    font-size: 24px;
    font-weight: 800;
  `,
  CardComponentDesc: styled.p`
    margin-top: 32px;
    font-size: 12px;
    font-weight: 300;
    line-height: 18px;
    letter-spacing: -0.3px;
  `,
  CardComponentPlayerWrapper: styled.div`
    position: absolute;
    top: 14px;
    right: 14px;
  `,
}
