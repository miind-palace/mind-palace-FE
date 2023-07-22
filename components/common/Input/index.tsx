import { SecurityIcon } from '@/components/Icons'
import styled from '@emotion/styled'
import { InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel: string
  svgIcon?: JSX.Element
}

const Input = ({ inputLabel, svgIcon, ...props }: InputProps) => {
  return (
    <StyledBox>
      <StyledLabel>
        <StyledSpan>{inputLabel}</StyledSpan>
        <StyledInput {...props} />
        <Icon>{svgIcon}</Icon>
      </StyledLabel>
    </StyledBox>
  )
}

export default Input

const StyledBox = styled.div`
  position: relative;
`

const StyledInput = styled.input`
  background: rgba(0, 0, 0, 0.6);
  border: 1px solid transparent;
  width: 100%;
  font-size: 14px;
  padding: 32px 15px 12px;
  border-radius: 5px;
  color: #ffffff;

  &:focus {
    background: rgba(0, 0, 0, 0.6);
    outline: 1px solid #333333;
    box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.2);
  }

  &:active {
    background: rgba(0, 0, 0, 0.6);
    outline: 1px solid #333333;
    box-shadow: 0px 0px 10px 0 rgba(0, 0, 0, 0.2);
  }
`

const StyledLabel = styled.label``

const StyledSpan = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  color: #bbbbbb;
  font-size: 12px;
  top: 10px;
  left: 15px;
`

const Icon = styled.div`
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY(-50%);
`
