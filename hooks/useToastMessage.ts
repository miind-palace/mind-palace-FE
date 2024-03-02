import { useContext } from 'react'
import { ToastContext } from '@/lib/provider/ToastProvider'

const useToastMessage = () => {
  const { createToast, deleteToast } = useContext(ToastContext)
  return { createToast, deleteToast }
}

export default useToastMessage
