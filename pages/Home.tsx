import IronManCanvas from '@/components/IronManCanvas'
import JarvisOverlay from '@/components/JarvisOverlay'
import Navbar from '@/components/Navbar'
import React from 'react'

const Home = () => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      <Navbar />
      {/* Background 3D Model */}

      <IronManCanvas />
      <JarvisOverlay />

      
    </div>
  )
}

export default Home
