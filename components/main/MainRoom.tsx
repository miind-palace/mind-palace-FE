import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'

import { useRef, useState } from 'react'
import { useRouter } from 'next/router'

import { GLTFResult } from '../../lib/types/mainTypes'

export default function MainRoom(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/main_room.gltf') as GLTFResult
  const bookshelfRef = useRef<THREE.Mesh>(null!)
  const router = useRouter()

  const [bookshelfHovered, setBookshelfHovered] = useState(false)
  const [bookDummyHovered, setBookDummyHovered] = useState(false)
  const [yellowBookHovered, setYellowBookHovered] = useState(false)
  const [blueBookHovered, setBlueBookHovered] = useState(false)
  const [leafHovered, setLeafHovered] = useState(false)

  useFrame(() => {
    //책장
    if (bookshelfRef.current !== undefined) {
      //Ref는 책장 밀리는 애니메이션 적용을 위함
      bookshelfRef.current.position.z = bookshelfHovered
        ? THREE.MathUtils.lerp(bookshelfRef.current.position.z, -1, 0.025)
        : THREE.MathUtils.lerp(bookshelfRef.current.position.z, -1.03, 0.025)

      materials['Material.007'].color.lerp(
        bookshelfHovered ? new THREE.Color(Math.floor(Math.random() * 16777216)) : new THREE.Color('#D69034'),
        0.01
      )
    }

    //화분
    const leafsMaterialName = ['Material.015', 'Material.016', 'Material.017'] as const
    leafsMaterialName.forEach((leafName) => {
      if (materials[leafName]) {
        materials[leafName].color.lerp(leafHovered ? new THREE.Color('green') : new THREE.Color('#CAE783'), 0.01)
      }
    })

    //책더미
    const bookDummyKeys = ['Material.024', 'Material.021'] as const
    bookDummyKeys.forEach((key) => {
      if (materials[key]) {
        materials[key].color.lerp(
          bookDummyHovered ? new THREE.Color(Math.floor(Math.random() * 16777216)) : new THREE.Color('#34495e'),
          0.01
        )
      }
    })

    //노란책
    const yellowBookKeys = ['Material.014', 'Material.031'] as const
    yellowBookKeys.forEach((key) => {
      if (materials[key]) {
        materials[key].color.lerp(
          yellowBookHovered ? new THREE.Color(Math.floor(Math.random() * 16777216)) : new THREE.Color('yellow'),
          0.01
        )
      }
    })
    //파란책
    const blueBookKeys = ['Material.026', 'Material.033'] as const
    blueBookKeys.forEach((key) => {
      if (materials[key]) {
        materials[key].color.lerp(
          blueBookHovered ? new THREE.Color(Math.floor(Math.random() * 16777216)) : new THREE.Color('#2980b9'),
          0.01
        )
      }
    })
  })

  return (
    <group {...props} dispose={null}>
      <perspectiveCamera name="camera" fov={40} near={10} far={1000} position={[10, 0, 50]} />
      <pointLight intensity={0.3} position={[100, 50, 100]} rotation={[-Math.PI / 2, 0, 0]} />
      <mesh
        geometry={nodes.Cube001.geometry}
        material={materials['Material.001']}
        position={[0.098, 3.137, 0.041]}
        scale={2}
      />
      <mesh
        geometry={nodes.Cube002.geometry}
        material={materials['Material.028']}
        position={[-0.01, 1.532, 0.09]}
        scale={[2, 2, 1.95]}
      />
      <mesh
        geometry={nodes.Cube003.geometry}
        material={materials['Material.007']}
        position={[1.404, 3.387, -1.132]}
        ref={bookshelfRef}
        scale={0.645}
        onPointerOver={(e) => (e.stopPropagation(), setBookshelfHovered(true))}
        onPointerOut={(e) => setBookshelfHovered(false)}
        onClick={() => router.push('/memory-list')}
      />
      <mesh
        geometry={nodes.Cube004.geometry}
        material={materials['Material.007']}
        position={[1.162, 3.389, -1.267]}
        scale={[0.645, 0.645, 0.632]}
      />
      <mesh
        geometry={nodes.Cube005.geometry}
        material={materials['Material.007']}
        position={[1.162, 3.389, -1.267]}
        scale={[0.645, 0.645, 0.632]}
      />
      <mesh
        geometry={nodes.Cube006.geometry}
        material={materials['Material.007']}
        position={[1.162, 3.389, -1.267]}
        scale={[0.645, 0.645, 0.632]}
      />
      <mesh
        geometry={nodes.Cube007.geometry}
        material={materials['Material.007']}
        position={[1.162, 3.389, -1.267]}
        scale={[0.645, 0.645, 0.632]}
      />
      <mesh
        geometry={nodes.Cube009.geometry}
        material={materials['Material.004']}
        position={[-1.416, 3.206, -0.187]}
        scale={-0.376}
      />
      <mesh
        geometry={nodes.Cube010.geometry}
        material={materials['Material.004']}
        position={[-0.163, 3.217, -1.344]}
        rotation={[0, -1.437, 0]}
        scale={-0.376}
      />
      <mesh
        geometry={nodes.Cube012.geometry}
        material={materials['Material.005']}
        position={[-0.163, 3.217, -1.344]}
        rotation={[0, -1.437, 0]}
        scale={-0.376}
      />
      <mesh
        geometry={nodes.Cube011.geometry}
        material={materials['Material.005']}
        position={[-1.416, 3.206, -0.187]}
        scale={-0.376}
      />
      <mesh
        geometry={nodes.Cube013.geometry}
        material={materials['Material.002']}
        position={[-1.546, 3.498, -0.123]}
        rotation={[0.199, 0.285, -0.181]}
        scale={[0.662, 0.462, 0.462]}
      />
      <mesh
        geometry={nodes.Cube014.geometry}
        material={materials['Material.002']}
        position={[-1.588, 3.506, 0.493]}
        rotation={[-0.209, 0.153, 0.011]}
        scale={[0.662, 0.452, 0.472]}
      />
      <mesh
        geometry={nodes.Cube015.geometry}
        material={materials['Material.002']}
        position={[-0.229, 3.493, -1.478]}
        rotation={[2.543, 1.131, -2.715]}
        scale={[0.662, 0.432, 0.422]}
      />
      <mesh
        geometry={nodes.Cube008.geometry}
        material={materials['Material.019']}
        position={[-1.487, 4.09, 1.35]}
        scale={[0.287, 0.417, 0.367]}
      />
      <mesh
        geometry={nodes.Cube017.geometry}
        material={materials['Material.034']}
        position={[-0.067, 3.134, -0.075]}
        rotation={[0, 0.068, Math.PI]}
        scale={-0.464}
      />
      <mesh
        geometry={nodes.Cube019.geometry}
        material={materials['Material.007']}
        position={[-1.217, 2.952, 1.431]}
        rotation={[-Math.PI, -0.367, 0]}
        scale={0.264}
      />
      <mesh
        geometry={nodes.Circle.geometry}
        material={materials['Material.018']}
        position={[-1.309, 4.341, 0.577]}
        scale={[0.751, 0.717, 0.64]}
      />
      <mesh
        geometry={nodes.Plane001.geometry}
        material={materials['Material.016']}
        position={[-1.115, 3.453, 1.367]}
        rotation={[1.029, -0.021, -0.033]}
        scale={[0.369, 0.459, 0.332]}
        onPointerOver={(e) => (e.stopPropagation(), setLeafHovered(true))}
        onPointerOut={(e) => setLeafHovered(false)}
      />
      <mesh
        geometry={nodes.Plane002.geometry}
        material={materials['Material.015']}
        position={[-1.115, 3.474, 1.388]}
        rotation={[2.178, 0.569, -2.19]}
        scale={[0.369, 0.459, 0.332]}
        onPointerOver={(e) => (e.stopPropagation(), setLeafHovered(true))}
        onPointerOut={(e) => setLeafHovered(false)}
      />
      <mesh
        geometry={nodes.Plane003.geometry}
        material={materials['Material.017']}
        position={[-1.115, 3.457, 1.367]}
        rotation={[0.657, -0.423, -0.528]}
        scale={[0.245, 0.304, 0.22]}
        onPointerOver={(e) => (e.stopPropagation(), setLeafHovered(true))}
        onPointerOut={(e) => setLeafHovered(false)}
      />
      <mesh
        geometry={nodes.Cube024.geometry}
        material={materials['Material.014']}
        position={[1.702, 4.139, -1.279]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube025.geometry}
        material={materials['Material.024']}
        position={[0.969, 3.823, -1.262]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube027.geometry}
        material={materials['Material.008']}
        position={[1.358, 3.202, -1.297]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube028.geometry}
        material={materials['Material.009']}
        position={[1.032, 2.915, -1.303]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube029.geometry}
        material={materials['Material.009']}
        position={[1.611, 4.126, -1.259]}
        rotation={[0, 0, -0.209]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube030.geometry}
        material={materials['Material.012']}
        position={[1.108, 3.846, -1.299]}
        rotation={[0, 0, 0.297]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube031.geometry}
        material={materials['Material.014']}
        position={[1.259, 3.82, -1.302]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube032.geometry}
        material={materials['Material.026']}
        position={[1.68, 3.729, -1.262]}
        rotation={[0, 0, Math.PI]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube033.geometry}
        material={materials['Material.009']}
        position={[1.541, 3.756, -1.329]}
        rotation={[0, 0, -1.082]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube034.geometry}
        material={materials['Material.014']}
        position={[1.05, 4.039, -1.282]}
        rotation={[0, 0, Math.PI]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube035.geometry}
        material={materials['Material.026']}
        position={[1.09, 4.109, -1.262]}
        rotation={[0, 0, Math.PI]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube036.geometry}
        material={materials['Material.015']}
        position={[1.26, 4.099, -1.272]}
        rotation={[0, 0, 1.937]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube037.geometry}
        material={materials['Material.026']}
        position={[1.314, 3.512, -1.272]}
        rotation={[0, 0, -1.449]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube038.geometry}
        material={materials['Material.014']}
        position={[1.168, 3.533, -1.28]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube039.geometry}
        material={materials['Material.003']}
        position={[1.044, 3.512, -1.252]}
        rotation={[0, 0, -1.676]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube040.geometry}
        material={materials['Material.012']}
        position={[0.854, 3.512, -1.242]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube041.geometry}
        material={materials['Material.013']}
        position={[1.403, 3.219, -1.302]}
        rotation={[0, 0, -Math.PI / 2]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube042.geometry}
        material={materials['Material.013']}
        position={[0.891, 3.197, -1.262]}
        rotation={[0, 0, -0.209]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube043.geometry}
        material={materials['Material.009']}
        position={[1.407, 2.906, -1.282]}
        rotation={[0, 0, Math.PI]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube044.geometry}
        material={materials['Material.013']}
        position={[1.467, 2.836, -1.262]}
        rotation={[0, 0, Math.PI]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube045.geometry}
        material={materials['Material.010']}
        position={[1.53, 3.189, -1.272]}
        rotation={[0, 0, 1.937]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube046.geometry}
        material={materials['Material.012']}
        position={[1.69, 3.189, -1.262]}
        rotation={[0, 0, 2.67]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube047.geometry}
        material={materials['Material.029']}
        position={[1.232, 2.912, -1.272]}
        rotation={[0, 0, -1.728]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube048.geometry}
        material={nodes.Cube048.material}
        position={[1.177, 3.136, -1.262]}
        rotation={[0, 0, Math.PI]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube049.geometry}
        material={materials['Material.006']}
        position={[1.137, 3.206, -1.282]}
        rotation={[0, 0, Math.PI]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube050.geometry}
        material={materials['Material.032']}
        position={[1.597, 2.926, -1.312]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube051.geometry}
        material={materials['Material.011']}
        position={[0.89, 2.886, -1.262]}
        rotation={[0, 0, 1.676]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube052.geometry}
        material={materials['Material.009']}
        position={[1.177, 3.136, -1.242]}
        rotation={[0, 0, Math.PI]}
        scale={0.077}
      />
      <group position={[1.367, 2.777, 0.531]} rotation={[0, -0.698, Math.PI]} scale={0.073}>
        <mesh geometry={nodes.Cube061_1.geometry} material={materials['Material.013']} />
        <mesh geometry={nodes.Cube061_2.geometry} material={materials['Material.023']} />
      </group>
      <group position={[1.068, 2.772, 0.643]} rotation={[0, Math.PI / 4, 0]} scale={0.169}>
        <mesh geometry={nodes.Plane002_1.geometry} material={materials['Material.022']} />
        <mesh geometry={nodes.Plane002_2.geometry} material={materials['Material.012']} />
      </group>
      <mesh
        geometry={nodes.Cube026.geometry}
        material={materials['Material.009']}
        position={[1.608, 3.533, -1.28]}
        scale={0.077}
      />
      <mesh
        geometry={nodes.Cube059.geometry}
        material={materials['Material.020']}
        position={[1.434, 3.512, -1.272]}
        rotation={[0, 0, -1.745]}
        scale={0.077}
      />
      {/* 더미책 */}
      <group
        position={[1.054, 2.79, 0.001]}
        rotation={[0, -0.175, Math.PI]}
        onPointerOver={(e) => (e.stopPropagation(), setBookDummyHovered(true))}
        onPointerOut={() => setBookDummyHovered(false)}
        scale={0.077}
      >
        <mesh geometry={nodes.Cube063_1.geometry} material={materials['Material.021']} />
        <mesh geometry={nodes.Cube063_2.geometry} material={materials['Material.025']} />
      </group>
      <group
        position={[1.054, 2.79, 0.001]}
        rotation={[0, -0.175, Math.PI]}
        onPointerOver={(e) => (e.stopPropagation(), setBookDummyHovered(true))}
        onPointerOut={() => setBookDummyHovered(false)}
        scale={0.077}
      >
        <mesh geometry={nodes.Cube064_1.geometry} material={materials['Material.024']} />
        <mesh geometry={nodes.Cube064_2.geometry} material={materials['Material.027']} />
      </group>
      <group
        position={[1.054, 2.79, 0.001]}
        rotation={[0, -0.175, Math.PI]}
        onPointerOver={(e) => (e.stopPropagation(), setBookDummyHovered(true))}
        onPointerOut={() => setBookDummyHovered(false)}
        scale={0.077}
      >
        <mesh geometry={nodes.Cube066.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.Cube066_1.geometry} material={materials['Material.030']} />
      </group>
      {/* 노랑 */}
      <group
        position={[0.57, 1.135, 1.596]}
        rotation={[0, 0.506, -1.082]}
        scale={0.077}
        onPointerOver={(e) => (e.stopPropagation(), setYellowBookHovered(true))}
        onPointerOut={() => setYellowBookHovered(false)}
      >
        <mesh geometry={nodes.Cube067.geometry} material={materials['Material.014']} />
        <mesh geometry={nodes.Cube067_1.geometry} material={materials['Material.031']} />
      </group>
      {/* 파랑 */}
      <group
        position={[0.57, 1.135, 1.596]}
        rotation={[0, 0.506, -1.082]}
        scale={0.077}
        onPointerOver={(e) => (e.stopPropagation(), setBlueBookHovered(true))}
        onPointerOut={() => setBlueBookHovered(false)}
      >
        <mesh geometry={nodes.Cube068.geometry} material={materials['Material.026']} />
        <mesh geometry={nodes.Cube068_1.geometry} material={materials['Material.033']} />
      </group>
    </group>
  )
}

useGLTF.preload('/main_room.gltf')
