import { ReactNode } from 'react'
import { ButtonContainer } from './Button.style'

export type ButtonStyle = 'upload' | 'icon' | 'delete'

interface ButtonProps {
  children: ReactNode
  buttonStyle: ButtonStyle
}

const Button = ({ children, buttonStyle }: ButtonProps) => {
  return <ButtonContainer buttonStyle={buttonStyle}>{children}</ButtonContainer>
}

export default Button
