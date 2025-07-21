import React from 'react';
import Logo from '../assets/ainav_logo.jpg';

const Footer = () => {
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
    <footer className="bg-[#2f496e] text-[#f4eade]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col items-center sm:items-start">
            <img src={Logo} alt="Company Logo" className="h-16 mb-4" />
            <p className="text-sm text-[#2988bc] text-center sm:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-bold mb-4 text-[#f4eade]">Quick Links</h3>
            <ul className="space-y-2 text-center sm:text-left">
              {[
                { name: 'Home', id: 'home' },
                { name: 'About Us', id: 'about' },
                { name: 'Services', id: 'services' },
                { name: 'Projects', id: 'projects' },
                { name: 'Clients', id: 'clients' },
                { name: 'Contact', id: 'contact' },
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={`#${item.id}`}
                    className="text-[#2988bc] hover:text-[#ed8c72] text-sm transition-colors duration-200"
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-bold mb-4 text-[#f4eade]">Contact Us</h3>
            <p className="text-sm text-[#2988bc] text-center sm:text-left">
              121, Nwaniba Road, Uyo, Akwa Ibom State, Nigeria
              <br />
              Email: <a href="mailto:contact@ainavservices.com" className="text-[#2988bc] hover:text-[#ed8c72] transition-colors duration-200">contact@ainavservices.com</a>
              <br />
              Phone: <a href="tel:+1234567890" className="text-[#2988bc] hover:text-[#ed8c72] transition-colors duration-200">+234 806 447 6373</a>
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-lg font-bold mb-4 text-[#f4eade]">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-[#2988bc] hover:text-[#ed8c72]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </a>
              <a href="#" aria-label="Twitter" className="text-[#2988bc] hover:text-[#ed8c72]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124-4.09-.205-7.719-2.165-10.141-5.144-.424.729-.666 1.574-.666 2.475 0 1.708.869 3.215 2.188 4.099-.807-.026-1.566-.247-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.828-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.621 1.943 2.423 3.356 4.558 3.396-1.669 1.307-3.768 2.085-6.049 2.085-.393 0-.779-.022-1.159-.065 2.152 1.381 4.712 2.186 7.459 2.186 8.952 0 13.854-7.414 13.854-13.854 0-.211-.005-.422-.014-.632.951-.689 1.773-1.551 2.422-2.533z" />
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="text-[#2988bc] hover:text-[#ed8c72]">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-[#2988bc] text-center text-sm text-[#2988bc]">
          <p>© {new Date().getFullYear()} AINAV. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;