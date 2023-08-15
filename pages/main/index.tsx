import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import styled from '@emotion/styled'
import dynamic from 'next/dynamic'

import CubeLoader from '@/components/common/Loader/CubeLoader'
import CustomSuspense from '@/components/common/Suspense/CustomSuspense'

const MainRoom = dynamic(() => import('../../components/main/MainRoom'))

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
        <Canvas camera={{ position: [1, 1.7, 1] }} style={{ height: '100vh' }}>
          <directionalLight position={[7, 7, 10]} />
          <MainRoom position={[0, 0.75, 0]} scale={[0.22, 0.22, 0.22]} />
          <OrbitControls target={[0, 1.4, 0]} />
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
