import styled from '@emotion/styled'
import { ButtonStyle } from './Button'
import { css } from '@emotion/react'
import theme from '@/styles/theme'

const getButtonStyle = (buttonStyle: ButtonStyle) => {
  switch (buttonStyle) {
    case 'upload':
      return css`
        padding: 20px 0px;
        border-radius: 16px;
        font-size: ${theme.typography.size.text20};
        font-weight: 700;
        line-height: 24px;
      `
    case 'delete':
      return css`
        padding: 10px 28px;
        font-size: ${theme.typography.size.text15};
        line-height: 1;
      `
    case 'icon':
      return css`
        padding: 15px;
        border-radius: 16px;
      `
  }
}

export const ButtonContainer = styled.button<{ buttonStyle: ButtonStyle }>`
  width: 100%;
  color: ${({ theme }) => theme.colors.text.above};
  background-color: ${({ theme }) => theme.colors.primary.normal};
  box-shadow: 0px 4px 4px 0px #00000040;

  ${(props) => getButtonStyle(props.buttonStyle)}

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
