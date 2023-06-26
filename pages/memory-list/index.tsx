import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { useCallback, useEffect, useRef, useState } from 'react'
import axios from 'axios'
import styled from '@emotion/styled'

import Card from '@/components/Card'

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

  return (
    <S.Wrapper>
      <S.Title>My Palace</S.Title>
      {memoryList?.memoryList.map((memory, index) => (
        <Card key={index} memory={memory} ref={targetRef} />
      ))}
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
