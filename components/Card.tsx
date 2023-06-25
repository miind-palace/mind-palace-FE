import { forwardRef } from 'react'
import styled from '@emotion/styled'

import { MemoryType } from '@/pages/memory-list'
import CardPlayButton from './button/CardPlayButton'

import makeYouTubeVideoId from '@/lib/utils/makeYouTubeVideoId'
import useControlModal from '@/lib/hooks/useControlModal'
import MemoryDetail from './MemoryDetail'
import Modal from './Modal'

import createdAtToTitleDate from '@/lib/utils/createdAtToTitleDate'

type CardProps = {
  memory: MemoryType
} & React.ComponentProps<'div'>

const Card = forwardRef<HTMLDivElement, CardProps>(({ memory }, ref) => {
  const { isOpen, handleCloseModal, handleOpenModal } = useControlModal()

  const convertedTitle = createdAtToTitleDate(memory.createdAt)
  const slicedVideoId = makeYouTubeVideoId(memory.videoId)

  return (
    <>
      {isOpen && memory && (
        <Modal onClose={handleCloseModal}>
          <MemoryDetail
            createdAt={convertedTitle}
            backgroundImage={memory.backgroundImage}
            videoId={slicedVideoId}
            text={memory.text}
            onClickCloseModal={handleCloseModal}
          />
        </Modal>
      )}
      <S.CardComponentContainer ref={ref} backgroundImage={memory.backgroundImage}>
        <S.CardComponentPlayerWrapper>
          <CardPlayButton videoId={slicedVideoId} />
        </S.CardComponentPlayerWrapper>
        <S.CardComponentWrapper onClick={() => handleOpenModal()}>
          <S.CardComponentTitle>{convertedTitle}</S.CardComponentTitle>
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
    z-index: 1000;
  `,
}
