import styled from '@emotion/styled'

export const Container = styled.div`
  width: 100%;
  height: calc(100% - 69px);
  position: absolute;
  top: 69px;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 122, 255, 0.2);
  cursor: pointer;

  & > div {
    & > p {
      position: absolute;

      color: ${({ theme }) => theme.colors.primary.normal};
      font-size: ${({ theme }) => theme.typography.size.text15};
      background-color: ${({ theme }) => theme.colors.background.white};
      margin: 0px 12px;
      border-radius: 0 12px 12px 12px;
      padding: 10px;
      line-height: 1;

      &.first-text {
        top: 79px;
        left: 69px;
      }

      &.second-text {
        top: 221px;
        left: 23px;
      }

      &.third-text {
        top: 442px;
        left: 41px;
      }

      &.four-text {
        top: 624px;
        left: 69px;
      }

      &.five-text {
        top: 729px;
        left: 40px;
      }
    }
  }
`
