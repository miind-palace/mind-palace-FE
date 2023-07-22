import { InputHTMLAttributes } from 'react'
import { Icon, StyledBox, StyledInput, StyledLabel, StyledSpan } from './Input.style'

export type InputColorType = 'PENETRATED_WHITE' | 'PENETRATED_BLACK' | 'GRAY'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel: string
  svgIcon?: JSX.Element
  colorType?: InputColorType
}

const Input = ({ inputLabel, svgIcon, colorType = 'GRAY', ...props }: InputProps) => {
  return (
    <StyledBox>
      <StyledLabel>
        <StyledSpan>{inputLabel}</StyledSpan>
        <StyledInput colorType={colorType} {...props} />
        <Icon>{svgIcon}</Icon>
      </StyledLabel>
    </StyledBox>
  )
}

export default Input
