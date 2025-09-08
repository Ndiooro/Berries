import React from 'react'

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
        <div className="w-full">
        <div className="showcaselayout"></div>
        {/*LEFT */}
        <div className="first-project-wrapper">
            <div className="image-wrapper">
            <img src="/images/project1.png" alt="Ryde" />
            </div>
            <div className='text-content'>
            <h2>Ryde</h2>
            <p className="text-white-50 md:text-xl">
                
            </p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default ShowcaseSection