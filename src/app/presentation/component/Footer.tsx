import React from 'react';
import Logo from './HomeDec';

const Footer = () => {
  return (
    <footer className="bg-[#F9F9F9] py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <div className="flex justify-center lg:justify-start">
              <Logo />
            </div>
          </div>
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Overview</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Shipping</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Refund</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Promotion</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Companies</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">About</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Career</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Contact Us</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Explore</h3>
            <ul>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Terms & Conditions</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">Privacy Policy</a></li>
              <li className="mb-2"><a href="#" className="text-gray-700 hover:underline">For Developer</a></li>
            </ul>
          </div>
          <div className="w-full lg:w-1/5 mb-6 lg:mb-0">
            <h3 className="text-xl font-bold mb-4">Special Letter</h3>
            <div className="flex items-center">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="w-full px-4 py-2 text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none focus:bg-white"
              />
              <button className="bg-pink-500 text-white px-4 py-2 rounded-r-lg focus:outline-none hover:bg-pink-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.94 1.94A1.5 1.5 0 014 1.5h12a1.5 1.5 0 011.06 2.56l-5.88 5.88a1.5 1.5 0 01-2.12 0l-5.88-5.88a1.5 1.5 0 01-.24-1.62zM18 8.5V16a1.5 1.5 0 01-1.5 1.5H3.5A1.5 1.5 0 012 16V8.5a1.5 1.5 0 013-1V10a1.5 1.5 0 103 0V7.5a1.5 1.5 0 013 0V10a1.5 1.5 0 103 0V7.5a1.5 1.5 0 013 0V10a1.5 1.5 0 103 0V7.5a1.5 1.5 0 011.5 1z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
