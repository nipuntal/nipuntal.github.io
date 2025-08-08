import React, { useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Box, Sphere, Cylinder } from '@react-three/drei'
import './App.css'

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      
      <Box position={[-2, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#3B82F6" />
      </Box>
      
      <Sphere position={[0, 0, 0]} args={[0.7, 32, 32]}>
        <meshStandardMaterial color="#10B981" />
      </Sphere>
      
      <Cylinder position={[2, 0, 0]} args={[0.5, 0.5, 1, 32]}>
        <meshStandardMaterial color="#F59E0B" />
      </Cylinder>
      
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
    </>
  )
}

function App() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
      {/* Header */}
      <header className="bg-white bg-opacity-10 backdrop-blur-md border-b border-white border-opacity-20">
        <div className="container mx-auto px-6 py-4">
          <h1 className="text-3xl font-bold text-white">
            React + Three.js + Tailwind
          </h1>
          <p className="text-white text-opacity-80 mt-2">
            Interactive 3D Web Experience
          </p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* 3D Canvas */}
          <div className="card h-96">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">3D Scene</h2>
            <div className="w-full h-80 bg-gray-100 rounded-lg overflow-hidden">
              <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <Scene />
              </Canvas>
            </div>
            <div className="mt-4 flex gap-2">
              <button 
                className="btn-primary"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? 'Pause' : 'Play'} Animation
              </button>
            </div>
          </div>

          {/* Controls Panel */}
          <div className="card">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Controls</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Camera Controls
                </label>
                <p className="text-sm text-gray-600">
                  • Left click + drag to rotate<br/>
                  • Right click + drag to pan<br/>
                  • Scroll to zoom
                </p>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  3D Objects
                </label>
                <div className="flex gap-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-primary rounded"></div>
                    <span className="text-sm">Cube</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-secondary rounded-full"></div>
                    <span className="text-sm">Sphere</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-accent rounded"></div>
                    <span className="text-sm">Cylinder</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card text-center">
            <div className="w-12 h-12 bg-primary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">R</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">React</h3>
            <p className="text-gray-600 text-sm">
              Modern React with hooks and functional components
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-secondary rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">3</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Three.js</h3>
            <p className="text-gray-600 text-sm">
              Interactive 3D graphics with React Three Fiber
            </p>
          </div>
          
          <div className="card text-center">
            <div className="w-12 h-12 bg-accent rounded-lg mx-auto mb-4 flex items-center justify-center">
              <span className="text-white font-bold">T</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">Tailwind</h3>
            <p className="text-gray-600 text-sm">
              Utility-first CSS framework for rapid styling
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App 