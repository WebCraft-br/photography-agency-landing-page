import React from 'react';
import Contact from './Contact';

const Footer = () => {
  return (
    <>
      <div className="bg-[#363733] text-gray-300 py-10 rounded-2xl max-4">
        <Contact />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-row items-center justify-between">
            <img src='/logo.png' className='w-12 h-12' />
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
    </>
  );
};

export default Footer;
