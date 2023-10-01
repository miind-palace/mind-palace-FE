import { ButtonHTMLAttributes, ReactNode, Ref, forwardRef } from 'react'
import { LargeButtonContainer } from './LargeButton.style'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

const LargeButton = ({ children, ...props }: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  return (
    <LargeButtonContainer ref={ref} {...props}>
      {children}
    </LargeButtonContainer>
  )
}

export default forwardRef(LargeButton)
