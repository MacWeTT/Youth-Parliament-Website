import "./Gallery.css";
import { useState } from "react";
import Slider from "react-slick";

import Image1 from './images/Image (1).JPG';
import Image2 from './images/Image (2).JPG';
import Image3 from './images/Image (3).JPG';
import Image4 from './images/Image (4).JPG';
import Image5 from './images/Image (5).JPG';
import Image6 from './images/Image (6).JPG';
import Image7 from './images/Image (7).JPG';
import Image8 from './images/Image (8).JPG';
import Image9 from './images/Image (9).JPG';
import Image10 from './images/Image (10).JPG';
import Image11 from './images/Image (11).JPG';

import { FiArrowLeft, FiArrowRight } from "react-icons/fi";


const images = [Image1,Image2,Image3,Image4,Image5,Image6,Image7,Image8,Image9,Image10,Image11];

function Gallery() {
const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      <FiArrowRight />
    </div>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      <FiArrowLeft />
    </div>
  );
};

const [imageIndex, setImageIndex] = useState(0);

const settings = {
  infinite: true,
  lazyLoad: true,
  speed: 300,
  slidesToShow: 3,
  autoplay:true,
  centerMode: true,
  centerPadding: 0,
  nextArrow: <NextArrow />,
  prevArrow: <PrevArrow />,
  beforeChange: (current, next) => setImageIndex(next),
  responsive:[
    {
      breakpoint: 500,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
};

  return (
    <>
      <div className='container-teams' id="team-murious">
          <div class="about_heading_container">
                <h3 class="headingsize">OUR&nbsp;<span id="timelinecolor">GALLERY</span></h3>
          </div>
        <div className="SlideshowTeam">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
                <img src={img} alt={img} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Gallery;