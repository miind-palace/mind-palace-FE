import React, { PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'

import Toast, { ToastProps } from '@/components/common/Toast/Toast'

export type ToastListType = Omit<ToastProps, 'handleClickDelete' | 'setToast'>
export type createToastOptions = Omit<ToastListType, 'id'>

export const ToastContext = createContext({
  createToast: (obj: createToastOptions) => {},
})

function ToastProvider({ children }: PropsWithChildren) {
  const [toastList, setToast] = useState<Array<ToastListType>>([])

  const createToast = ({ message, label, autoClose }: createToastOptions) => {
    setToast((prev) => {
      return [
        ...prev,
        {
          id: Math.random(),
          message,
          label,
          autoClose,
        },
      ]
    })
  }

  const deleteToast = (id: ToastListType['id']) => {
    setToast((prev) => prev.filter((item) => (item.id === id ? null : item)))
  }

  const value = useMemo(() => ({ createToast }), [createToast])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <S.ToastListContainer>
        {toastList.reverse().map((item) => (
          <Toast
            key={item.id}
            id={item.id}
            message={item.message}
            autoClose={item.autoClose}
            setToast={setToast}
            handleClickDelete={() => deleteToast(item.id)}
          />
        ))}
      </S.ToastListContainer>
    </ToastContext.Provider>
  )
}

export default ToastProvider

const S = {
  ToastListContainer: styled.div`
    position: fixed;
    bottom: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  `,
}
