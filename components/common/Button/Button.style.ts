import theme from '@/styles/theme'
import styled from '@emotion/styled'

export const LargeButtonContainer = styled.button`
  width: 100%;
  color: ${({ theme }) => theme.colors.text.above};
  background-color: ${({ theme }) => theme.colors.primary.normal};
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 20px 0px;
  border-radius: 16px;
  font-size: ${theme.typography.size.text20};
  font-weight: 700;
  line-height: 24px;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.primary.disable};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.light};
  }

  &:active {
    box-shadow: 0px 4px 10px 0px #00000099;
  }

  &:focus {
    box-shadow: 0px 4px 10px 0px #00000099;
  }
`
