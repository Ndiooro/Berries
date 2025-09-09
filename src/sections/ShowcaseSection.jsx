import React, { use } from 'react'
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import {gsap} from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ShowcaseSection = () => {
    const sectionRef= useRef(null);
    const project1Ref= useRef(null);
    const project2Ref= useRef(null);
    const project3Ref= useRef(null);

    
    useGSAP(() => {

       gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

        const cards=[project1Ref.current, project2Ref.current, project3Ref.current];

    cards.forEach((card, index) => {
        gsap.fromTo(
            card,
            {
                y: 50, opacity:0
            },
            {
                y:0,
                opacity:1,
                duration:1,
                delay: 0.3 * (index +1),
                scrollTrigger:{
                    trigger: card,
                    start: 'top bottom-=100',
                    }
            }
        )
    }
)
        gsap.fromTo(sectionRef.current, {
            opacity: 0,
          }, {
            opacity: 1,
            duration: 2,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          });

    }, []);
  return (
    <section id="work" ref={sectionRef} className="app-showcase">
        <div className="w-full">
        <div className="showcaselayout">
         {/*LEFT */}
        <div className="first-project-wrapper" ref={project1Ref}>
            <div className="image-wrapper">
            <img src="/images/Programme.png" alt="Ryde" />
            </div>
            <div className='text-content'>
            <h2>Oasis Care</h2>
            <p className="text-white-50 md:text-xl">
                Une application de télémédecine spécialisée dans le suivi des personnes atteintes de diabète
            </p>
            </div>
        </div>
         {/*RIGHT */}
       <div className="project-list-wrapper overflow-hidden" >
           <div className='project' ref={project2Ref}>
             <div className="image-wrapper ">
            <img src="/images/project2.png" alt="Ryde" />
            </div>
            <div className='text-content'>
            <h2>Oasis Care</h2>
            <p className="text-white-50 md:text-xl">
                Une application de télémédecine spécialisée dans le suivi des personnes atteintes de diabète
            </p>
            </div>
            </div> 

                 <div className='project' ref={project3Ref}>
             <div className="image-wrapper ">
            <img src="/images/project2.png" alt="Ryde" />
            </div>
            <div className='text-content'>
            <h2>Oasis Care</h2>
            <p className="text-white-50 md:text-xl">
                Une application de télémédecine spécialisée dans le suivi des personnes atteintes de diabète
            </p>
            </div>
            </div> 
        </div>
        </div>

        </div>
        </section>

        
      
    
  
  )
}

export default ShowcaseSection
