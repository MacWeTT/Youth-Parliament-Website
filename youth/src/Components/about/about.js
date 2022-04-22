import React from 'react';
import './about.css';
import decoration2 from './about_images/Vectordecoration 2.png';
import decoration1 from './about_images/Vectordecoration 1.png';
import img1 from './about_images/about image 1.png';
import img2 from './about_images/about image 2.png';
function About(){

    return(
        <div className='about-yp'>
            <div>
                <div class="about_heading_container">
                <h3 class="headingsize">About&nbsp;<span id="timelinecolor">JYC</span></h3>
                </div>

        <div class="textbox about_part">
            
        "Long years ago we made a tryst with destiny, and now the time comes when we shall redeem our pledge, not wholly or in full measure, but very substantially. At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom."                    
        </div>
        
        <div class="about_part">
            
            <div class="paragraph_jyc">
                <img src={decoration1} alt='' className='decoration1'/>
                <div class="textbox">
                The JUIT YOUTH PARLIAMENT aims to strengthen the roots of democracy, instil healthy habits of discipline, tolerance of the views of others, and enable the student community to understand the workings of our Parliamentary institutions.                </div>
            </div>

            <div >
                <img src={img1} alt='' className='img1'/>
            </div>

        </div>


        <div class="about_part about_part_rev">


            <div>
            <img src={img2} alt='' className='img2'/>
            </div>


            <div class="paragraph_jyc">
                <img src={decoration2} alt='' className='decoration2'/>
                <div class="textbox">
                Afterall, transcendence and continuity, hierarchy and collectivism, the characteristic elements of our thousand-year-old ‘tradition’, are the fundamentals of our socio-political psyche.                </div>
            </div>


        </div>


        
    </div>
        </div>
    )
}
export default About;