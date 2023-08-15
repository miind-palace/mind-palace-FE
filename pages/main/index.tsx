import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from '@emotion/styled'

import CustomSuspense from '@/components/common/Suspense/CustomSuspense'
import CubeLoader from '@/components/common/Loader/CubeLoader'
import MainRoom from '@/components/main/MainRoom'

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
        <Canvas camera={{ position: [1, 1, 1] }}>
          <directionalLight position={[7, 7, 7]} />
          <MainRoom position={[0, 0, 0]} scale={[0.3, 0.3, 0.3]} />
          <OrbitControls target={[0, 1.5, 0]} />
        </Canvas>
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
