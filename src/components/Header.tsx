import React from 'react'
import Button from './ui/button'
const Header = () => {
  return (
    
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-10 xl:flex-row">
   

    <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
    

 
 <h1 className="custom-h1 whitespace-nowrap mt-16">
  Capturing beautiful <br />
  moment inside lens and <br />
  shutterspeed
</h1> 
<div className="flex flex-col w-md mt-40">
  <div className="flex flex-wrap gap-3">
    <Button
      type="button" 
      title="Landscape" 
      variant="btn_green"
    />
    <Button
      type="button"
      title="Wildlife"
      variant="btn_white_text"
    />
  </div>
  <div className="flex flex-wrap gap-3 mt-3">
    <Button
      type="button"
      title="Architectural"
      variant="btn_white_text"
    />
    <Button
      type="button"
      title="Travel"
      variant="btn_white_text"
    />
    <Button
      type="button"
      title="Portrait"
      variant="btn_white_text"
    />
  </div>
</div>
 </div>
    <div>
    <div className="flex items-center w-96 mt-[370px] ml-[300px]">
  <span className="text-white mb-6">01</span>
  <div className="flex-grow relative mx-4 mb-6">
    <div className="border-t-2 border-gray-400">
    <div className="absolute left-0 w-32 border-t-2 border-b-2 border-gray-300 rounded-full"></div>
    </div>
   
  </div>
  <span className="text-white mb-6">03</span>

</div>

  <div className="flex space-x-4 ml-[300px]">
    <div className="flex items-center border border-gray-500 rounded-md p-2 w-80 h-32 bg-gray-500">
      <img src="./pic1.jpeg" alt="Lonely Life at the Baltimore" className="w-24 h-24 object-cover rounded-md" />
      <div className="ml-4">
        <h1 className="text-white font-bold text-lg mb-8">Lonely Life at the Baltimore</h1>
        <p className="text-white text-xs">Shoot with Sony a6000</p>
      </div>
    </div>
    <div className="relative flex items-center border border-gray-500 rounded-s-md p-2 w-[140px] h-32 bg-gray-500 overflow-hidden">
  <img src="./pic1.jpeg" alt="Lonely Life at the Baltimore" className="w-24 h-24 rounded-md" />
  <div className="ml-4 flex-1">
    <h1 className="text-white font-semibold text-lg mb-10 overflow-hidden  text-ellipsis">
      Lonely Life at the Baltimore
    </h1>
    <p className="text-white text-xs overflow-hidden whitespace-nowrap text-ellipsis">
      Shoot with Sony a6000
    </p>
  </div>
</div>

</div>
</div>
</section>
  )
}

export default Header