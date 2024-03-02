import { useContext } from 'react'
import { ToastContext } from '@/lib/provider/ToastProvider'

/**
 * @example
 * ```tsx
 * const { openToast } = useToastMessage()
 * openToast({ message: 'common' })
 * ```
 */
const useToastMessage = () => {
  const { createToast } = useContext(ToastContext)
  return { openToast: createToast }
}

export default useToastMessage
