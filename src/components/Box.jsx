import React, { useRef, useState } from 'react'
import { useFrame } from '@react-three/fiber'

export default function Box (props) {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef()

  // State and callbacks for hovering
  const [hovered, setHovered] = useState(false)
  const onHovered = (e) => {
    e.stopPropagation()
    document.body.style.cursor = 'pointer'
    setHovered(true)
  }

  const onNotHovered = (e) => {
    document.body.style.cursor = 'default'
    setHovered(false)
  }

  // State and callbacks for clicking
  const [clicked, setClicked] = useState(false)
  const onClicked = (e) => {
    setClicked(!clicked)
  }

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += delta
  })

  // Return the view, these are regular Three.js elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={onClicked}
      onPointerOver={onHovered}
      onPointerOut={onNotHovered}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
