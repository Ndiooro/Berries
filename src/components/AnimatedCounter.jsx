import React from 'react'
import { div } from 'three/tsl'
import { counterItems } from '../constants'
import CountUp from 'react-countup'
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const AnimatedCounter = () => {
 
  return (
   <div id="counter" className='padding-x-lg xl:mt-0 mt-20'>
    <div className="mx-auto grid-3-cols-md-notsotight">
      {counterItems.map((item) => (
        <div key={item.label} className='bg-zinc-900 rounded-lg p-10 flex flex-col justify-center'>
          <div className="text-white text-5xl font-bold mb-2">
            <CountUp suffix={item.suffix} end={item.value} />
          </div>
          <div className='text-white-50 text-lg'>{item.label}</div>
        </div>
      ))}
    </div>
   </div>
  )
}

export default AnimatedCounter