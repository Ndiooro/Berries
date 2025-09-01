import React from 'react'
import { div } from 'three/tsl'
import counterItems from '../constants/counterItems'

const AnimatedCounter = () => {
  return (
   <div id="counter" className='padding-x-lg xl:mt-0 mt-32'>
    <div className="mx-auto grid-4-cols">
    {counterItems.map((item, index) => (
      <div key={counterItems.label} className="counter-number text-white text-5xl font-bold mb-2">
      
      </div>
    ))}
    </div>
   </div>
  )
}

export default AnimatedCounter