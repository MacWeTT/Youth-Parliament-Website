import React from 'react'
import './Landing.css'
import Trailer from './Video/video.mp4'

function Landing() {
  return (
    <>
    <div className='YP-Landing'>
        <div className='YP-Trailer_Container'>
            <video autoPlay loop muted className='YP-Trailer'>
                <source src={Trailer} type='video/mp4'/>
            </video>
        </div>
        <div className='Landing-Content'>
            <div className='Landing-Heading'>
                <h1 className='JYP-Heading'>
                    JUIT<br/>
                    Youth<br/>
                    Parliament<br/>
                    <button className='Register'>
                        <a href='https://forms.gle/futZEyYFp9Xn3Ku36' className='Registration-Link'>
                        Register<br/> Here</a>
                </button>
                </h1>
            </div>
        </div>
    </div>
    </>
  )
}

export default Landing