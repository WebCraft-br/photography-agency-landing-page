import React from 'react';
import Contact from './Contact';

const Footer = () => {
  return (
    <div className="max-4 gap-20 pb-10 px-10 mt-20">
      <div className="bg-[#363733] text-gray-300 px-5 py-7 rounded-2xl">
        <Contact />
        <div className="px-5 sm:px-6 lg:px-8">
          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-row items-center justify-between">
            <img src='/logo.png' className='w-12 h-12 rounded-2xl' />
            <div className="flex space-x-6">
              <a href="#" className="hover:underline">About Us</a>
              <a href="#" className="hover:underline">Project</a>
              <a href="#" className="hover:underline">Services</a>
              <a href="#" className="hover:underline">Terms & Conditions</a>
            </div>
            <p className="text-sm">©Creacy 2023. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
