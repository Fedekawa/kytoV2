'use client';

import { useRef, useMemo, useEffect } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { inSphere } from 'maath/random'

function ParticleCloud({ count = 500 }) {
  const points = useRef()
  const positions = useMemo(() => new Float32Array(inSphere(new Float32Array(count * 3), { radius: 1.5 })), [count])

  useFrame((state, delta) => {
    if (points.current) {
      points.current.rotation.x -= delta / 10
      points.current.rotation.y -= delta / 15
    }
  })

  return (
    <Points ref={points}>
      <PointMaterial
        transparent
        color="#8888ff"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
      <primitive object={positions} attach="geometry-attributes-position" />
    </Points>
  )
}

export function ParticleBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
        <ParticleCloud />
      </Canvas>
    </div>
  )
}