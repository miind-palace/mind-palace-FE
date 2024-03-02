import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import CubeLoader from '@/components/common/Loader/CubeLoader'
import CustomSuspense from '@/components/common/Suspense/CustomSuspense'

const MainCanvas = dynamic(() => import('../../components/Main/MainCanvas'), {
  ssr: false,
})

export default function Main() {
  return (
    <CustomSuspense
      fallback={
        <LoaderContainer>
          <CubeLoader />
        </LoaderContainer>
      }
      maxDuration={5500}
    >
      <MainCanvas />
    </CustomSuspense>
  )
}

const LoaderContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
