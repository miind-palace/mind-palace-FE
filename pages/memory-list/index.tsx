import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useCallback, useEffect, useRef, useState } from 'react'
import styled from '@emotion/styled'

import Card from '@/components/Card'
import Modal from '@/components/Modal'
import useControlModal from '@/lib/hooks/useControlModal'

/**mock data */
const MockMemoryType = (currentPage: number) => {
  return {
    data: [
      {
        id: currentPage,
        backgroundImage: '',
        youtubeUrl: 'lMhJWg9QwJ8',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        createdAt: 'July 23',
        deletedAt: 'July 23',
      },
      {
        id: currentPage,
        backgroundImage: '',
        youtubeUrl: 'lMhJWg9QwJ8',
        text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        createdAt: 'July 23',
        deletedAt: 'July 23',
      },
    ],
    currentPage: currentPage,
  }
}

// memory types
export type MemoryType = {
  id: number
  backgroundImage: string
  youtubeUrl: string
  text: string
  createdAt: string
  deletedAt: string
}

export type MemoryListType = {
  data: MemoryType[]
  currentPage: number
}

// server data fetching
export const getServerSideProps: GetServerSideProps<{
  initMemoryList: MemoryListType
}> = async () => {
  /** fetch data */
  // const getMemoryListRes = await fetch(`https://-?memoryList=1`)
  // const initMemoryList = await getMemoryListRes.json()

  // mock data
  const initMemoryList = MockMemoryType(1)
  return { props: { initMemoryList } }
}

export default function MemoryList({ initMemoryList }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [memoryList, setMemoryList] = useState<MemoryListType>(initMemoryList)

  const { isOpen, handleCloseModal, handleOpenModal } = useControlModal()
  const [memory, setMemory] = useState<MemoryType>()

  const targetRef = useRef<HTMLDivElement>(null)
  const mockNumber = useRef(2)

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting) {
        /** fetch data */
        // const getMemoryList = axios.get<MemoryListType>(`https://-?memoryList=${memoryList.currentPage}`)
        // getMemoryList.then((res) => {
        //   if (res.status !== 200) return

        //   setMemoryList((prev) => {
        //     if (prev && prev.currentPage === 1) return
        //     else
        //       return {
        //         ...prev,
        //         data: [...prev.data, ...res.data.data],
        //         currentPage: res.data.currentPage,
        //       }
        //   })
        // })

        /** mock data */
        setMemoryList((prev) => {
          return {
            ...prev,
            data: [...prev.data, ...MockMemoryType(mockNumber.current).data],
            currentPage: MockMemoryType(mockNumber.current).currentPage,
          }
        })
        mockNumber.current++
      }
    },
    [targetRef.current]
  )

  /** control observer */
  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.9,
      root: null,
    })

    targetRef.current && observer.observe(targetRef.current)

    return () => {
      observer.disconnect()
    }
  }, [handleIntersect, targetRef.current])

  const handleOpenMemoryDetailModal = (memory: MemoryType) => {
    setMemory(memory)
    handleOpenModal()
  }

  return (
    <S.Wrapper>
      <button onClick={handleOpenModal}>{isOpen ? '닫기' : '열기'}</button>
      {isOpen && (
        <Modal onClose={handleCloseModal}>
          <h1>test</h1>
        </Modal>
      )}
      <S.Title>My Palace</S.Title>
      {memoryList?.data.map((memory, index) => (
        <div key={index} onClick={() => handleOpenMemoryDetailModal(memory)}>
          <Card memory={memory} ref={targetRef} />
        </div>
      ))}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    /* 임시 */
    margin: 800px auto;
    width: 414px;
  `,
  Title: styled.h1`
    color: #000;
    text-align: center;
    font-size: 24px;
    font-family: Inter;
    line-height: 32px;
    letter-spacing: -0.6px;
    text-align: left;
    padding: 26px 47px;
  `,
  CardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
}
