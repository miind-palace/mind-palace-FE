import { ElementRef, InputHTMLAttributes, Ref, forwardRef } from 'react'
import { Icon, StyledBox, StyledInput, StyledLabel, StyledSpan } from './Input.style'

// export type InputColorType = 'PENETRATED_WHITE' | 'PENETRATED_BLACK' | 'GRAY'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputLabel: string
  svgIcon?: JSX.Element
  colorType?: InputColorType
}

const Input = (
  { inputLabel, svgIcon, colorType = 'GRAY', ...props }: InputProps,
  ref: Ref<ElementRef<typeof StyledInput>>
) => {
  return (
    <StyledBox>
      <StyledLabel>
        <StyledSpan>{inputLabel}</StyledSpan>
        <StyledInput colorType={colorType} {...props} ref={ref} />
        <Icon>{svgIcon}</Icon>
      </StyledLabel>
    </StyledBox>
  )
}

export default forwardRef(Input)

export const InputColor = {
  PENETRATED_WHITE: 'PENETRATED_WHITE',
  PENETRATED_BLACK: 'PENETRATED_BLACK',
  GRAY: 'GRAY',
} as const

export type InputColorType = keyof typeof InputColor
