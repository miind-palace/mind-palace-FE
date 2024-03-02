import * as S from './Toast.style'
import Icon from '../Icon/Icon'

import { toastMessage, ToastMessageEnum } from '@/lib/constant/toastMessage'
import { memo, useEffect } from 'react'
import { ToastListType } from '@/lib/provider/ToastProvider'

const DEFAULT_AUTO_CLOSE_TIME = 3 * 1000

export type ToastProps = {
  id: number
  message: ToastMessageEnum
  /** label 사용시 message: 'none'을 지정한 다음 사용해주세요.
   * @example
   * ```tsx
   * <Toast message="none" label="example message" />
   * ```
   */
  label?: string
  autoClose?: number
  handleClickDelete: () => void
  setToast: React.Dispatch<React.SetStateAction<ToastListType[]>>
}

const Toast = ({
  id,
  message,
  label,
  autoClose = DEFAULT_AUTO_CLOSE_TIME,
  handleClickDelete,
  setToast,
}: ToastProps) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      setToast((prev) => prev.filter((item) => (item.id === id ? null : item)))
    }, autoClose)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <S.Container>
      <S.LeftWrapper>
        <Icon size="md" name="alert" />
        <S.ToastMessage>{toastMessage[message] || label}</S.ToastMessage>
      </S.LeftWrapper>
      <S.DeleteButton onClick={handleClickDelete}>
        <Icon size="sm" name="close" />
      </S.DeleteButton>
    </S.Container>
  )
}

export default memo(Toast)
