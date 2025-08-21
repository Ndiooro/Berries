import React from 'react'
import * as THREE from 'three';

const HeroLights = () => {
  return (
  <>
   <spotLight 
   position={[-2,8,4]}
   angle={0.19}
   intensity={200}
   penumbra={0.4}
   color="white" />


    <spotLight 
   position={[-1,9,6]}
   angle={0.3}
   intensity={40}
   penumbra={0.5}
   color="#4CC9F0" />

   
    <spotLight 
   position={[-3,5,5]}
   angle={0.4}
   intensity={60}
   penumbra={1}
   color="#9D4EDD" />
   <primitive
   object={new THREE.RectAreaLight('#c7aed6',9,7,2)}
   position={[1,3,4]}
   intensity={15}
   rotation={[-Math.PI/4, Math.PI/4, 0]} />

   <pointLight
   position={[0,1,0]}
   intensity={10}
   color="#7209B7" />

     <pointLight
   position={[1,2,-2]}
   intensity={5}
   color="#0D00A4" />

  </>
  )
}

export default HeroLights