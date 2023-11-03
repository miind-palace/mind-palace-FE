import styled from '@emotion/styled'
import { ButtonHTMLAttributes, ElementRef, PropsWithChildren, Ref, forwardRef } from 'react'

const BasicButton = (
  { children, ...props }: PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>,
  ref: Ref<ElementRef<typeof StyledButton>>
) => {
  return (
    <StyledButton {...props} ref={ref}>
      {children}
    </StyledButton>
  )
}

export default forwardRef(BasicButton)

const StyledButton = styled.button`
  background: rgba(0, 0, 0, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.75);
  width: 100%;
  color: white;
  font-weight: 600;
  font-size: 17px;
  padding: 15px;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.9);
  }
  &:active {
    transition: all 0.2s ease-in-out;
    background: rgba(0, 0, 0, 0.9);
    border: 1px solid rgba(0, 0, 0, 0.9);
  }
  &:disabled {
    background: #999999;
    border: #999999;
    color: #d2d2d2;
    cursor: default;
  }
`
