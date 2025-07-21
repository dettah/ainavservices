import React, { useRef, useState } from 'react';
import Logo from '../assets/ainav_logo.jpg';

const NavBar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItemRefs = useRef([]);

  const handleMouseEnter = (index) => {
    setHoveredItem(index);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const getUnderlineStyle = () => {
    if (hoveredItem === null || !navItemRefs.current[hoveredItem]) return { display: 'none' };
    const item = navItemRefs.current[hoveredItem];
    const { offsetLeft, offsetWidth } = item;
    return {
      left: offsetLeft,
      width: offsetWidth,
      display: 'block',
    };
  };

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
    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <>
      {/* <div className="h-20 hidden md:flex items-center justify-between py-3 px-8 bg-[#f4eade]">
        <img src={Logo} alt="Company Logo" className="h-full" />
      </div> */}

      <nav className="fixed top-0 z-50 w-full bg-[#2f496e] shadow-md transition-all duration-300 ease-in-out">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between  h-16 items-center">
            <div className="flex-shrink-0 flex h-full py-2">
              <img src={Logo} alt="Company Logo" className="h-full" />
            </div>

            <div className="hidden md:flex space-x-4 justify-center">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Projects', id: 'projects' },
                { name: 'Clients', id: 'clients' },
                { name: 'Contact', id: 'contact' },
              ].map((item, index) => (
                <a
                  key={item.name}
                  href={`#${item.id}`}
                  ref={(el) => (navItemRefs.current[index] = el)}
                  className="text-[#2988bc] hover:text-[#ed8c72] px-3 rounded-md text-md font-extrabold transition-colors duration-200"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                  onClick={(e) => handleNavClick(e, item.id)}
                >
                  {item.name}
                </a>
              ))}
              <div
                className="absolute bottom-0 h-1 bg-[#ed8c72] transition-all duration-200"
                style={getUnderlineStyle()}
              />
            </div>

            <div className="md:hidden flex items-center border-2 border-[#2988bc] hover:border-[#ed8c72]">
              <button
                onClick={toggleMenu}
                className="text-[#2988bc] hover:text-[#ed8c72] focus:outline-none"
                aria-label="Toggle menu"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div
          className={`md:hidden fixed inset-0 bg-[#f4eade] z-50 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex justify-end p-4 bg-[#2f496e]">
            <button
              onClick={toggleMenu}
              className="text-[#2988bc] hover:text-[#ed8c72] focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-col items-center justify-center h-full space-y-6 bg-[#2f496e]">
            {[
              { name: 'Home', id: 'home' },
              { name: 'About Us', id: 'about' },
              { name: 'Services', id: 'services' },
              { name: 'Projects', id: 'projects' },
              { name: 'Clients', id: 'clients' },
              { name: 'Contact', id: 'contact' },
            ].map((item) => (
              <a
                key={item.name}
                href={`#${item.id}`}
                className="text-[#2988bc] hover:text-[#ed8c72] text-lg font-extrabold transition-colors duration-200"
                onClick={(e) => handleNavClick(e, item.id)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;