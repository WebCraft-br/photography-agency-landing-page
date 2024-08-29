import React from "react";
import HeaderButton from "./ui/HeaderButton";

const Header = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-10 xl:flex-row">
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <h1 className=" whitespace-nowrap mt-16 text-7xl text-white">
          Capturing beautiful <br />
          moment inside lens and <br />
          shutterspeed
        </h1>
        <div className="flex flex-col w-md mt-40">
          <div className="flex flex-wrap gap-3">
            <HeaderButton type="button" title="Landscape" variant="btn_green" />
            <HeaderButton type="button" title="Wildlife" variant="btn_white_text" />
          </div>
          <div className="flex flex-wrap gap-3 mt-3">
            <HeaderButton
              type="button"
              title="Architectural"
              variant="btn_white_text"
            />
            <HeaderButton type="button" title="Travel" variant="btn_white_text" />
            <HeaderButton type="button" title="Portrait" variant="btn_white_text" />
          </div>
        </div>
      </div>
      <div>

        {/* Image Section */}
        <div className="relative flex flex-col items-center w-full max-w-8xl mx-auto  mt-80 ml-48">
          {/* Horizontal Line Section */}
          <div className="relative flex items-center w-full max-w-8xl mx-auto mb-8">
            <span className="text-white text-lg ml-24">01</span>
            <div className="flex-grow  relative mx-2">
              <div className="absolute inset-0 flex items-center">
                <div className="w-[300px] border-t-2 border-gray-400"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-between ">
                {/* Highlighted Section */}
                <div className="border-t-4 border-gray-300 bg-gray-200 w-32"></div>
                {/* Original Highlight */}
                <div className="border-t-4 border-gray-300"></div>
              </div>
            </div>
            <span className="text-white text-lg mr-80">03</span>
          </div>
          {/* Scrollable Container Section */}
          <div className="relative z-20 flex flex-col items-center lg:mt-0 xl:ml-[100px] mr-48">
            <div className="hide-scrollbar flex h-[340px] w-72 mt-8 items-start justify-start gap-2 overflow-x-auto lg:h-[400px]">
              <div className="flex items-center border border-gray-500 rounded-md p-2 w-80 h-32 backdrop-blur-sm shrink-0">
                <img src="./pic1.jpeg" alt="Lonely Life at the Baltimore" className="w-24 h-24 object-cover rounded-md" />
                <div className="ml-4">
                  <h1 className="text-white font-bold text-lg mb-8">Lonely Life at the Baltimore</h1>
                  <p className="text-white text-xs">Shoot with Sony a6000</p>
                </div>
              </div>
              <div className="flex items-center border border-gray-500 rounded-md p-2 w-80 h-32 backdrop-blur-sm shrink-0">
                <img src="./pic1.jpeg" alt="Lonely Life at the Baltimore" className="w-24 h-24 object-cover rounded-md" />
                <div className="ml-4 flex-1">
                  <h1 className="text-white font-semibold text-lg mb-10">Lonely Life at the Baltimore</h1>
                  <p className="text-white text-xs whitespace-nowrap">Shoot with Sony a6000</p>
                </div>
              </div>
              {/* Additional items for scrolling */}
              <div className="flex items-center border border-gray-500 rounded-md p-2 w-80 h-32 backdrop-blur-sm shrink-0">
                <img src="./pic1.jpeg" alt="Another Image" className="w-24 h-24 object-cover rounded-md" />
                <div className="ml-4">
                  <h1 className="text-white font-bold text-lg mb-8">Lonely Life at the Baltimore</h1>
                  <p className="text-white text-xs">Shoot with Nikon D850</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
