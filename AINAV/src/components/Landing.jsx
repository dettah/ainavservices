import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import CarouselImg1 from '../assets/carousel1.jpg';
import CarouselImg2 from '../assets/carousel2.jpg';
import CarouselImg3 from '../assets/carousel3.jpg';
import CarouselImg4 from '../assets/carousel4.jpg';
import LandscapePhoto from '../assets/landscapePhoto.jpg';
import ContinuousCarousel from './ContinuousCarousel';
import Ship from '../assets/ship.jpeg'

const Landing = () => {
  const boxes = [
    {
      img: CarouselImg1,
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea earum corporis facere, veritatis incidunt in eligendi. Error laborum laboriosam excepturi saepe inventore cumque iure enim, tempora cum at, repellendus voluptatem.',
    },
    { img: CarouselImg2, title: 'Box 2', desc: 'Description for box 2' },
    { img: CarouselImg3, title: 'Box 3', desc: 'Description for box 3' },
    { img: CarouselImg4, title: 'Box 4', desc: 'Description for box 4' },
    { img: CarouselImg1, title: 'Box 5', desc: 'Description for box 5' },
    { img: CarouselImg2, title: 'Box 6', desc: 'Description for box 6' },
  ];

  const renderArrowPrev = (clickHandler, hasPrev, label) => (
    <button
      type="button"
      onClick={clickHandler}
      disabled={!hasPrev}
      className="absolute left-4 top-1/4 transform -translate-y-1/2 z-10 p-2 bg-[#2f496e] border border-[#ed8c72] bg-opacity-70 rounded-full hover:bg-opacity-90 transition duration-200"
      aria-label={label}
    >
      <svg className="w-6 h-6 text-[#f4eade]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
      </svg>
    </button>
  );

  const renderArrowNext = (clickHandler, hasNext, label) => (
    <button
      type="button"
      onClick={clickHandler}
      disabled={!hasNext}
      className="absolute right-4 top-1/4 transform -translate-y-1/2 z-10 p-2 bg-[#2f496e] bg-opacity-70 rounded-full border border-[#ed8c72] hover:bg-opacity-90 transition duration-200"
      aria-label={label}
    >
      <svg className="w-6 h-6 text-[#f4eade]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  return (
    <div className="bg-[#f4eade] relative pt-16 md:pt-20">
      {/* Home (Carousel) Section */}
      <section id="home" className="relative w-[100vw] slide-up">
        <div className="relative w-full border  h-[60vh] md:h-[80vh] overflow-y-hidden">
          <Carousel
            autoPlay
            interval={1000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
            showIndicators
            swipeable
            emulateTouch
            renderArrowPrev={renderArrowPrev}
            renderArrowNext={renderArrowNext}
            className="carousel-wrapper"
          >
            <div>
              <img src={CarouselImg1} alt="Slide 1: Feature 1" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-[#f4eade]">
                <h2 className="text-2xl md:text-3xl font-bold">Feature 1</h2>
                <p className="text-sm md:text-base">Discover our amazing feature one.</p>
              </div>
            </div>
            <div>
              <img src={CarouselImg4} alt="Slide 4: Feature 4" className="h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-[#f4eade]">
                <h2 className="text-2xl md:text-3xl font-bold">Feature 4</h2>
                <p className="text-sm md:text-base">Experience the innovation of feature four.</p>
              </div>
            </div>
            <div>
              <img src={CarouselImg2} alt="Slide 2: Feature 2" className="h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-[#f4eade]">
                <h2 className="text-2xl md:text-3xl font-bold">Feature 2</h2>
                <p className="text-sm md:text-base">Explore the power of feature two.</p>
              </div>
            </div>
            <div>
              <img src={CarouselImg3} alt="Slide 3: Feature 3" className="h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-[#f4eade]">
                <h2 className="text-2xl md:text-3xl font-bold">Feature 3</h2>
                <p className="text-sm md:text-base">Unleash creativity with feature three.</p>
              </div>
            </div>
          </Carousel>
        </div>

        <div className="mx-auto px-4 sm:px-6 lg:px-8 py-8 hidden h-fit w-[100vw] absolute bottom-0 transform translate-y-1/2 md:flex justify-center gap-4">
          <div
            className="relative w-full h-[300px] md:h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${CarouselImg1})` }}
          >
            <div className="absolute inset-0 bg-[#2f496e] image-box-overlay"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-[#f4eade] px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Welcome to Our Site</h2>
                <p className="text-sm sm:text-base md:text-lg">Discover amazing content with a stunning background.</p>
              </div>
            </div>
          </div>
          <div
            className="relative w-full h-[300px] md:h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${CarouselImg1})` }}
          >
            <div className="absolute inset-0 bg-[#2f496e] image-box-overlay1"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-[#f4eade] px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Welcome to Our Site</h2>
                <p className="text-sm sm:text-base md:text-lg">Discover amazing content with a stunning background.</p>
              </div>
            </div>
          </div>
          <div
            className="relative w-full h-[300px] md:h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${CarouselImg1})` }}
          >
            <div className="absolute inset-0 bg-[#2f496e] image-box-overlay2"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-[#f4eade] px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Welcome to Our Site</h2>
                <p className="text-sm sm:text-base md:text-lg">Discover amazing content with a stunning background.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-4 sm:px-6 md:px-8 md:flex md:flex-row md:items-center flex flex-col items-center justify-center pt-4 md:pt-48 md:mt-18 space-y-6 md:space-y-0 md:space-x-12 slide-up "
      >
        <div className="  md:flex justify-center hidden sm:pl-6 md:pl-2 ">
          <img src={Ship} alt="About AINAV image" className="rounded h-[75vh]" />
        </div>
        <div className="flex flex-col md:w-[50%] pl-6 space-y-6">
          <h1 className="text-[#2988bc] text-5xl font-bold mt-10">About AINAV</h1>
          <p className="leading-8 pr-6 text-[#2f496e]">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur natus ipsa magnam nisi quo velit nemo id! Numquam non magni vitae rem provident facilis corporis, inventore eveniet modi, natus ullam? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis, eius.
          </p>
          <div className="flex space-x-2">
            <button className="bg-[#2988bc] text-[#f4eade] rounded h-10 md:h-14 w-32 cursor-pointer hover:bg-[#ed8c72] transition-all ease-in-out duration-200">
              Learn More
            </button>
            <button className="border-2 border-[#ed8c72] text-[#2988bc] cursor-pointer rounded h-10 md:h-14 w-32 hover:bg-[#ed8c72] hover:text-[#f4eade] hover:border-none transition-all ease-in-out duration-200">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-6 md:px-8 py-8 md:my-24 slide-up">
        <h1 className="text-5xl py- font-bold text-center mb-6 text-[#2988bc]">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {boxes.map((box, index) => (
            <div key={index} className="bg-[#f4eade] rounded-lg overflow-hidden border border-[#ed8c72]">
              <div className="overflow-y-hidden md:h-60">
                <img src={box.img} alt={box.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 my-8 text-[#2f496e]">{box.title}</h2>
                <p className="text-xs sm:text-sm md:text-base text-[#2f496e]">{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects (Clients) Section */}
      <section id="projects" className="py-8 slide-up">
        <h1 className="text-3xl font-bold text-center mb-6 text-[#2988bc]">Our Clients</h1>
        <ContinuousCarousel />
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-4 sm:px-6 md:px-8 py-8 md:pr-26 slide-up relative"
        style={{ backgroundImage: `url(${LandscapePhoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#2f496e] image-box-overlay1"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:justify-end items-center md:items-start">
          <div className="flex flex-col space-y-6 max-w-md w-full px-4">
            <h1 className="text-[#2988bc] text-5xl font-bold text-center md:text-left">Contact</h1>
            <p className="text-lg text-[#f4eade] text-center md:text-left">
              Get in touch with us at{' '}
              <a href="mailto:contact@ainav.com" className="text-[#2988bc] hover:text-[#ed8c72] transition-colors duration-200">
                contact@ainav.com
              </a>{' '}
              or call{' '}
              <a href="tel:+1234567890" className="text-[#2988bc] hover:text-[#ed8c72] transition-colors duration-200">
                +123 456 7890
              </a>
              .
            </p>
            <form className="w-full space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 bg-[#f4eade] border border-[#ed8c72] rounded focus:outline-none focus:ring-2 focus:ring-[#2988bc] text-[#2f496e]"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 bg-[#f4eade] border border-[#ed8c72] rounded focus:outline-none focus:ring-2 focus:ring-[#2988bc] text-[#2f496e]"
              />
              <textarea
                placeholder="Your Message"
                className="w-full p-2 bg-[#f4eade] border border-[#ed8c72] rounded focus:outline-none focus:ring-2 focus:ring-[#2988bc] text-[#2f496e]"
                rows="4"
              ></textarea>
              <button className="bg-[#2988bc] text-[#f4eade] rounded h-14 w-full cursor-pointer hover:bg-[#ed8c72] transition-all ease-in-out duration-200">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;