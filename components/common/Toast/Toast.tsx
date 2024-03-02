import * as S from './Toast.style'
import Icon from '../Icon/Icon'

import { toastMessage, ToastMessageEnum } from '@/lib/constant/toastMessage'

export type ToastProps = {
  message: ToastMessageEnum
  /** label 사용시 message: 'none'을 지정한 다음 사용해주세요.
   * @example
   * ```tsx
   * <Toast message="none" label="example message" />
   * ```
   */
  label?: string
  handleClickDelete: () => void
}

const Toast = ({ message, label, handleClickDelete }: ToastProps) => {
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

export default Toast
