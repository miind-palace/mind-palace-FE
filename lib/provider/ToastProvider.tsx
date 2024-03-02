import React, { PropsWithChildren, createContext, useEffect, useMemo, useState } from 'react'
import styled from '@emotion/styled'

import Toast, { ToastProps } from '@/components/common/Toast/Toast'

type ToastListType = { id: number; timeout: ReturnType<typeof setTimeout> } & Omit<ToastProps, 'handleClickDelete'>

export const ToastContext = createContext({
  createToast: () => {},
  deleteToast: (id: ToastListType['id']) => {},
})

function ToastProvider({ children }: PropsWithChildren) {
  const [toastList, setToast] = useState<Array<ToastListType>>([])

  const createToast = () => {
    setToast((prev) => {
      console.log('1')

      return [
        ...prev,
        {
          id: Math.random(),
          message: 'common',
          timeout: setTimeout(() => {
            // return 'finish'
            setToast((prev) => {
              const prevArray = prev
              prevArray.shift()
              console.log('2')
              return prevArray
            })
          }, 3000),
        },
      ]
    })
  }

  const deleteToast = (id: ToastListType['id']) => {
    setToast((prev) => prev.filter((item) => (item.id === id ? null : item)))
  }

  const value = useMemo(() => ({ createToast, deleteToast }), [createToast, deleteToast])

  useEffect(() => {
    console.log(toastList)
  }, [toastList])

  return (
    <ToastContext.Provider value={value}>
      {children}
      <S.ToastListContainer>
        {toastList.reverse().map((item) => (
          <Toast key={item.id} message={item.message} handleClickDelete={() => deleteToast(item.id)} />
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
