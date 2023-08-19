import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

import Card from '@/components/Card'
import MemoryDetail from '@/components/memory-list/MemoryDetail'
import createdAtToTitleDate from '@/lib/utils/createdAtToTitleDate'
import makeYouTubeVideoId from '@/lib/utils/makeYouTubeVideoId'
import useControlModal from '@/hooks/useControlModal'
import Modal from '@/components/common/Modal'

const GET_MEMORY_LIST_DEFAULT_SIZE = 3

// memory types

/** memoryList를 가져오는 api의 response type */
export type GetMemoryListRes = {
  total: number
  content: Array<MemoryType>
  pageable: {
    sort: {
      orders: [
        {
          direction: string
          property: string
          ignoreCase: boolean
          nullHandling: string
        }
      ]
    }
    page: number
    size: number
  }
}

export type MemoryType = {
  id: number
  backgroundImage: string
  text: string
  videoId: string
  createdAt: string
  deletedAt?: string
}

export type MemoryListType = {
  memoryList: GetMemoryListRes['content']
  currentPage: GetMemoryListRes['pageable']['page']
}

// server data fetching
export const getServerSideProps: GetServerSideProps<{
  initMemoryList: MemoryListType
}> = async () => {
  /** fetch data */
  const getMemoryList = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_DEFAULT_END_POINT}post/page?page=1&size=${GET_MEMORY_LIST_DEFAULT_SIZE}&memberId=14`
  )
  const getMemoryListRes: GetMemoryListRes = await getMemoryList.json()

  const initMemoryList: MemoryListType = {
    memoryList: getMemoryListRes.content,
    currentPage: getMemoryListRes.pageable.page,
  }
  return { props: { initMemoryList } }
}

export default function MemoryList({ initMemoryList }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const [memoryList, setMemoryList] = useState<MemoryListType>(initMemoryList)

  const targetRef = useRef<HTMLDivElement>(null)

  const handleIntersect = useCallback(
    ([entry]: IntersectionObserverEntry[]) => {
      if (entry.isIntersecting && typeof window !== 'undefined') {
        // const memberId = localStorage.getItem('memberId')
        /** TODO: 로그인 로컬스토리지 구현 확인되면 변경 */
        const memberId = 14

        /** fetch data */
        const getMemoryList = axios.get<GetMemoryListRes>(
          `${process.env.NEXT_PUBLIC_SERVER_DEFAULT_END_POINT}post/page?page=${
            memoryList.currentPage + 2
          }&size=${GET_MEMORY_LIST_DEFAULT_SIZE}&memberId=${memberId}`
        )
        getMemoryList
          .then((res) => {
            if (res.status !== 200) return
            setMemoryList((prev) => {
              return {
                ...prev,
                memoryList: [...prev.memoryList, ...res.data.content],
                currentPage: res.data.pageable.page,
              }
            })
          })
          .catch((error) => console.error(error))
      }
    },
    [targetRef.current]
  )

  /** control observer */
  /* mount시 sessionStorage 검증 진행
    dummyMemory있을 경우, 랜덤으로 유저 카드 open되도록 실행 */
  useEffect(() => {
    //sessionStorage 검증
    const storedDummyMemoryJSON = sessionStorage.getItem('dummyMemory') as string
    if (storedDummyMemoryJSON) {
      const storedDummyMemory = JSON.parse(storedDummyMemoryJSON)
      handleClickMemory(storedDummyMemory)
      sessionStorage.removeItem('dummyMemory')
    }

    //control observer
    const observer = new IntersectionObserver(handleIntersect, {
      threshold: 0.9,
      root: null,
    })

    targetRef.current && observer.observe(targetRef.current)

    return () => {
      observer.disconnect()
    }
  }, [handleIntersect, targetRef.current])

  const { isOpen, handleCloseModal, handleOpenModal } = useControlModal()
  const handleRemoveMemory = async (id: number) => {
    await axios.get(`${process.env.NEXT_PUBLIC_SERVER_DEFAULT_END_POINT}post/delete?postId=${id}`)
  }
  const [clickedMemory, setClickedMemory] = useState<MemoryType>()
  const handleClickMemory = (memory: MemoryType) => {
    setClickedMemory(memory)
    handleOpenModal()
  }

  return (
    <S.Wrapper>
      <S.Title>My Palace</S.Title>
      {memoryList?.memoryList.map((memory, index) => (
        <div key={`${memory.id}${index}`} onClick={() => handleClickMemory(memory)}>
          <Card memory={memory} ref={targetRef} />
        </div>
      ))}
      {isOpen && clickedMemory && (
        <Modal onClose={handleCloseModal}>
          <MemoryDetail
            createdAt={createdAtToTitleDate(clickedMemory.createdAt)}
            backgroundImage={clickedMemory.backgroundImage}
            videoId={makeYouTubeVideoId(clickedMemory.videoId) || clickedMemory.videoId}
            text={clickedMemory.text}
            onClickCloseModal={handleCloseModal}
            onClickRemoveMemory={() => handleRemoveMemory(clickedMemory.id)}
          />
        </Modal>
      )}
    </S.Wrapper>
  )
}

const S = {
  Wrapper: styled.div`
    padding: 24px 0;
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
