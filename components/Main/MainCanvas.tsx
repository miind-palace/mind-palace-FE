import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import dynamic from 'next/dynamic'

const MainRoom = dynamic(() => import('../../components/Main/MainRoom'), {
  ssr: false,
})

const MainCanvas = () => {
  return (
    <Canvas camera={{ position: [1, 1.7, 1] }} style={{ height: '100vh' }}>
      <directionalLight position={[7, 7, 10]} />
      <MainRoom position={[0, 0.75, 0]} scale={[0.22, 0.22, 0.22]} />
      <OrbitControls target={[0, 1.4, 0]} />
    </Canvas>
  )
}

export default MainCanvas
