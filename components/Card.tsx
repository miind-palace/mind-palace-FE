import { forwardRef } from 'react'
import styled from '@emotion/styled'

import { MemoryType } from '@/pages/memory-list'

const Card = forwardRef<HTMLDivElement, { memory: MemoryType }>(({ memory }, ref) => {
  return (
    <S.CardComponentWrapper ref={ref} backgroundImage={memory.backgroundImage}>
      <S.CardComponentTitle>{memory.createdAt}</S.CardComponentTitle>
      <S.CardComponentDesc>{memory.text}</S.CardComponentDesc>
      {/* 임시 */}
      <p style={{ marginTop: '24px' }}>memoryId: {memory.id}</p>
    </S.CardComponentWrapper>
  )
})
Card.displayName = 'Input'

export default Card

const S = {
  CardComponentWrapper: styled.div<{ backgroundImage: MemoryType['backgroundImage'] }>`
    box-sizing: border-box;

    height: 185px;
    margin: 11px 35px;
    padding: 22px;
    border-radius: 16px;
    color: #fff;
    opacity: 1;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    object-fit: cover;
    background-image: ${({ backgroundImage }) => `url(${backgroundImage})`};

    /* 임시 */
    background: #b6e6b0;
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
}
