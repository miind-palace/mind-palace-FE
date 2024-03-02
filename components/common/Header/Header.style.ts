import styled from '@emotion/styled'

export const Container = styled.header<{ titleFontSize: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px 24px;
  line-height: 41px;

  & > button {
    display: flex;
  }

  & > h1 {
    font-size: ${({ titleFontSize }) => titleFontSize};
    font-weight: ${({ theme }) => theme.typography.weight.bold};
    color: ${({ theme }) => theme.colors.text.normal};
  }
`
