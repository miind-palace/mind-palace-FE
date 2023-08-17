import styled from '@emotion/styled'

import CustomSuspense from '../../components/common/Suspense/CustomSuspense'
import CubeLoader from '@/components/common/Loader/CubeLoader'

export default function Main() {
  return (
    <>
      <CustomSuspense
        fallback={
          <LoaderContainer>
            <CubeLoader />
          </LoaderContainer>
        }
        maxDuration={5500}
      >
        <div>3D 모델 영역</div>
      </CustomSuspense>
    </>
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
