import React, { useRef } from 'react';

import Client1 from "../assets/clients/BLACKROSE.jpg"
import Client2 from "../assets/clients/Fol_logo.png"
import Client3 from "../assets/clients/MNDA.jpg"
import Client4 from "../assets/clients/POWER_GAS.png"
import Client5 from "../assets/clients/SAHARA.jpg"

const ContinuousCarousel = () => {
  const carouselRef = useRef(null);

  const handleMouseEnter = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'paused';
    }
  };

  const handleMouseLeave = () => {
    if (carouselRef.current) {
      carouselRef.current.style.animationPlayState = 'running';
    }
  };

  const slides = [
    { img: Client1, title: 'Feature 1', desc: 'Discover our amazing feature one.' },
    { img: Client2, title: 'Feature 2', desc: 'Explore the power of feature two.' },
    { img: Client3, title: 'Feature 3', desc: 'Unleash creativity with feature three.' },
    { img: Client4, title: 'Feature 4', desc: 'Experience the innovation of feature four.' },
    { img: Client5, title: 'Feature 4', desc: 'Experience the innovation of feature four.' },
  ];

  return (
    <div
      className="relative w-full h-[100px] md:h-[150px] overflow-hidden md:mx-8 "
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleMouseEnter}
      onTouchEnd={handleMouseLeave}
    >
      <div
        ref={carouselRef}
        className="flex  animate-slide-left  h-full"
        style={{ width: `${slides.length * 40}%` }}
      >
        {slides.concat(slides).map((slide, index) => (
          <div
            key={index}
            className="  h-[70px] bg-contain bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.img})`, flex: `0 0 ${100 / slides.length}%` }}
          >
            {/* <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-white px-4"> */}
                {/* <h2 className="text-2xl md:text-3xl font-bold mb-2">{slide.title}</h2> */}
                {/* <p className="text-sm md:text-base">{slide.desc}</p> */}
              {/* </div>
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinuousCarousel;