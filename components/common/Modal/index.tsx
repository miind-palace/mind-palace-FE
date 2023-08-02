import useLockBodyScroll from '@/hooks/useLockBodyScroll'
import styled from '@emotion/styled'
import { createPortal } from 'react-dom'

interface ModalProps {
  children: React.ReactNode
  onClose: () => void
}

const Modal = ({ children, onClose }: ModalProps) => {
  const modalRoot = document.querySelector('#modal-root')
  useLockBodyScroll()

  if (!modalRoot) return null

  return createPortal(
    <ModalOverlay onClick={onClose}>
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </ModalOverlay>,
    modalRoot
  )
}
export default Modal

const ModalOverlay = styled.dialog`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
`
