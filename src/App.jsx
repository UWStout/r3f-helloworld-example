import React from 'react'

import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

import Box from './components/Box.jsx'

export default function App () {
  return (
    // A base canvas to hold our scene
    <Canvas>
      {/* Some lights to brighten up the world */}
      <ambientLight intensity={Math.PI / 2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
      <pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />

      {/* Two Boxes */}
      <Box position={[-1.2, 0, 0]} />
      <Box position={[1.2, 0, 0]} />

      {/* Allow orbit controls */}
      <OrbitControls />
    </Canvas>
  )
}
