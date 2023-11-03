import styled from '@emotion/styled'

export const SuggestionImageListContainer = styled.div`
  width: 100%;
  margin: 8px 0;
  overflow: auto;
  scroll-behavior: smooth;
  /* ( 크롬, 사파리, 오페라, 엣지 ) 동작 */
  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none; /* 인터넷 익스플로러 */
  scrollbar-width: none; /* 파이어폭스 */
`

export const SuggestionImageWrapper = styled.div`
  height: 100%;
  display: flex;
  gap: 8px;
  cursor: pointer;

  .requestImage__item {
    position: relative;
    flex: 0 0 138px;
    width: 138px;
    height: 138px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.colors.background.random};
  }

  .requestImage__box {
    position: relative;
  }
`
