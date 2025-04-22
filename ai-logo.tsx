"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, Center, OrbitControls, Environment } from "@react-three/drei"
import * as THREE from "three"

export default function AILogo() {
  return (
    <div className="w-full h-screen bg-black">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }}>
        <color attach="background" args={["#000000"]} />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
        <Scene />
      </Canvas>
    </div>
  )
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <LogoGeometry />
      <Environment preset="night" />
    </>
  )
}

function LogoGeometry() {
  const groupRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        (state.mouse.x * Math.PI) / 10,
        0.05,
      )
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        (state.mouse.y * Math.PI) / 10,
        0.05,
      )
    }
  })

  return (
    <group ref={groupRef}>
      {/* Outer Hexagon */}
      <Hexagon position={[0, 0, -0.2]} scale={2.2} color="#4a0080" emissive="#8a2be2" />

      {/* Inner Hexagon */}
      <Hexagon position={[0, 0, -0.1]} scale={2} color="#6a0dad" emissive="#9370db" />

      {/* AI Text */}
      <Center>
        <Text3D
          font="/fonts/Geist_Bold.json"
          size={1.2}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-1.2, -0.5, 0]}
        >
          AI
          <meshPhongMaterial color="#b026ff" emissive="#e066ff" emissiveIntensity={2} shininess={100} />
        </Text3D>
      </Center>

      {/* Glow Effect */}
      <GlowEffect />
    </group>
  )
}

function Hexagon({ position = [0, 0, 0], scale = 1, color = "#6a0dad", emissive = "#9370db" }) {
  const points = []
  for (let i = 0; i < 6; i++) {
    const angle = (Math.PI / 3) * i
    points.push(new THREE.Vector2(Math.cos(angle), Math.sin(angle)))
  }

  const shape = new THREE.Shape(points)

  return (
    <mesh position={position} scale={scale}>
      <extrudeGeometry
        args={[
          shape,
          {
            depth: 0.1,
            bevelEnabled: true,
            bevelThickness: 0.05,
            bevelSize: 0.05,
            bevelSegments: 3,
          },
        ]}
      />
      <meshPhongMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={1.5}
        shininess={100}
        transparent
        opacity={0.9}
      />
    </mesh>
  )
}

function GlowEffect() {
  return (
    <mesh>
      <sphereGeometry args={[2.5, 32, 32]} />
      <meshBasicMaterial color="#b026ff" transparent opacity={0.15} side={THREE.BackSide} />
    </mesh>
  )
}
