import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import caro_land1 from "../assets/hero-carousel/ONE.jpg"
import caro_land2 from "../assets/hero-carousel/TWO.png"
import caro_land3 from "../assets/hero-carousel/THREE.png"
import caro_land4 from "../assets/hero-carousel/FOUR.jpeg"
import caro_land5 from "../assets/hero-carousel/FIVE.png"
import caro_land6 from "../assets/hero-carousel/SIX.jpg"
import hero_card3 from "../assets/hero-cards/ENGINEERING.jpg"
import hero_card2 from "../assets/hero-cards/ENVIRONMENT.jpg"
import hero_card1 from "../assets/hero-cards/SURVEY.jpg"
import service1 from "../assets/services/MET3.jpg"
import service2 from "../assets/services/GEOPHYSICAL.jpg"
import service3 from "../assets/services/GEOTECHNICAL.png"
import service4 from "../assets/services/GROUND_SURVEY.jpg"
import service5 from "../assets/services/RIGS.jpeg"
import service6 from "../assets/services/hydro.jpg"
import shoreline from "../assets/project/shorelinetry.jpg"
import facilities from "../assets/project/facilities.jpg"
import facilities1 from "../assets/project/facilities1.jpg"
import facilities2 from "../assets/project/FACILITY_FOUNDATION.jpg"
import bathymetric from "../assets/project/bathymetric.png"
import rose from "../assets/project/rose.jpg"



import ContinuousCarousel from './ContinuousCarousel';
import LandscapePhoto from '../assets/landscapePhoto.jpg';
import Survey from '../assets/survey.jpg';

const Landing = () => {
  const boxes = [
    {
      img: service6,
      title: ' Hydrographic Surveys',
      desc: 'Precise mapping of seabeds, rivers, and coastal zones to support marine construction, navigation, and offshore exploration',
    },
    { img: service2, title: 'Geophysical Surveys', desc: 'Subsurface investigation using advanced technologies to detect geological structures critical for engineering and resource development' },
    { img: service3, title: 'Geotechnical Site Surveys', desc: 'Comprehensive soil and ground condition assessments for safe, stable, and cost-effective foundation design' },
    { img: service1, title: 'Metocean Surveys', desc: 'Real-time data collection on weather and ocean conditions to guide marine operations and support environmental compliance' },
    { img: service5, title: 'Positioning & Navigation', desc: 'High-precision positioning services for rigs, barges, and VSP operations—ensuring accuracy in offshore and subsea activities' },
    { img: service4, title: 'Remote Sensing & Ground Surveys', desc: 'Integrated aerial and terrestrial data capture for large-scale mapping, terrain modeling, and infrastructure planning' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Shoreline Monitoring & Protection – Ikot Abasi, Akwa Ibom',
      desc: 'Shoreline Survey for monitoring and protecting a section of the shoreline in Ikot Abasi Village, Ikot Abasi L.G.A, Akwa Ibom State for Ministry of Niger Delta Affairs.',
      img: shoreline,
    },
    {
      id: 2,
      title: 'Geophysical & Bathymetric Survey – Qua Iboe Export Hub, Akwa Ibom',
      desc: 'Geophysical and Bathymetric Survey of Qua Iboe Export Hub in Liberty Free Trade Zone, Akwa Ibom State for BLACKROSE Chemicals Limited.',
      img: rose,
    },
    {
      id: 3,
      title: 'Geotechnical Survey & Site Setting – Gas Compression Plant, Delta State',
      desc: 'Geotechnical survey and setting out of all facilities and foundation structures of Natural gas compression plant in Ebedei Delta state for power Gas Nigeria .',
      img: facilities2,
    },
    {
      id: 4,
      title: 'Topographic Survey – Early Production Facility, Esit Eket, Akwa Ibom',
      desc: 'Topographic Survey of Early Production Facility Site at Edo, Esit Eket, Akwa Ibom State for Frontier Oil Limited.',
      img: facilities1,
    },
    {
      id: 5,
      title: 'Post-Dredging Bathymetric Survey – NAOC Jetty, Brass, Bayelsa',
      desc: 'Post-dredged bathymetric survey of Nigerian Agip Oil Company (NAOC) Jetty, Brass, Bayelsa State.',
      img: bathymetric,
    },
  ];

  const [selectedProject, setSelectedProject] = useState(projects[0]);

  const renderArrowPrev = (clickHandler, hasPrev, label) => (
    <button
      type="button"
      onClick={clickHandler}
      disabled={!hasPrev}
      className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#2f496e] border border-[#ed8c72] bg-opacity-70 rounded-full hover:bg-opacity-90 transition-opacity duration-200 ${!hasPrev ? 'opacity-50' : ''}`}
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
      className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-10 p-2 bg-[#2f496e] bg-opacity-70 rounded-full border border-[#ed8c72] hover:bg-opacity-90 transition-opacity duration-200 ${!hasNext ? 'opacity-50' : ''}`}
      aria-label={label}
    >
      <svg className="w-6 h-6 text-[#f4eade]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </button>
  );

  const handleNavClick = (e, sectionId) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = window.innerWidth >= 768 ? 116 : 64; // 20px (spacer) + 64px (nav)
      const sectionPosition = section.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: sectionPosition - offset,
        behavior: 'smooth',
      });
    }
  };


  return (
    <div className="bg-[#f4eade] relative pt-24 md:pt-0 w-full overflow-x-hidden">
      {/* Home (Carousel) Section */}
      <section id="home" className="relative w-[100vw] slide-up">
        <div className="relative w-full sm:h-[60vh] md:h-[95vh] overflow-y-hidden">
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
              <img src={caro_land1} alt="Slide 1: Feature 1" className="w-full object-cover" />
              <div className="absolute bottom-4 left-4 text-[#f4eade]">
                <h2 className="text-2xl md:text-3xl font-bold">Feature 1</h2>
                <p className="text-sm md:text-base">Discover our amazing feature one.</p>
              </div>
            </div>
            <div>
              <img src={caro_land2} alt="Slide 4: Feature 4" className="w-full object-cover" />
              <div className="absolute bottom-4 left-4 text-[#f4eade]">
                <h2 className="text-2xl md:text-3xl font-bold">Feature 4</h2>
                <p className="text-sm md:text-base">Experience the innovation of feature four.</p>
              </div>
            </div>
            <div>
              <img src={caro_land3} alt="Slide 2: Feature 2" className="h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-[#f4eade]">
                <h2 className="text-2xl md:text-3xl font-bold">Feature 2</h2>
                <p className="text-sm md:text-base">Explore the power of feature two.</p>
              </div>
            </div>
            <div>
              <img src={caro_land4} alt="Slide 3: Feature 3" className="h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-[#f4eade]">
                <h2 className="text-2xl md:text-3xl font-bold">Feature 3</h2>
                <p className="text-sm md:text-base">Unleash creativity with feature three.</p>
              </div>
            </div>
            <div>
              <img src={caro_land5} alt="Slide 3: Feature 3" className="h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-[#f4eade]">
                <h2 className="text-2xl md:text-3xl font-bold">Feature 3</h2>
                <p className="text-sm md:text-base">Unleash creativity with feature three.</p>
              </div>
            </div>
            <div>
              <img src={caro_land6} alt="Slide 3: Feature 3" className="h-full object-cover" />
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
            style={{ backgroundImage: `url(${hero_card1})` }}
          >
            <div className="absolute inset-0 bg-[#2f496e] image-box-overlay1"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-[#f4eade] px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Survey</h2>
                <p className="text-sm sm:text-base md:text-lg">Precision-driven surveys for smarter decisions and lasting impact.</p>
              </div>
            </div>
          </div>
          <div
            className="relative w-full h-[300px] md:h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${hero_card3})` }}
          >
            <div className="absolute inset-0 bg-[#2f496e] image-box-overlay2"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-[#f4eade] px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Construction</h2>
                <p className="text-sm sm:text-base md:text-lg">Innovative engineering solutions built for performance and the future.</p>
              </div>
            </div>
          </div>
          <div
            className="relative w-full h-[300px] md:h-[300px] bg-cover bg-center"
            style={{ backgroundImage: `url(${hero_card2})` }}
          >
            <div className="absolute inset-0 bg-[#2f496e] image-box-overlay"></div>
            <div className="relative z-10 flex items-center justify-center h-full">
              <div className="text-center text-[#f4eade] px-4">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2">Environmentals</h2>
                <p className="text-sm sm:text-base md:text-lg">Sustainable practices that align progress with environmental responsibility.</p>
              </div>
            </div>
          </div>
          

        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="px-4 sm:px-6 md:px-8 md:flex md:flex-row md:items-center flex flex-col items-center justify-center pt-4 md:pt-48 md:mt-18 space-y-6 md:space-y-0 md:space-x-12 slide-up pb-25"
      >
        <div className="md:flex justify-center hidden sm:pl-6 md:pl-2 w-full md:w-fit">
          <img src={Survey} alt="About AINAV image" className="rounded md:h-[75vh]" />
        </div>
        <div className="flex flex-col md:w-[50%] pl-6 space-y-4">
          <h1 className="text-[#2988bc] text-2xl md:text-5xl font-bold mt-10">About AINAV</h1>
          <p className="leading-7 pr-6 text-[#2f496e]">
            <strong>AINAV</strong> Services Limited is a Nigerian-owned company delivering cutting-edge Surveying, Engineering, and Environmental solutions. Backed by nearly a decade of experience, our team of skilled professionals combines innovation with precision to serve key industries—oil, gas, marine construction, civil engineering and dredging. <br />
          </p>
          <p className="leading-7 pr-6 text-[#2f496e]">
            From onshore to offshore, we deploy advanced technology and local expertise to execute projects of any scale. <br />
          </p>
          <p className="leading-7 pr-6 text-[#2f496e]">
            At <strong>AINAV</strong>, we don’t just meet standards—we set them.
          </p>
          <div className="flex space-x-2">
            <button
              onClick={(e) => handleNavClick(e, 'services')}
              className="bg-[#2988bc] text-[#f4eade] rounded h-10 md:h-14 w-32 cursor-pointer hover:bg-[#ed8c72] transition-all ease-in-out duration-200"
            >
              Learn More
            </button>
            <button
              onClick={(e) => handleNavClick(e, 'contact')}
              className="border-2 border-[#ed8c72] text-[#2988bc] cursor-pointer rounded h-10 md:h-14 w-32 hover:bg-[#ed8c72] hover:text-[#f4eade] hover:border-none transition-all ease-in-out duration-200"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>



      {/* <section
        id="about"
        className="px-4 sm:px-6 md:px-8 md:flex md:flex-row md:items-center flex flex-col items-center justify-center pt-4 md:pt-48 md:mt-18 space-y-6 md:space-y-0 md:space-x-12 slide-up pb-25"
      >
        <div className="md:flex justify-center hidden sm:pl-6 md:pl-2 w-full md:w-fit">
          <img src={Survey} alt="About AINAV image" className="rounded md:h-[75vh]" />
        </div>
        <div className="flex flex-col md:w-[50%] pl-6 space-y-4">
          <h1 className="text-[#2988bc] text-2xl md:text-5xl font-bold mt-10">About AINAV</h1>
          <p className="leading-7 pr-6  text-[#2f496e]">
            <strong>AINAV</strong> Services Limited is a Nigerian-owned company delivering cutting-edge Surveying, Engineering, and Environmental solutions. Backed by nearly a decade of experience, our team of skilled professionals combines innovation with precision to serve key industries—oil, gas, marine construction, civil engineering and dredging. <br />
          </p>
          <p className="leading-7 pr-6 text-[#2f496e]">From onshore to offshore, we deploy advanced technology and local expertise to execute projects of any scale. <br /></p>
          <p className="leading-7 pr-6 text-[#2f496e]">
            At <strong>AINAV</strong>, we don’t just meet standards—we set them.
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
      </section> */}

      {/* Services Section */}
      <section id="services" className="px-4 sm:px-6 md:px-8 py-8 md:py-20 bg-white slide-up">
        <h1 className="text-2xl md:text-5xl font-bold text-center mb-16 text-[#2988bc]">Services</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {boxes.map((box, index) => (
            <div key={index} className="bg-[#f4eade] rounded-lg overflow-hidden border border-[#ed8c72] box-hover">
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

      {/* Projects Section */}
      <section id="projects" className="px-4 sm:px-6 md:px-8 py-8 md:py-20 slide-up">
        <h1 className="text-2xl md:text-5xl font-bold text-center mb-16 text-[#2988bc]">Projects</h1>
        <div className="md:flex  md:flex-row md:space-x-8 ">
          {/* Project List (Desktop) */}
          <div className="hidden md:block md:w-1/3 max-h-[500px]  overflow-y-scroll ">
            <ul className="space-y-4">
              {projects.map((project) => (
                <li key={project.id}>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className={`w-full text-left p-4 rounded-lg project-button-hover ${selectedProject.id === project.id
                      ? 'bg-[#2988bc] text-[#f4eade]'
                      : 'bg-[#f4eade] text-[#2f496e]'
                      }`}
                  >
                    <h2 className="text-lg md:text-xl font-bold">{project.title}</h2>
                    <p className="text-sm">{project.desc}</p>
                  </button>
                </li>
              ))}
            </ul>
          </div>
          {/* Project Image (Desktop) */}
          <div className="hidden md:flex md:items-center  md:w-2/3 ">
            <div className="relative w-full h-[400px] bg-[#f4eade] py-auto rounded-lg border border-[#ed8c72] overflow-hidden box-hover ">
              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          {/* Project Carousel (Mobile) */}
          <div className="md:hidden">
            <Carousel
              autoPlay={false}
              infiniteLoop
              showThumbs={false}
              showStatus={false}
              showIndicators
              swipeable
              emulateTouch
              renderArrowPrev={renderArrowPrev}
              renderArrowNext={renderArrowNext}
            >
              {projects.map((project) => (
                <div key={project.id} className="p-4 max-h-[400px] project-slide-hover">
                  <img
                    src={project.img}
                    alt={project.title}
                    className="w-full h-[200px] object-cover rounded-lg border border-[#ed8c72]"
                    loading="lazy"
                  />
                  <div className="mt-4 text-center">
                    <h2 className="text-lg font-bold text-[#2988bc]">{project.title}</h2>
                    <p className="text-sm text-[#2f496e]">{project.desc}</p>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </section>

      {/* Clients Section */}
      <section id="clients" className="py-12 slide-up">
        <h1 className="text-3xl w-[100vw] font-bold text-center mb-14 text-[#2988bc]">Our Clients</h1>
        <div className='h-full '>
          <ContinuousCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="px-4 sm:px-6 md:px-8 py-8 md:pr-26 slide-up relative"
        style={{ backgroundImage: `url(${LandscapePhoto})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#2f496e] image-box-overlay-contact"></div>
        <div className="relative z-10 flex flex-col md:flex-row md:justify-end items-center md:items-start">
          <div className="flex flex-col space-y-6 max-w-md w-full px-4">
            <h1 className="text-[#2988bc] text-5xl font-bold text-center md:text-left">Contact</h1>
            <p className="text-lg text-[#f4eade] text-center md:text-left">
              Get in touch with us at{' '}
              <a href="mailto:contact@ainavservices.com" className="text-[#2988bc] border-b-1 border-[#ed8c72] hover:border-none hover:text-[#ed8c72] transition-colors duration-200">
                contact@ainavservices.com
              </a>{' '}
              or call{' '}
              <a href="tel:+2348064476373" className="text-[#2988bc] border-b-1 border-[#ed8c72] hover:border-none hover:text-[#ed8c72] transition-colors duration-200">
                +234 806 447 6373
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